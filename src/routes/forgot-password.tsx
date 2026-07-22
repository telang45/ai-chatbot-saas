import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/forgot-password")({ component: () => (
  <AuthLayout title="Forgot password?" subtitle="We'll send you a reset link." footer={<Link to="/login" className="font-medium hover:underline">Back to login</Link>}>
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Reset link sent."); }}>
      <div className="space-y-2"><Label>Email</Label><Input type="email" required /></div>
      <Button className="w-full rounded-full">Send reset link</Button>
    </form>
  </AuthLayout>
) });
