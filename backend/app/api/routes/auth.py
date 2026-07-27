from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import verify_password, get_password_hash, create_access_token
from app.models import User
from app.schemas.auth import UserCreate, Token, UserResponse
from app.core.config import settings
from app.services.oauth import oauth, get_or_create_user_from_oauth
from app.core.email import send_otp_email
import random

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

def generate_otp() -> str:
    return f"{random.randint(100000, 999999)}"

@router.post("/signup")
async def signup(user_data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user_data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed = get_password_hash(user_data.password)
    otp = generate_otp()
    new_user = User(
        email=user_data.email,
        hashed_password=hashed,
        full_name=user_data.full_name,
        verification_code=otp,
        is_verified=False
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    send_otp_email(new_user.email, otp)
    return {"message": "OTP sent", "email": new_user.email}

@router.post("/verify-otp")
def verify_otp(email: str, code: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if user.is_verified:
        raise HTTPException(status_code=400, detail="User already verified")
    if user.verification_code != code:
        raise HTTPException(status_code=400, detail="Invalid OTP")
    user.is_verified = True
    user.verification_code = None
    db.commit()
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

# --- Keep existing endpoints unchanged ---
@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    if not user.is_verified:
        raise HTTPException(status_code=401, detail="Email not verified")
    if not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=UserResponse)
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    from jose import JWTError, jwt
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user

# ========== Google OAuth ==========
@router.get("/google")
async def google_login(request: Request):
    redirect_uri = "http://localhost:8000/api/auth/google/callback"
    return await oauth.google.authorize_redirect(request, redirect_uri)

@router.get("/google/callback")
async def google_callback(request: Request, db: Session = Depends(get_db)):
    token = await oauth.google.authorize_access_token(request, parse_id_token=False)
    resp = await oauth.google.get('https://www.googleapis.com/oauth2/v3/userinfo', token=token)
    if not resp:
        raise HTTPException(status_code=400, detail="Failed to get user info")
    userinfo = resp.json()
    email = userinfo.get('email')
    if not email:
        raise HTTPException(status_code=400, detail="Email not provided")
    full_name = userinfo.get('name', email)
    user = get_or_create_user_from_oauth(db, email, full_name, "google")
    user.is_verified = True
    user.verification_code = None
    db.commit()
    access_token = create_access_token(data={"sub": user.email})
    frontend_url = f"http://localhost:8080/oauth-callback?token={access_token}"
    return RedirectResponse(frontend_url)

# ========== GitHub OAuth ==========
@router.get("/github")
async def github_login(request: Request):
    redirect_uri = "http://localhost:8000/api/auth/github/callback"
    return await oauth.github.authorize_redirect(request, redirect_uri)

@router.get("/github/callback")
async def github_callback(request: Request, db: Session = Depends(get_db)):
    token = await oauth.github.authorize_access_token(request)
    resp = await oauth.github.get('https://api.github.com/user', token=token)
    if not resp:
        raise HTTPException(status_code=400, detail="Failed to get user info")
    userinfo = resp.json()
    email = userinfo.get('email')
    if not email:
        emails_resp = await oauth.github.get('https://api.github.com/user/emails', token=token)
        if emails_resp:
            emails = emails_resp.json()
            if emails and isinstance(emails, list):
                for e in emails:
                    if e.get('primary') and e.get('verified'):
                        email = e.get('email')
                        break
    if not email:
        raise HTTPException(status_code=400, detail="Email not accessible")
    full_name = userinfo.get('name') or userinfo.get('login', email)
    user = get_or_create_user_from_oauth(db, email, full_name, "github")
    user.is_verified = True
    user.verification_code = None
    db.commit()
    access_token = create_access_token(data={"sub": user.email})
    frontend_url = f"http://localhost:8080/oauth-callback?token={access_token}"
    return RedirectResponse(frontend_url)
