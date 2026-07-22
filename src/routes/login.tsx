import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Github, Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <AuthLayout title="Welcome back" subtitle="Log in to continue your conversations."
      footer={<>Don't have an account? <Link to="/register" className="font-medium text-foreground hover:underline">Sign up</Link></>}>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => { toast.success("Welcome back!"); navigate({ to: "/app/chat" }); }, 700); }}>
        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline" className="rounded-full"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          <Button type="button" variant="outline" className="rounded-full">Google</Button>
        </div>
        <div className="relative py-2 text-center text-xs text-muted-foreground"><span className="relative bg-background px-2">or continue with email</span><div className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" /></div>
        <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@company.com" required /></div>
        <div className="space-y-2">
          <div className="flex items-center justify-between"><Label htmlFor="pw">Password</Label><Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</Link></div>
          <div className="relative">
            <Input id="pw" type={show ? "text" : "password"} placeholder="••••••••" required />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
          </div>
        </div>
        <Button type="submit" className="w-full rounded-full" disabled={loading}>{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Log in"}</Button>
      </form>
    </AuthLayout>
  );
}
