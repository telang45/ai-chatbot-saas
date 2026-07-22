import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Search, MessageSquare, Pin, Archive, Trash2, MoreHorizontal, Settings, User, BarChart3, LogOut, PanelLeftClose, PanelLeftOpen, Folder, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/store/chat-store";
import { Logo } from "@/components/logo";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface Props { collapsed: boolean; onToggle: () => void; }

export function AppSidebar({ collapsed, onToggle }: Props) {
  const { chats, activeChatId, setActiveChat, newChat, deleteChat, togglePin, archiveChat, renameChat } = useChatStore();
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const filtered = chats.filter((c) => !c.archived && c.title.toLowerCase().includes(query.toLowerCase()));
  const pinned = filtered.filter((c) => c.pinned);
  const recent = filtered.filter((c) => !c.pinned);

  const onNew = () => { const id = newChat(); setActiveChat(id); navigate({ to: "/app/chat" }); };

  return (
    <motion.aside
      animate={{ width: collapsed ? 68 : 280 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="relative flex h-screen shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground"
    >
      <div className="flex h-16 items-center justify-between px-3">
        <Link to="/app/chat" className="flex items-center gap-2 overflow-hidden px-1">
          <Logo iconOnly={collapsed} />
        </Link>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg" onClick={onToggle}>
          {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      <div className="px-3">
        <Button onClick={onNew} className="w-full justify-start gap-2 rounded-xl bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-90">
          <Plus className="h-4 w-4 shrink-0" />
          {!collapsed && <span>New chat</span>}
        </Button>
      </div>

      {!collapsed && (
        <div className="px-3 pt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search chats" className="h-9 rounded-xl pl-9" />
          </div>
        </div>
      )}

      <ScrollArea className="mt-3 flex-1 px-2">
        {!collapsed && pinned.length > 0 && (
          <div className="px-1 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Pinned</div>
        )}
        {pinned.map((c) => (
          <ChatRow key={c.id} chat={c} active={activeChatId === c.id} collapsed={collapsed}
            onClick={() => { setActiveChat(c.id); navigate({ to: "/app/chat" }); }}
            onPin={() => togglePin(c.id)} onArchive={() => archiveChat(c.id)} onDelete={() => deleteChat(c.id)} onRename={renameChat} />
        ))}
        {!collapsed && recent.length > 0 && (
          <div className="px-1 pb-1 pt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Recent</div>
        )}
        {recent.map((c) => (
          <ChatRow key={c.id} chat={c} active={activeChatId === c.id} collapsed={collapsed}
            onClick={() => { setActiveChat(c.id); navigate({ to: "/app/chat" }); }}
            onPin={() => togglePin(c.id)} onArchive={() => archiveChat(c.id)} onDelete={() => deleteChat(c.id)} onRename={renameChat} />
        ))}
        {!collapsed && (
          <div className="mt-4 space-y-0.5 px-1">
            <div className="pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Folders</div>
            {["Work", "Research", "Personal"].map((f) => (
              <button key={f} className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <Folder className="h-4 w-4" /> {f}
              </button>
            ))}
          </div>
        )}
      </ScrollArea>

      <div className="border-t p-2">
        <NavItem to="/app/analytics" icon={<BarChart3 className="h-4 w-4" />} label="Analytics" active={location.pathname === "/app/analytics"} collapsed={collapsed} />
        <NavItem to="/app/notifications" icon={<Bell className="h-4 w-4" />} label="Notifications" active={location.pathname === "/app/notifications"} collapsed={collapsed} />
        <NavItem to="/app/settings" icon={<Settings className="h-4 w-4" />} label="Settings" active={location.pathname === "/app/settings"} collapsed={collapsed} />
      </div>

      <div className="border-t p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-2 rounded-xl p-2 text-left transition hover:bg-sidebar-accent">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-xs font-semibold text-brand-foreground">AM</div>
              {!collapsed && (
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">Alex Morgan</div>
                  <div className="truncate text-xs text-muted-foreground">Pro plan</div>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild><Link to="/app/profile"><User className="mr-2 h-4 w-4" /> Profile</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link to="/app/settings"><Settings className="mr-2 h-4 w-4" /> Settings</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link to="/login"><LogOut className="mr-2 h-4 w-4" /> Log out</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.aside>
  );
}

function NavItem({ to, icon, label, active, collapsed }: { to: string; icon: React.ReactNode; label: string; active: boolean; collapsed: boolean }) {
  return (
    <Link to={to} className={cn("flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground")}>
      {icon} {!collapsed && <span>{label}</span>}
    </Link>
  );
}

function ChatRow({ chat, active, collapsed, onClick, onPin, onArchive, onDelete, onRename }: any) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(chat.title);
  if (collapsed) {
    return (
      <button onClick={onClick} className={cn("mx-auto my-0.5 grid h-9 w-9 place-items-center rounded-lg transition", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent")}>
        <MessageSquare className="h-4 w-4" />
      </button>
    );
  }
  return (
    <div className={cn("group flex items-center gap-1 rounded-lg px-1 transition", active && "bg-sidebar-accent text-sidebar-accent-foreground")}>
      {editing ? (
        <input
          autoFocus value={name} onChange={(e) => setName(e.target.value)}
          onBlur={() => { onRename(chat.id, name || chat.title); setEditing(false); }}
          onKeyDown={(e) => { if (e.key === "Enter") { onRename(chat.id, name || chat.title); setEditing(false); } }}
          className="w-full rounded-md bg-background px-2 py-1.5 text-sm outline-none ring-1 ring-ring"
        />
      ) : (
        <button onClick={onClick} className="min-w-0 flex-1 truncate rounded-lg px-2 py-1.5 text-left text-sm transition hover:bg-sidebar-accent">
          {chat.title}
        </button>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-md p-1 opacity-0 transition hover:bg-background group-hover:opacity-100"><MoreHorizontal className="h-4 w-4" /></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem onClick={() => setEditing(true)}>Rename</DropdownMenuItem>
          <DropdownMenuItem onClick={onPin}><Pin className="mr-2 h-4 w-4" />{chat.pinned ? "Unpin" : "Pin"}</DropdownMenuItem>
          <DropdownMenuItem onClick={onArchive}><Archive className="mr-2 h-4 w-4" /> Archive</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onDelete} className="text-destructive"><Trash2 className="mr-2 h-4 w-4" /> Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
