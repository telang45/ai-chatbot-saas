from abc import ABC, abstractmethod
from typing import List, Dict, AsyncGenerator
from app.core.config import settings

class AIProvider(ABC):
    @abstractmethod
    async def stream_response(self, messages: List[Dict[str, str]], **kwargs) -> AsyncGenerator[str, None]:
        pass

class GeminiProvider(AIProvider):
    def __init__(self, api_key: str):
        import google.generativeai as genai
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel("gemini-1.5-pro")
    
    async def stream_response(self, messages: List[Dict[str, str]], **kwargs):
        gemini_messages = []
        for msg in messages:
            role = "user" if msg["role"] == "user" else "model"
            gemini_messages.append({"role": role, "parts": [msg["content"]]})
        chat = self.model.start_chat(history=gemini_messages[:-1])
        response = chat.send_message(gemini_messages[-1]["parts"][0], stream=True)
        for chunk in response:
            yield chunk.text

class OpenAIProvider(AIProvider):
    def __init__(self, api_key: str):
        from openai import AsyncOpenAI
        self.client = AsyncOpenAI(api_key=api_key)
    
    async def stream_response(self, messages: List[Dict[str, str]], **kwargs):
        model = kwargs.get("model", "gpt-4o-mini")
        stream = await self.client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=kwargs.get("temperature", 0.7),
            max_tokens=kwargs.get("max_tokens", 2048),
            stream=True
        )
        async for chunk in stream:
            if chunk.choices[0].delta.content:
                yield chunk.choices[0].delta.content

class ClaudeProvider(AIProvider):
    def __init__(self, api_key: str):
        import anthropic
        self.client = anthropic.AsyncAnthropic(api_key=api_key)
    
    async def stream_response(self, messages: List[Dict[str, str]], **kwargs):
        model = kwargs.get("model", "claude-3-haiku-20240307")
        system = "You are a helpful assistant."
        async with self.client.messages.stream(
            model=model,
            system=system,
            messages=messages,
            temperature=kwargs.get("temperature", 0.7),
            max_tokens=kwargs.get("max_tokens", 2048),
        ) as stream:
            async for text in stream.text_stream:
                yield text

def get_ai_provider() -> AIProvider:
    provider_name = settings.AI_PROVIDER.lower()
    if provider_name == "gemini":
        return GeminiProvider(settings.GEMINI_API_KEY)
    elif provider_name == "openai":
        return OpenAIProvider(settings.OPENAI_API_KEY)
    elif provider_name == "claude":
        return ClaudeProvider(settings.CLAUDE_API_KEY)
    else:
        raise ValueError(f"Unsupported AI provider: {provider_name}")
