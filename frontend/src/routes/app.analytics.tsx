import { createFileRoute } from "@tanstack/react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { USAGE_DATA, MODEL_USAGE } from "@/mocks/data";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TrendingUp, MessageSquare, Zap, Users } from "lucide-react";

export const Route = createFileRoute("/app/analytics")({ component: AnalyticsPage });

const stats = [
  { icon: MessageSquare, label: "Messages", value: "12,481", delta: "+18%" },
  { icon: Zap, label: "Tokens used", value: "4.8M", delta: "+24%" },
  { icon: TrendingUp, label: "Avg. response", value: "182ms", delta: "-8%" },
  { icon: Users, label: "Active seats", value: "24 / 30", delta: "+3" },
];

function AnalyticsPage() {
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-display text-4xl tracking-tight">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">Your workspace at a glance.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <div className="flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-brand-foreground"><s.icon className="h-4 w-4" /></div>
                <span className="text-xs font-medium text-emerald-500">{s.delta}</span>
              </div>
              <div className="mt-4 font-display text-3xl tracking-tight">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="text-sm font-semibold">Weekly usage</div>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={USAGE_DATA}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-brand)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="var(--color-brand)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                  <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="tokens" stroke="var(--color-brand)" strokeWidth={2.5} fill="url(#g1)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Models used</div>
            <div className="mt-4 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={MODEL_USAGE} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} strokeWidth={2}>
                    {MODEL_USAGE.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="mt-4 p-6">
          <div className="text-sm font-semibold">Messages per day</div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={USAGE_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--color-popover)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Bar dataKey="messages" fill="var(--color-brand)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}
