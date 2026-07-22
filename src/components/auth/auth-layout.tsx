import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Logo } from "@/components/logo";

export function AuthLayout({ title, subtitle, children, footer }: { title: string; subtitle?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-gradient-brand lg:block">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.9 0.1 300 / .5), transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.7 0.2 220 / .5), transparent 60%)" }} />
        <div className="relative flex h-full flex-col justify-between p-12 text-brand-foreground">
          <Link to="/"><Logo /></Link>
          <div>
            <blockquote className="font-display text-3xl leading-snug tracking-tight">
              "Nebula turned our team's chaotic AI experiments into one calm, powerful workspace."
            </blockquote>
            <div className="mt-6 text-sm opacity-80">Priya Kapoor — Staff Engineer, Stripe</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-sm">
          <div className="mb-8 lg:hidden"><Link to="/"><Logo /></Link></div>
          <h1 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h1>
          {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
        </motion.div>
      </div>
    </div>
  );
}
