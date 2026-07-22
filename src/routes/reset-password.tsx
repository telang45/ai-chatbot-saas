import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({ component: () => (
  <AuthLayout title="Set a new password" subtitle="Choose something you'll remember." footer={<Link to="/login" className="font-medium hover:underline">Back to login</Link>}>
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Password updated."); }}>
      <div className="space-y-2"><Label>New password</Label><Input type="password" required /></div>
      <div className="space-y-2"><Label>Confirm password</Label><Input type="password" required /></div>
      <Button className="w-full rounded-full">Update password</Button>
    </form>
  </AuthLayout>
) });
