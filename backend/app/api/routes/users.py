from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models import User, Settings
from app.api.routes.auth import get_current_user
from pydantic import BaseModel

router = APIRouter()

class UserUpdate(BaseModel):
    full_name: str | None = None
    avatar_url: str | None = None

class SettingsUpdate(BaseModel):
    theme: str | None = None
    language: str | None = None
    ai_provider: str | None = None
    model: str | None = None
    temperature: float | None = None
    max_tokens: int | None = None

@router.get("/me")
def get_user(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "avatar_url": current_user.avatar_url,
        "is_active": current_user.is_active,
        "created_at": current_user.created_at
    }

@router.put("/me")
def update_user(user_data: UserUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    if user_data.full_name is not None:
        current_user.full_name = user_data.full_name
    if user_data.avatar_url is not None:
        current_user.avatar_url = user_data.avatar_url
    db.commit()
    db.refresh(current_user)
    return {"message": "User updated"}

@router.get("/settings")
def get_settings(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    settings = db.query(Settings).filter(Settings.user_id == current_user.id).first()
    if not settings:
        settings = Settings(user_id=current_user.id)
        db.add(settings)
        db.commit()
        db.refresh(settings)
    return {
        "theme": settings.theme,
        "language": settings.language,
        "ai_provider": settings.ai_provider,
        "model": settings.model,
        "temperature": settings.temperature,
        "max_tokens": settings.max_tokens
    }

@router.put("/settings")
def update_settings(settings_data: SettingsUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    settings = db.query(Settings).filter(Settings.user_id == current_user.id).first()
    if not settings:
        settings = Settings(user_id=current_user.id)
        db.add(settings)
    if settings_data.theme is not None:
        settings.theme = settings_data.theme
    if settings_data.language is not None:
        settings.language = settings_data.language
    if settings_data.ai_provider is not None:
        settings.ai_provider = settings_data.ai_provider
    if settings_data.model is not None:
        settings.model = settings_data.model
    if settings_data.temperature is not None:
        settings.temperature = settings_data.temperature
    if settings_data.max_tokens is not None:
        settings.max_tokens = settings_data.max_tokens
    db.commit()
    db.refresh(settings)
    return {"message": "Settings updated"}
