from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
import os
import shutil
from datetime import datetime
from app.core.database import get_db
from app.models import User, File as FileModel
from app.api.routes.auth import get_current_user

router = APIRouter()

UPLOAD_DIR = os.getenv("UPLOAD_DIR", "./uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/")
async def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    file.file.seek(0, 2)
    size = file.file.tell()
    file.file.seek(0)
    max_size = int(os.getenv("MAX_UPLOAD_SIZE", 10485760))
    if size > max_size:
        raise HTTPException(status_code=413, detail="File too large")
    
    timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
    safe_filename = f"{current_user.id}_{timestamp}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, safe_filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    file_record = FileModel(
        user_id=current_user.id,
        filename=file.filename,
        file_path=file_path,
        file_type=file.content_type,
        size=size
    )
    db.add(file_record)
    db.commit()
    db.refresh(file_record)
    
    return {
        "id": file_record.id,
        "filename": file_record.filename,
        "file_path": file_record.file_path,
        "file_type": file_record.file_type,
        "size": file_record.size
    }
