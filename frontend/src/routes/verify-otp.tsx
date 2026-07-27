import { createFileRoute, useNavigate, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "sonner";

export const Route = createFileRoute("/verify-otp")({ component: OtpPage });

function OtpPage() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email || "";

  useEffect(() => {
    if (!email) {
      toast.error("No email provided. Please sign up again.");
      navigate({ to: "/register" });
    }
  }, [email, navigate]);

  const handleVerify = async () => {
    if (value.length !== 6) {
      toast.error("Enter a 6‑digit code");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: value }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || "Verification failed");
      }
      localStorage.setItem("token", data.access_token);
      toast.success("Email verified! Welcome aboard.");
      navigate({ to: "/app/chat" });
    } catch (err: any) {
      toast.error(err.message || "Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Verify your email" subtitle="Enter the 6-digit code we sent to your inbox.">
      <div className="space-y-6">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot key={i} index={i} className="h-14 w-12 text-xl" />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <Button className="w-full rounded-full" disabled={value.length < 6 || loading} onClick={handleVerify}>
          {loading ? "Verifying..." : "Verify"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Didn't get it?{" "}
          <button onClick={() => toast.info("Resend coming soon")} className="font-medium text-foreground hover:underline">
            Resend
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}