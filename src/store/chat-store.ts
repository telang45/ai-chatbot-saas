import { create } from "zustand";
import { MOCK_CHATS, type Chat, type ChatMessage } from "@/mocks/data";

interface ChatStore {
  chats: Chat[];
  activeChatId: string | null;
  selectedModel: string;
  setActiveChat: (id: string | null) => void;
  setSelectedModel: (model: string) => void;
  newChat: () => string;
  sendMessage: (chatId: string, content: string) => Promise<void>;
  deleteChat: (id: string) => void;
  renameChat: (id: string, title: string) => void;
  togglePin: (id: string) => void;
  archiveChat: (id: string) => void;
  deleteMessage: (chatId: string, messageId: string) => void;
  regenerate: (chatId: string, messageId: string) => Promise<void>;
  reactMessage: (chatId: string, messageId: string, liked: boolean | null) => void;
}

function mockResponse(prompt: string): string {
  const templates = [
    `Great question. Here's a structured take on "${prompt.slice(0, 60)}":\n\n### Key points\n- **Clarity first** — define the outcome you want.\n- **Iterate quickly** — ship small, learn fast.\n- **Measure everything** — instrument before optimizing.\n\n\`\`\`ts\nfunction thinkAboutIt(input: string) {\n  return input.split(' ').reverse().join(' ');\n}\n\`\`\`\n\n| Approach | Effort | Impact |\n|----------|--------|--------|\n| Manual | Low | Small |\n| Automated | Medium | Large |\n| AI-native | High | Huge |\n\nWant me to go deeper on any of these?`,
    `Absolutely — let's break this down.\n\n1. First, **understand the problem space**.\n2. Then, sketch 3 candidate solutions.\n3. Prototype the most promising one.\n\n> Speed of iteration beats quality of iteration.\n\nHappy to draft the first prototype if you'd like.`,
    `Here's how I'd approach that:\n\n- Start with a clear hypothesis\n- Design a minimal experiment\n- Ship, measure, and iterate\n\nWould you like me to write the spec?`,
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}

async function streamMock(text: string, onChunk: (chunk: string) => void) {
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    await new Promise((r) => setTimeout(r, 20 + Math.random() * 40));
    onChunk((i === 0 ? "" : " ") + words[i]);
  }
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: MOCK_CHATS,
  activeChatId: MOCK_CHATS[0]?.id ?? null,
  selectedModel: "claude-sonnet",
  setActiveChat: (id) => set({ activeChatId: id }),
  setSelectedModel: (m) => set({ selectedModel: m }),
  newChat: () => {
    const id = `c${Date.now()}`;
    const chat: Chat = {
      id,
      title: "New conversation",
      model: get().selectedModel,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [],
    };
    set((s) => ({ chats: [chat, ...s.chats], activeChatId: id }));
    return id;
  },
  sendMessage: async (chatId, content) => {
    const userMsg: ChatMessage = { id: `m${Date.now()}`, role: "user", content, createdAt: Date.now() };
    const assistantId = `m${Date.now() + 1}`;
    set((s) => ({
      chats: s.chats.map((c) =>
        c.id === chatId
          ? {
              ...c,
              title: c.messages.length === 0 ? content.slice(0, 40) : c.title,
              updatedAt: Date.now(),
              messages: [...c.messages, userMsg, { id: assistantId, role: "assistant", content: "", createdAt: Date.now(), model: get().selectedModel }],
            }
          : c,
      ),
    }));
    const full = mockResponse(content);
    await streamMock(full, (chunk) => {
      set((s) => ({
        chats: s.chats.map((c) =>
          c.id === chatId
            ? { ...c, messages: c.messages.map((m) => (m.id === assistantId ? { ...m, content: m.content + chunk } : m)) }
            : c,
        ),
      }));
    });
  },
  deleteChat: (id) => set((s) => ({ chats: s.chats.filter((c) => c.id !== id), activeChatId: s.activeChatId === id ? null : s.activeChatId })),
  renameChat: (id, title) => set((s) => ({ chats: s.chats.map((c) => (c.id === id ? { ...c, title } : c)) })),
  togglePin: (id) => set((s) => ({ chats: s.chats.map((c) => (c.id === id ? { ...c, pinned: !c.pinned } : c)) })),
  archiveChat: (id) => set((s) => ({ chats: s.chats.map((c) => (c.id === id ? { ...c, archived: !c.archived } : c)) })),
  deleteMessage: (chatId, messageId) =>
    set((s) => ({ chats: s.chats.map((c) => (c.id === chatId ? { ...c, messages: c.messages.filter((m) => m.id !== messageId) } : c)) })),
  regenerate: async (chatId, messageId) => {
    set((s) => ({
      chats: s.chats.map((c) =>
        c.id === chatId ? { ...c, messages: c.messages.map((m) => (m.id === messageId ? { ...m, content: "" } : m)) } : c,
      ),
    }));
    const chat = get().chats.find((c) => c.id === chatId);
    const idx = chat?.messages.findIndex((m) => m.id === messageId) ?? -1;
    const prompt = chat?.messages[idx - 1]?.content ?? "";
    const full = mockResponse(prompt);
    await streamMock(full, (chunk) => {
      set((s) => ({
        chats: s.chats.map((c) =>
          c.id === chatId ? { ...c, messages: c.messages.map((m) => (m.id === messageId ? { ...m, content: m.content + chunk } : m)) } : c,
        ),
      }));
    });
  },
  reactMessage: (chatId, messageId, liked) =>
    set((s) => ({
      chats: s.chats.map((c) =>
        c.id === chatId ? { ...c, messages: c.messages.map((m) => (m.id === messageId ? { ...m, liked } : m)) } : c,
      ),
    })),
}));
