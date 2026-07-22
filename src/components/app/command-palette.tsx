import { useEffect, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { useNavigate } from "@tanstack/react-router";
import { MessageSquare, Settings, User, BarChart3, Bell, Sparkles, LogOut, Plus } from "lucide-react";
import { useChatStore } from "@/store/chat-store";

export function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const navigate = useNavigate();
  const { chats, setActiveChat, newChat } = useChatStore();
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); setOpen(!open); }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const go = (to: string) => { setOpen(false); navigate({ to }); };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search chats, pages, actions..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => { const id = newChat(); setOpen(false); navigate({ to: "/app/chat" }); setActiveChat(id); }}><Plus className="mr-2 h-4 w-4" /> New chat</CommandItem>
          <CommandItem onSelect={() => go("/app/chat")}><MessageSquare className="mr-2 h-4 w-4" /> Go to chat</CommandItem>
          <CommandItem onSelect={() => go("/app/analytics")}><BarChart3 className="mr-2 h-4 w-4" /> Analytics</CommandItem>
          <CommandItem onSelect={() => go("/app/notifications")}><Bell className="mr-2 h-4 w-4" /> Notifications</CommandItem>
          <CommandItem onSelect={() => go("/app/profile")}><User className="mr-2 h-4 w-4" /> Profile</CommandItem>
          <CommandItem onSelect={() => go("/app/settings")}><Settings className="mr-2 h-4 w-4" /> Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Recent chats">
          {chats.slice(0, 6).map((c) => (
            <CommandItem key={c.id} onSelect={() => { setActiveChat(c.id); go("/app/chat"); }}>
              <Sparkles className="mr-2 h-4 w-4" /> {c.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Account">
          <CommandItem onSelect={() => go("/login")}><LogOut className="mr-2 h-4 w-4" /> Log out</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
