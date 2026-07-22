import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, Check, Info, AlertTriangle } from "lucide-react";
import { MOCK_NOTIFICATIONS } from "@/mocks/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/notifications")({ component: NotificationsPage });

const iconFor = (t: string) => t === "success" ? Check : t === "warning" ? AlertTriangle : Info;

function NotificationsPage() {
  const [items, setItems] = useState(MOCK_NOTIFICATIONS);
  const markAll = () => setItems(items.map((n) => ({ ...n, read: true })));
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-4xl tracking-tight">Notifications</h1>
            <p className="mt-1 text-sm text-muted-foreground">Stay on top of what matters.</p>
          </div>
          <Button variant="outline" className="rounded-full" onClick={markAll}>Mark all read</Button>
        </div>
        <Tabs defaultValue="all" className="mt-8">
          <TabsList><TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="unread">Unread</TabsTrigger><TabsTrigger value="read">Read</TabsTrigger></TabsList>
          {(["all", "unread", "read"] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-4 space-y-2">
              {items.filter((n) => tab === "all" || (tab === "unread" ? !n.read : n.read)).map((n) => {
                const Icon = iconFor(n.type);
                return (
                  <div key={n.id} className={cn("flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-card", !n.read && "border-brand/40")}>
                    <div className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg",
                      n.type === "success" && "bg-emerald-500/15 text-emerald-500",
                      n.type === "warning" && "bg-amber-500/15 text-amber-500",
                      n.type === "info" && "bg-blue-500/15 text-blue-500")}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-medium">{n.title}</div>
                        <div className="text-[10px] text-muted-foreground">{n.time}</div>
                      </div>
                      <div className="mt-0.5 text-sm text-muted-foreground">{n.description}</div>
                    </div>
                    {!n.read && <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />}
                  </div>
                );
              })}
              {items.filter((n) => tab === "all" || (tab === "unread" ? !n.read : n.read)).length === 0 && (
                <div className="rounded-2xl border bg-card p-10 text-center text-sm text-muted-foreground">
                  <Bell className="mx-auto mb-3 h-8 w-8 opacity-50" /> Nothing here yet.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </ScrollArea>
  );
}
