import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <AuthLayout title="Create your account" subtitle="Free forever. Upgrade anytime."
      footer={<>Already have an account? <Link to="/login" className="font-medium text-foreground hover:underline">Log in</Link></>}>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => { toast.success("Check your inbox to verify."); navigate({ to: "/verify-otp" }); }, 700); }}>
        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline" className="rounded-full"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          <Button type="button" variant="outline" className="rounded-full">Google</Button>
        </div>
        <div className="relative py-2 text-center text-xs text-muted-foreground"><span className="relative bg-background px-2">or</span><div className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" /></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2"><Label>First name</Label><Input required /></div>
          <div className="space-y-2"><Label>Last name</Label><Input required /></div>
        </div>
        <div className="space-y-2"><Label>Email</Label><Input type="email" required /></div>
        <div className="space-y-2"><Label>Password</Label><Input type="password" required /></div>
        <Button type="submit" className="w-full rounded-full" disabled={loading}>{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create account"}</Button>
        <p className="text-center text-xs text-muted-foreground">By continuing you agree to our Terms.</p>
      </form>
    </AuthLayout>
  );
}
