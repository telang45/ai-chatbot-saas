import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { AppSidebar } from "@/components/app/sidebar";
import { CommandPalette } from "@/components/app/command-palette";
import { Button } from "@/components/ui/button";
import { Bell, Command } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/app")({ component: AppLayout });

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background/60 px-4 backdrop-blur">
          <button onClick={() => setPaletteOpen(true)}
            className="flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted">
            <Command className="h-3.5 w-3.5" /> Search or run a command
            <kbd className="ml-4 rounded border bg-background px-1.5 text-[10px]">⌘K</kbd>
          </button>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button asChild variant="ghost" size="icon" className="rounded-full"><Link to="/app/notifications"><Bell className="h-4 w-4" /></Link></Button>
          </div>
        </header>
        <main className="min-h-0 flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
    </div>
  );
}
