import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { ArrowRight, Check, ChevronDown, Layers, Zap, Shield, History, Upload, Code2, LineChart, Sparkles, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroScene } from "@/components/three/hero-scene";
import { FEATURES, TESTIMONIALS, PRICING, FAQ, AI_MODELS } from "@/mocks/data";

const ICONS: Record<string, any> = { Layers, Zap, Shield, History, Upload, Code2, LineChart, Sparkles };

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenisRef.current = lenis;
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <ModelsSection />
      <Testimonials />
      <Pricing />
      <FaqSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl"
      style={{ backgroundColor: "color-mix(in oklab, var(--background) 70%, transparent)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">Features</a>
          <a href="#models" className="transition hover:text-foreground">Models</a>
          <a href="#pricing" className="transition hover:text-foreground">Pricing</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex"><Link to="/login">Log in</Link></Button>
          <Button asChild size="sm" className="rounded-full"><Link to="/app/chat">Get started <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-60"><HeroScene /></div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-24 text-center sm:px-6 md:pt-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-xs backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          <span className="font-medium">GPT-5 is now live on Nebula</span>
          <ArrowRight className="h-3 w-3" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          The AI workspace for <em className="text-gradient not-italic">thinkers</em> who ship.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          One beautiful chat interface for GPT-5, Claude Opus, Gemini, and every frontier model.
          Fast. Private. Delightfully keyboard-first.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-90">
            <Link to="/app/chat">Start chatting free <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#features">See how it works</a>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[{ v: "10+", l: "Frontier models" }, { v: "1.2M", l: "Active users" }, { v: "180ms", l: "P50 latency" }, { v: "99.99%", l: "Uptime" }].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6">
              <div className="font-display text-3xl tracking-tight sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const names = ["OpenAI", "Anthropic", "Google", "Meta", "Mistral", "DeepSeek", "Perplexity"];
  return (
    <section className="border-y bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Powered by every frontier model</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {names.map((n) => <span key={n} className="font-display text-xl tracking-tight">{n}</span>)}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Features</div>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Everything you need. Nothing you don't.</h2>
        <p className="mt-4 text-muted-foreground">Built by people who use AI every day, for people who use AI every day.</p>
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => {
          const Icon = ICONS[f.icon] ?? Sparkles;
          return (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ModelsSection() {
  return (
    <section id="models" className="border-y bg-muted/20 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Multi-model</div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Switch models mid-thought.</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Ask GPT-5 to draft. Have Claude Opus critique. Let Gemini research the web. All in the same conversation.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Bring your own API keys", "Per-message model routing", "Cost & token tracking", "Model comparisons side-by-side"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <div className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand">
                    <Check className="h-3 w-3 text-brand-foreground" />
                  </div>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {AI_MODELS.slice(0, 8).map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{m.name}</span>
                  {m.badge && <span className="rounded-full bg-gradient-brand px-2 py-0.5 text-[10px] font-medium text-brand-foreground">{m.badge}</span>}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{m.provider}</div>
                <div className="mt-3 text-[11px] text-muted-foreground">Context: {m.contextWindow}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Loved by teams</div>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">The workspace people don't quit.</h2>
      </div>
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border bg-card p-6 shadow-card">
            <p className="text-sm leading-relaxed">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-xs font-semibold text-brand-foreground">{t.avatar}</div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-y bg-muted/20 py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Pricing</div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Simple, honest pricing.</h2>
          <p className="mt-4 text-muted-foreground">Start free. Upgrade whenever you need more.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PRICING.map((p) => (
            <div key={p.name} className={"relative rounded-3xl border p-8 shadow-card " + (p.featured ? "bg-gradient-brand text-brand-foreground shadow-glow" : "bg-card")}>
              {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">Most popular</div>}
              <div className="text-sm font-medium">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl tracking-tight">{p.price}</span>
                <span className={p.featured ? "text-brand-foreground/70" : "text-muted-foreground"}>/ {p.period}</span>
              </div>
              <p className={"mt-2 text-sm " + (p.featured ? "text-brand-foreground/80" : "text-muted-foreground")}>{p.description}</p>
              <Button asChild className={"mt-6 w-full rounded-full " + (p.featured ? "bg-background text-foreground hover:bg-background/90" : "")}>
                <Link to="/app/chat">{p.cta}</Link>
              </Button>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={"mt-0.5 h-4 w-4 shrink-0 " + (p.featured ? "text-brand-foreground" : "text-foreground")} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
      <div className="text-center">
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">FAQ</div>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Answers, if you were wondering.</h2>
      </div>
      <Accordion type="single" collapsible className="mt-12">
        {FAQ.map((f, i) => (
          <AccordionItem key={i} value={`i${i}`}>
            <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 pb-28 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-brand-foreground shadow-glow sm:p-14">
        <h3 className="font-display text-3xl tracking-tight sm:text-4xl">Stay in the loop.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm opacity-90">The occasional email on new models, features, and tips. Zero spam.</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input type="email" required placeholder="you@company.com"
            className="flex-1 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm text-brand-foreground placeholder:text-brand-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/60" />
          <button className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-90">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">The AI workspace for thinkers, builders, and teams.</p>
          <div className="mt-4 flex gap-2">
            <a href="#" className="rounded-full border p-2 transition hover:bg-accent"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border p-2 transition hover:bg-accent"><Github className="h-4 w-4" /></a>
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Models", "Pricing", "Changelog"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold">{c.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => <li key={l}><a href="#" className="transition hover:text-foreground">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© 2026 Nebula AI. All rights reserved.</div>
    </footer>
  );
}
