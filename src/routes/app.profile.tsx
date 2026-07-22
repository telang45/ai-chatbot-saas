import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { USER, USAGE_DATA } from "@/mocks/data";
import { Camera, Sparkles } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { toast } from "sonner";

export const Route = createFileRoute("/app/profile")({ component: ProfilePage });

function ProfilePage() {
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 text-brand-foreground shadow-glow">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="relative">
              <div className="grid h-24 w-24 place-items-center rounded-2xl bg-background/20 text-3xl font-semibold backdrop-blur">{USER.avatar}</div>
              <button className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-background text-foreground shadow"><Camera className="h-4 w-4" /></button>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-3xl tracking-tight">{USER.name}</h1>
                <Badge className="bg-background text-foreground">Pro</Badge>
              </div>
              <div className="mt-1 text-sm opacity-80">@{USER.username} · Joined {USER.joined}</div>
              <p className="mt-3 max-w-md text-sm opacity-90">{USER.bio}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border bg-card p-6 shadow-card">
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Messages this month</div>
            <div className="mt-2 font-display text-4xl tracking-tight">1,284</div>
            <Progress value={64} className="mt-4" />
            <div className="mt-2 text-xs text-muted-foreground">64% of monthly quota</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="rounded-2xl border bg-card p-6 shadow-card">
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Tokens used</div>
            <div className="mt-2 font-display text-4xl tracking-tight">478k</div>
            <Progress value={38} className="mt-4" />
            <div className="mt-2 text-xs text-muted-foreground">38% of monthly quota</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl border bg-card p-6 shadow-card">
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Storage</div>
            <div className="mt-2 font-display text-4xl tracking-tight">2.4 GB</div>
            <Progress value={24} className="mt-4" />
            <div className="mt-2 text-xs text-muted-foreground">of 10 GB</div>
          </motion.div>
        </div>

        <div className="mt-6 rounded-2xl border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Activity this week</div>
              <div className="text-xs text-muted-foreground">Messages sent per day</div>
            </div>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={USAGE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="messages" stroke="var(--color-brand)" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <form className="mt-6 rounded-2xl border bg-card p-6 shadow-card" onSubmit={(e) => { e.preventDefault(); toast.success("Profile saved"); }}>
          <div className="text-sm font-semibold">Personal information</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label>Name</Label><Input defaultValue={USER.name} /></div>
            <div className="space-y-2"><Label>Username</Label><Input defaultValue={USER.username} /></div>
            <div className="space-y-2 sm:col-span-2"><Label>Email</Label><Input type="email" defaultValue={USER.email} /></div>
            <div className="space-y-2 sm:col-span-2"><Label>Bio</Label><Textarea defaultValue={USER.bio} /></div>
          </div>
          <div className="mt-4 flex justify-end"><Button className="rounded-full">Save changes</Button></div>
        </form>
      </div>
    </ScrollArea>
  );
}
