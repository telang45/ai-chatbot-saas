from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models import Chat, Message
from app.api.routes.auth import get_current_user

router = APIRouter()

@router.get("/stats")
def get_stats(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    chat_count = db.query(Chat).filter(Chat.user_id == current_user.id).count()
    message_count = db.query(Message).join(Chat).filter(Chat.user_id == current_user.id).count()
    return {
        "total_chats": chat_count,
        "total_messages": message_count,
        "files": 0
    }
