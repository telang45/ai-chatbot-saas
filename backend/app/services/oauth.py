from authlib.integrations.starlette_client import OAuth
from starlette.config import Config
from sqlalchemy.orm import Session
from app.models import User
from app.core.security import get_password_hash
import secrets
import string

config = Config('.env')
oauth = OAuth(config)

oauth.register(
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_id=config('GOOGLE_CLIENT_ID'),
    client_secret=config('GOOGLE_CLIENT_SECRET'),
    client_kwargs={
        'scope': 'openid email profile',
        'timeout': 10
    }
)

oauth.register(
    name='github',
    client_id=config('GITHUB_CLIENT_ID'),
    client_secret=config('GITHUB_CLIENT_SECRET'),
    authorize_url='https://github.com/login/oauth/authorize',
    access_token_url='https://github.com/login/oauth/access_token',
    userinfo_url='https://api.github.com/user',
    client_kwargs={'scope': 'user:email', 'timeout': 10}
)

def generate_random_password(length=32):
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def get_or_create_user_from_oauth(db: Session, email: str, full_name: str, provider: str) -> User:
    user = db.query(User).filter(User.email == email).first()
    if not user:
        hashed = get_password_hash(generate_random_password())
        user = User(
            email=email,
            hashed_password=hashed,
            full_name=full_name or email.split('@')[0],
            is_active=True
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    return user
