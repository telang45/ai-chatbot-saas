from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models import User, Chat, Message
from app.api.routes.auth import oauth2_scheme
from app.services.ai_service import get_ai_provider
from app.schemas.chat import ChatCreate, ChatUpdate, ChatResponse, MessageCreate, MessageResponse
import json
import asyncio

router = APIRouter()

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    from jose import JWTError, jwt
    from app.core.config import settings
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

@router.post("/", response_model=ChatResponse)
def create_chat(chat_data: ChatCreate = None, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    title = chat_data.title if chat_data else "New Chat"
    chat = Chat(user_id=current_user.id, title=title)
    db.add(chat)
    db.commit()
    db.refresh(chat)
    return chat

@router.get("/", response_model=list[ChatResponse])
def list_chats(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    chats = db.query(Chat).filter(Chat.user_id == current_user.id).order_by(Chat.updated_at.desc()).all()
    return chats

@router.get("/{chat_id}", response_model=ChatResponse)
def get_chat(chat_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    chat = db.query(Chat).filter(Chat.id == chat_id, Chat.user_id == current_user.id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    return chat

@router.put("/{chat_id}", response_model=ChatResponse)
def update_chat(chat_id: int, chat_data: ChatUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    chat = db.query(Chat).filter(Chat.id == chat_id, Chat.user_id == current_user.id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    if chat_data.title is not None:
        chat.title = chat_data.title
    if chat_data.is_pinned is not None:
        chat.is_pinned = chat_data.is_pinned
    if chat_data.is_archived is not None:
        chat.is_archived = chat_data.is_archived
    db.commit()
    db.refresh(chat)
    return chat

@router.delete("/{chat_id}")
def delete_chat(chat_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    chat = db.query(Chat).filter(Chat.id == chat_id, Chat.user_id == current_user.id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    db.delete(chat)
    db.commit()
    return {"message": "Chat deleted"}

@router.post("/{chat_id}/messages", response_model=MessageResponse)
def send_message(chat_id: int, msg_data: MessageCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    chat = db.query(Chat).filter(Chat.id == chat_id, Chat.user_id == current_user.id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    user_msg = Message(chat_id=chat_id, role="user", content=msg_data.content)
    db.add(user_msg)
    db.commit()
    db.refresh(user_msg)
    return user_msg

@router.post("/{chat_id}/stream")
async def stream_response(chat_id: int, msg_data: MessageCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    chat = db.query(Chat).filter(Chat.id == chat_id, Chat.user_id == current_user.id).first()
    if not chat:
        raise HTTPException(status_code=404, detail="Chat not found")
    
    user_msg = Message(chat_id=chat_id, role="user", content=msg_data.content)
    db.add(user_msg)
    db.commit()
    
    messages = db.query(Message).filter(Message.chat_id == chat_id).order_by(Message.created_at).all()
    history = [{"role": m.role, "content": m.content} for m in messages]
    
    provider = get_ai_provider()
    
    async def event_generator():
        full_response = ""
        try:
            async for token in provider.stream_response(history):
                full_response += token
                yield f"data: {json.dumps({'token': token})}\n\n"
                await asyncio.sleep(0.01)
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        finally:
            if full_response:
                assistant_msg = Message(chat_id=chat_id, role="assistant", content=full_response)
                db.add(assistant_msg)
                db.commit()
            yield f"data: {json.dumps({'done': True})}\n\n"
    
    return StreamingResponse(event_generator(), media_type="text/event-stream")
