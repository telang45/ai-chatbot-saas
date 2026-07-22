import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "@/lib/theme";
import { AI_MODELS } from "@/mocks/data";
import { Download, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/app/settings")({ component: SettingsPage });

function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [temp, setTemp] = useState([0.7]);
  const [tokens, setTokens] = useState([2048]);
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="font-display text-4xl tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your workspace, preferences, and account.</p>

        <Tabs defaultValue="general" className="mt-8">
          <TabsList className="flex w-full flex-wrap gap-1 bg-muted/50">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="ai">AI Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="danger">Danger</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6 space-y-4">
            <Card className="p-6">
              <div className="text-sm font-semibold">Language</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div><Label>Interface language</Label>
                  <Select defaultValue="en"><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="en">English</SelectItem><SelectItem value="es">Español</SelectItem><SelectItem value="fr">Français</SelectItem><SelectItem value="de">Deutsch</SelectItem></SelectContent>
                  </Select>
                </div>
                <div><Label>Timezone</Label><Input className="mt-2" defaultValue="UTC+00:00" /></div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-sm font-semibold">Data & History</div>
              <p className="mt-1 text-xs text-muted-foreground">Export or clear your conversation history.</p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="gap-2 rounded-full"><Download className="h-4 w-4" /> Export data</Button>
                <Button variant="outline" className="gap-2 rounded-full">Clear history</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="mt-6 space-y-4">
            <Card className="p-6">
              <div className="text-sm font-semibold">Theme</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {(["light", "dark", "system"] as const).map((t) => (
                  <button key={t} onClick={() => setTheme(t)}
                    className={`rounded-xl border p-4 text-left transition ${theme === t ? "ring-2 ring-brand" : "hover:bg-accent"}`}>
                    <div className="mb-3 h-16 rounded-lg" style={{ background: t === "light" ? "#fff" : t === "dark" ? "#111" : "linear-gradient(90deg,#fff 50%,#111 50%)" }} />
                    <div className="text-sm font-medium capitalize">{t}</div>
                  </button>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6 space-y-4">
            <Card className="p-6 space-y-4">
              {["Email digests", "Product updates", "Usage alerts", "Security alerts"].map((n, i) => (
                <div key={n} className="flex items-center justify-between">
                  <div><div className="text-sm font-medium">{n}</div><div className="text-xs text-muted-foreground">Get notified about {n.toLowerCase()}.</div></div>
                  <Switch defaultChecked={i < 3} />
                </div>
              ))}
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="mt-6 space-y-4">
            <Card className="p-6">
              <div className="text-sm font-semibold">Default model</div>
              <Select defaultValue="claude-sonnet">
                <SelectTrigger className="mt-3"><SelectValue /></SelectTrigger>
                <SelectContent>{AI_MODELS.map((m) => <SelectItem key={m.id} value={m.id}>{m.name} · {m.provider}</SelectItem>)}</SelectContent>
              </Select>
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between"><Label>Temperature</Label><span className="text-xs text-muted-foreground">{temp[0].toFixed(2)}</span></div>
                <Slider value={temp} onValueChange={setTemp} min={0} max={2} step={0.05} />
              </div>
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between"><Label>Max tokens</Label><span className="text-xs text-muted-foreground">{tokens[0]}</span></div>
                <Slider value={tokens} onValueChange={setTokens} min={256} max={8192} step={128} />
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="mt-6 space-y-4">
            <Card className="p-6">
              <div className="text-sm font-semibold">Change password</div>
              <div className="mt-4 grid gap-3">
                <Input type="password" placeholder="Current password" />
                <Input type="password" placeholder="New password" />
                <Input type="password" placeholder="Confirm password" />
              </div>
              <Button className="mt-4 rounded-full" onClick={() => toast.success("Password changed")}>Update</Button>
            </Card>
            <Card className="p-6"><div className="flex items-center justify-between"><div><div className="text-sm font-medium">Two-factor authentication</div><div className="text-xs text-muted-foreground">Add an extra layer of security.</div></div><Switch /></div></Card>
          </TabsContent>

          <TabsContent value="danger" className="mt-6">
            <Card className="border-destructive/40 p-6">
              <div className="text-sm font-semibold text-destructive">Delete account</div>
              <p className="mt-1 text-xs text-muted-foreground">Permanent. Your data will be erased within 30 days.</p>
              <Button variant="destructive" className="mt-4 gap-2 rounded-full"><Trash2 className="h-4 w-4" /> Delete account</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
