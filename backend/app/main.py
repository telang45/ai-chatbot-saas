from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.routes import auth, chats, users, upload, analytics
from app.core.database import engine, Base

app = FastAPI(title="AI Chatbot API", version="1.0.0")

# CORS (allow frontend origin)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(chats.router, prefix="/api/chats", tags=["chats"])
app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(upload.router, prefix="/api/upload", tags=["upload"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["analytics"])

@app.get("/api/health")
def health():
    return {"status": "ok"}

# Create tables on startup (optional, use Alembic for production)
@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)
