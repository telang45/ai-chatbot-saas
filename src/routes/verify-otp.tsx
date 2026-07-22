import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

export const Route = createFileRoute("/verify-otp")({ component: OtpPage });

function OtpPage() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <AuthLayout title="Verify your email" subtitle="Enter the 6-digit code we sent to your inbox.">
      <div className="space-y-6">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            {[0,1,2,3,4,5].map((i) => <InputOTPSlot key={i} index={i} className="h-14 w-12 text-xl" />)}
          </InputOTPGroup>
        </InputOTP>
        <Button className="w-full rounded-full" disabled={value.length < 6} onClick={() => { toast.success("Verified!"); navigate({ to: "/app/chat" }); }}>Verify</Button>
        <p className="text-center text-sm text-muted-foreground">Didn't get it? <button className="font-medium text-foreground hover:underline">Resend</button></p>
      </div>
    </AuthLayout>
  );
}
