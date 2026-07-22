import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
        <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
      </div>
      {!iconOnly && <span className="text-lg font-semibold tracking-tight">Nebula</span>}
    </div>
  );
}
