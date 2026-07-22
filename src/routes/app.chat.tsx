import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Paperclip, Mic, Square, RefreshCw, Copy, ThumbsUp, ThumbsDown, Pencil, Trash2, Sparkles, Code2, PenLine, GraduationCap, X, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModelSelector } from "@/components/chat/model-selector";
import { Markdown } from "@/components/chat/markdown";
import { useChatStore } from "@/store/chat-store";
import { SUGGESTED_PROMPTS } from "@/mocks/data";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";

export const Route = createFileRoute("/app/chat")({ component: ChatPage });

const ICONS: Record<string, any> = { Sparkles, Code2, PenLine, GraduationCap };

function ChatPage() {
  const { chats, activeChatId, sendMessage, deleteMessage, regenerate, reactMessage, newChat, setActiveChat } = useChatStore();
  const chat = chats.find((c) => c.id === activeChatId) ?? null;
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [chat?.messages.length, chat?.messages[chat.messages.length - 1]?.content]);

  const onSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || busy) return;
    let id = activeChatId;
    if (!id) { id = newChat(); setActiveChat(id); }
    const msg = input;
    setInput("");
    setFiles([]);
    setBusy(true);
    try { await sendMessage(id!, msg); } finally { setBusy(false); }
  };

  const empty = !chat || chat.messages.length === 0;

  return (
    <div className="flex h-full flex-col"
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => { e.preventDefault(); setDragOver(false); setFiles([...files, ...Array.from(e.dataTransfer.files)]); }}
    >
      <div className="flex items-center justify-between border-b px-4 py-3">
        <ModelSelector />
        <div className="hidden text-xs text-muted-foreground sm:block">{chat?.title ?? "New conversation"}</div>
      </div>

      <ScrollArea className="min-h-0 flex-1" ref={scrollRef as any}>
        <div className="mx-auto max-w-3xl px-4 py-8">
          {empty ? <EmptyState onPick={(p) => setInput(p)} /> : (
            <div className="space-y-8">
              {chat!.messages.map((m) => (
                <MessageBubble key={m.id} message={m}
                  onDelete={() => deleteMessage(chat!.id, m.id)}
                  onRegenerate={() => regenerate(chat!.id, m.id)}
                  onReact={(v: boolean | null) => reactMessage(chat!.id, m.id, v)}
                  streaming={busy && m.id === chat!.messages[chat!.messages.length - 1].id && m.role === "assistant"}
                />
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-4">
          {files.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              {files.map((f, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border bg-muted/30 px-2.5 py-1.5 text-xs">
                  {f.type.startsWith("image/") ? <ImageIcon className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
                  <span className="max-w-[160px] truncate">{f.name}</span>
                  <button onClick={() => setFiles(files.filter((_, j) => j !== i))}><X className="h-3 w-3" /></button>
                </div>
              ))}
            </div>
          )}
          <form onSubmit={onSubmit} className={cn("relative rounded-2xl border bg-card shadow-card transition", dragOver && "ring-2 ring-brand ring-offset-2")}>
            <Textarea
              value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onSubmit(); } }}
              placeholder="Message Nebula..."
              className="min-h-[64px] resize-none border-0 bg-transparent px-4 pb-14 pt-3 text-sm shadow-none focus-visible:ring-0"
              rows={1}
            />
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <label className="inline-flex cursor-pointer items-center rounded-lg p-2 text-muted-foreground transition hover:bg-muted">
                  <Paperclip className="h-4 w-4" />
                  <input type="file" multiple hidden onChange={(e) => setFiles([...files, ...Array.from(e.target.files ?? [])])} />
                </label>
                <button type="button" className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted"><Mic className="h-4 w-4" /></button>
              </div>
              {busy ? (
                <Button type="button" size="icon" variant="secondary" className="h-8 w-8 rounded-full" onClick={() => setBusy(false)}>
                  <Square className="h-3.5 w-3.5" />
                </Button>
              ) : (
                <Button type="submit" size="icon" disabled={!input.trim()} className="h-8 w-8 rounded-full bg-gradient-brand text-brand-foreground disabled:opacity-40">
                  <ArrowUp className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">Nebula can make mistakes. Verify important information.</p>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onPick }: { onPick: (s: string) => void }) {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
        <Sparkles className="h-7 w-7 text-brand-foreground" />
      </motion.div>
      <h2 className="font-display text-4xl tracking-tight">How can I help you today?</h2>
      <p className="mt-2 text-sm text-muted-foreground">Pick a prompt or start typing to begin.</p>
      <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        {SUGGESTED_PROMPTS.map((s, i) => {
          const Icon = ICONS[s.icon] ?? Sparkles;
          return (
            <motion.button key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              onClick={() => onPick(s.prompt)}
              className="group flex items-start gap-3 rounded-2xl border bg-card p-4 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted transition group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium">{s.title}</div>
                <div className="mt-0.5 truncate text-xs text-muted-foreground">{s.prompt}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function MessageBubble({ message, onDelete, onRegenerate, onReact, streaming }: any) {
  const isUser = message.role === "user";
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(message.content);

  const copy = () => { navigator.clipboard.writeText(message.content); toast.success("Copied"); };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
      className={cn("group flex gap-4", isUser && "flex-row-reverse")}>
      <div className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold",
        isUser ? "bg-primary text-primary-foreground" : "bg-gradient-brand text-brand-foreground shadow-glow")}>
        {isUser ? "AM" : <Sparkles className="h-4 w-4" />}
      </div>
      <div className={cn("min-w-0 flex-1", isUser && "flex flex-col items-end")}>
        {isUser ? (
          editing ? (
            <div className="w-full max-w-xl">
              <Textarea value={text} onChange={(e) => setText(e.target.value)} className="rounded-2xl" />
              <div className="mt-2 flex justify-end gap-2">
                <Button size="sm" variant="ghost" onClick={() => { setText(message.content); setEditing(false); }}>Cancel</Button>
                <Button size="sm" onClick={() => { message.content = text; setEditing(false); toast.success("Edited"); }}>Save</Button>
              </div>
            </div>
          ) : (
            <div className="max-w-xl rounded-2xl bg-secondary px-4 py-2.5 text-sm">{message.content}</div>
          )
        ) : (
          <>
            <Markdown content={message.content || " "} />
            {streaming && <span className="ml-0.5 inline-block h-4 w-1.5 animate-blink bg-foreground align-middle" />}
          </>
        )}
        <div className={cn("mt-2 flex items-center gap-1 text-muted-foreground opacity-0 transition group-hover:opacity-100", isUser && "flex-row-reverse")}>
          <span className="text-[10px]">{dayjs(message.createdAt).format("HH:mm")}</span>
          <Button size="icon" variant="ghost" className="h-7 w-7 rounded-md" onClick={copy}><Copy className="h-3.5 w-3.5" /></Button>
          {isUser ? (
            <>
              <Button size="icon" variant="ghost" className="h-7 w-7 rounded-md" onClick={() => setEditing(true)}><Pencil className="h-3.5 w-3.5" /></Button>
              <Button size="icon" variant="ghost" className="h-7 w-7 rounded-md" onClick={onDelete}><Trash2 className="h-3.5 w-3.5" /></Button>
            </>
          ) : (
            <>
              <Button size="icon" variant="ghost" className="h-7 w-7 rounded-md" onClick={onRegenerate}><RefreshCw className="h-3.5 w-3.5" /></Button>
              <Button size="icon" variant="ghost" className={cn("h-7 w-7 rounded-md", message.liked === true && "text-brand")} onClick={() => onReact(message.liked === true ? null : true)}><ThumbsUp className="h-3.5 w-3.5" /></Button>
              <Button size="icon" variant="ghost" className={cn("h-7 w-7 rounded-md", message.liked === false && "text-destructive")} onClick={() => onReact(message.liked === false ? null : false)}><ThumbsDown className="h-3.5 w-3.5" /></Button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
