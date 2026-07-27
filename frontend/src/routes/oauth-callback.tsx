import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/oauth-callback")({
  component: OAuthCallback,
});

function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      toast.success("Logged in with OAuth");
      navigate({ to: "/app/chat" });
    } else {
      toast.error("OAuth login failed");
      navigate({ to: "/login" });
    }
  }, []);

  return <div className="flex items-center justify-center h-screen">Processing login...</div>;
}