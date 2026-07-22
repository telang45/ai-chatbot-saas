import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { ArrowRight, Check, ChevronDown, Layers, Zap, Shield, History, Upload, Code2, LineChart, Sparkles, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroScene } from "@/components/three/hero-scene";
import Velaris from "@/components/ui/velaris";
import { FEATURES, TESTIMONIALS, PRICING, FAQ, AI_MODELS } from "@/mocks/data";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  CustomCursor,
  ScrollProgress,
  RadialGlowBackground,
  AuroraBackground,
  Magnetic,
  TiltCard,
  CountUp,
  Preloader,
  AnimatedSectionDivider
} from "@/components/landing/effects";

const ICONS: Record<string, any> = { Layers, Zap, Shield, History, Upload, Code2, LineChart, Sparkles };

export const Route = createFileRoute("/")({ component: Landing });

function ScrollReveal({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Landing() {
  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenisRef.current = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand/20">
      <Preloader />
      <ScrollProgress />
      <Nav />
      
      <Hero />
      <AnimatedSectionDivider />
      <LogoStrip />
      <AnimatedSectionDivider />
      <Features />
      <AnimatedSectionDivider />
      <ModelsSection />
      <AnimatedSectionDivider />
      <Testimonials />
      <AnimatedSectionDivider />
      <Pricing />
      <AnimatedSectionDivider />
      <FaqSection />
      <AnimatedSectionDivider />
      <Newsletter />
      <Footer />
    </div>
  );
}

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/80 backdrop-blur-2xl shadow-elegant py-3"
          : "border-b border-border/30 backdrop-blur-md py-4"
      )}
      style={{
        backgroundColor: isScrolled
          ? "color-mix(in oklab, var(--background) 85%, transparent)"
          : "color-mix(in oklab, var(--background) 65%, transparent)",
      }}
    >
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {["features", "models", "pricing", "faq", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative transition hover:text-foreground group py-1"
            >
              <span className="capitalize">{section}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex rounded-full cursor-pointer hover:bg-muted">
            <Link to="/login">Log in</Link>
          </Button>
          <Magnetic>
            <Button asChild size="sm" className="rounded-full bg-gradient-brand text-brand-foreground shadow-glow hover:scale-[1.03] transition duration-300 cursor-pointer">
              <Link to="/app/chat">
                Get started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section 
      className="relative overflow-hidden py-20 sm:py-24 md:py-32 border-b border-border/10"
      style={{
        backgroundImage: "radial-gradient(ellipse 60% 50% at 50% -10%, color-mix(in oklab, var(--brand) 12%, transparent), transparent 70%)"
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
        {/* Simple announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 text-xs shadow-sm hover:bg-background transition duration-300 cursor-pointer group"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          <span className="font-medium text-muted-foreground group-hover:text-foreground transition duration-300">GPT-5 is now live on Nebula</span>
          <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
        </motion.div>

        {/* Clean headline reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground font-medium"
        >
          The AI workspace for <span className="text-gradient font-semibold">thinkers</span> who ship.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl font-light leading-relaxed"
        >
          One beautiful chat interface for GPT-5, Claude Opus, Gemini, and every frontier model.
          Fast. Private. Delightfully keyboard-first.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full bg-gradient-brand text-brand-foreground shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 px-8 py-6 text-base cursor-pointer">
            <Link to="/app/chat" className="flex items-center">
              Start chatting free <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-base cursor-pointer hover:bg-accent/40 hover:scale-[1.02] transition duration-300">
            <a href="#features">See how it works</a>
          </Button>
        </motion.div>

        {/* Stats Grid with Count Up */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 relative z-10"
        >
          {[{ v: "10+", l: "Frontier models" }, { v: "1.2M", l: "Active users" }, { v: "180ms", l: "P50 latency" }, { v: "99.99%", l: "Uptime" }].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6 border border-border/40 select-none">
              <div className="font-display text-3xl tracking-tight sm:text-4xl text-foreground font-semibold">
                <CountUp value={s.v} />
              </div>
              <div className="mt-1.5 text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const names = ["OpenAI", "Anthropic", "Google", "Meta", "Mistral", "DeepSeek", "Perplexity"];
  const marqueeItems = [...names, ...names]; // Duplicate to loop seamlessly

  return (
    <section className="border-y border-border/30 bg-muted/10 py-10 relative overflow-hidden z-10">
      {/* Edge gradient mask */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-15 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-15 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/80 mb-6 font-semibold">Powered by every frontier model</p>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-20 whitespace-nowrap w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {marqueeItems.map((n, i) => (
              <span
                key={i}
                className="font-display text-2xl tracking-tight text-muted-foreground/50 hover:text-foreground hover:scale-105 transition-all duration-300 select-none cursor-default font-semibold"
              >
                {n}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 relative z-10">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">Features</div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium">Everything you need. Nothing you don't.</h2>
          <p className="mt-4 text-muted-foreground text-lg font-light">Built by people who use AI every day, for people who use AI every day.</p>
        </div>
      </ScrollReveal>
      
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => {
          const Icon = ICONS[f.icon] ?? Sparkles;
          return (
            <ScrollReveal key={f.title} delay={i * 0.05} y={15}>
              <TiltCard className="bg-card border-border/80">
                <div className="p-6 h-full flex flex-col items-start select-none">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-light">{f.description}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

function ModelsSection() {
  return (
    <section id="models" className="bg-muted/10 py-28 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">Multi-model</div>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium">Switch models mid-thought.</h2>
              <p className="mt-4 max-w-lg text-muted-foreground text-lg font-light leading-relaxed">
                Ask GPT-5 to draft. Have Claude Opus critique. Let Gemini research the web. All in the same conversation.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {["Bring your own API keys", "Per-message model routing", "Cost & token tracking", "Model comparisons side-by-side"].map((x, i) => (
                  <motion.li
                    key={x}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 font-light text-muted-foreground"
                  >
                    <div className="grid h-5.5 w-5.5 place-items-center rounded-full bg-gradient-brand shadow-glow">
                      <Check className="h-3.5 w-3.5 text-brand-foreground" />
                    </div>
                    {x}
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 gap-4">
            {AI_MODELS.slice(0, 8).map((m, i) => (
              <ScrollReveal key={m.id} delay={i * 0.05} y={15}>
                <TiltCard className="bg-card/40 backdrop-blur-md border-border/60">
                  <div className="p-5 flex flex-col h-full select-none">
                    <div className="flex items-start justify-between">
                      <span className="text-base font-semibold tracking-tight text-foreground">{m.name}</span>
                      {m.badge && (
                        <span className="rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-medium text-brand-foreground shadow-glow">
                          {m.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-brand font-medium uppercase tracking-wider">{m.provider}</div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-xs text-muted-foreground flex justify-between items-center">
                      <span>Context Window</span>
                      <span className="font-semibold text-foreground">{m.contextWindow}</span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 or 1
  
  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const currentTestimonial = TESTIMONIALS[index];

  return (
    <div className="relative mt-16 max-w-2xl mx-auto">
      <div className="overflow-hidden min-h-[220px] relative w-full flex items-center justify-center py-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) {
                handleNext();
              } else if (offset.x > 50) {
                handlePrev();
              }
            }}
            className="w-full cursor-grab active:cursor-grabbing rounded-3xl border bg-card p-8 shadow-elegant md:p-10"
          >
            <p className="text-lg leading-relaxed italic md:text-xl font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-brand-foreground shadow-glow select-none">
                {currentTestimonial.avatar}
              </div>
              <div>
                <div className="text-base font-semibold">{currentTestimonial.name}</div>
                <div className="text-xs text-muted-foreground">{currentTestimonial.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-center gap-3 select-none">
        <button
          onClick={handlePrev}
          className="rounded-full border border-border/80 p-2.5 transition hover:bg-accent/50 cursor-pointer"
        >
          <ChevronDown className="h-4 w-4 rotate-90 text-muted-foreground" />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                i === index ? "w-6 bg-brand" : "w-2 bg-muted hover:bg-muted-foreground/30"
              )}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="rounded-full border border-border/80 p-2.5 transition hover:bg-accent/50 cursor-pointer"
        >
          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 relative z-10">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">Loved by teams</div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium">The workspace people don't quit.</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.15}>
        <TestimonialsCarousel />
      </ScrollReveal>
    </section>
  );
}

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (name: string) => {
    if (name === "Free") return "$0";
    if (name === "Pro") return isYearly ? "$16" : "$20";
    if (name === "Team") return isYearly ? "$39" : "$49";
    return "";
  };

  const getPeriod = (name: string) => {
    if (name === "Free") return "forever";
    return isYearly ? "per month, billed annually" : "per month";
  };

  return (
    <section id="pricing" className="bg-muted/10 py-28 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">Pricing</div>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium">Simple, honest pricing.</h2>
            <p className="mt-4 text-muted-foreground text-lg font-light">Start free. Upgrade whenever you need more.</p>

            {/* Monthly / Yearly Toggle */}
            <div className="mt-8 flex items-center justify-center gap-3 select-none">
              <span className={cn("text-sm transition-colors", !isYearly ? "text-foreground font-semibold" : "text-muted-foreground")}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative h-6 w-11 rounded-full bg-muted border border-border transition-colors outline-none cursor-pointer flex items-center p-0.5"
              >
                <motion.div
                  layout
                  className="h-4.5 w-4.5 rounded-full bg-brand"
                  animate={{ x: isYearly ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={cn("text-sm transition-colors flex items-center gap-1.5", isYearly ? "text-foreground font-semibold" : "text-muted-foreground")}>
                Yearly
                <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5 text-[10px] font-bold shadow-glow">Save 20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PRICING.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative rounded-3xl border p-8 shadow-card flex flex-col justify-between h-full transition-all duration-500",
                  p.featured
                    ? "bg-gradient-brand text-brand-foreground shadow-glow border-brand-glow/30"
                    : "bg-card border-border hover:border-brand/30 hover:shadow-elegant"
                )}
              >
                {p.featured && (
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-background border border-brand/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-glow select-none"
                  >
                    Most popular
                  </motion.div>
                )}
                
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-90">{p.name}</div>
                  
                  {/* Animated Price */}
                  <div className="mt-5 flex items-baseline gap-1 overflow-hidden h-[56px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? "yearly" : "monthly"}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-display text-5xl tracking-tight font-semibold"
                      >
                        {getPrice(p.name)}
                      </motion.span>
                    </AnimatePresence>
                    <span className={cn("text-xs opacity-75 leading-none", p.featured ? "text-brand-foreground/80" : "text-muted-foreground")}>
                      / {getPeriod(p.name)}
                    </span>
                  </div>
                  
                  <p className={cn("mt-3 text-sm leading-relaxed", p.featured ? "text-brand-foreground/80" : "text-muted-foreground")}>
                    {p.description}
                  </p>
                  
                  <Magnetic>
                    <Button
                      asChild
                      className={cn(
                        "mt-6 w-full rounded-full py-5 text-sm font-semibold transition-all duration-300 cursor-pointer shadow-card",
                        p.featured
                          ? "bg-background text-foreground hover:bg-background/90 hover:scale-[1.02]"
                          : "hover:scale-[1.02]"
                      )}
                    >
                      <Link to="/app/chat">{p.cta}</Link>
                    </Button>
                  </Magnetic>
                  
                  <ul className="mt-8 space-y-3.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 font-light">
                        <Check className={cn("mt-0.5 h-4.5 w-4.5 shrink-0 p-0.5 rounded-full", p.featured ? "bg-white/10 text-white" : "bg-brand/10 text-brand")} />
                        <span className="opacity-90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-28 sm:px-6 relative z-10">
      <ScrollReveal>
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">FAQ</div>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium">Answers, if you were wondering.</h2>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.15}>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQ.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-2xl border border-border/80 bg-card/30 backdrop-blur-sm px-6 transition hover:border-brand/20 hover:bg-card/50"
            >
              <AccordionItem value={`i${i}`} className="border-b-0">
                <AccordionTrigger className="text-left text-base font-semibold py-5 cursor-pointer hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed font-light">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </ScrollReveal>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed successfully! Welcome to the Nebula newsletter.", {
      description: `We'll keep you posted at ${email}`,
    });
    setEmail("");
  };

  return (
    <ScrollReveal>
      <section id="contact" className="mx-auto max-w-4xl px-4 pb-28 sm:px-6 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-brand-foreground shadow-glow sm:p-14">
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          
          <h3 className="font-display text-3xl tracking-tight sm:text-4xl">Stay in the loop.</h3>
          <p className="mx-auto mt-3 max-w-md text-sm opacity-90">The occasional email on new models, features, and tips. Zero spam.</p>
          
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-2.5 sm:flex-row relative z-10 animate-fade-in" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-brand-foreground placeholder:text-brand-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/60 transition duration-300"
            />
            <Magnetic>
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-background/90 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-card"
              >
                Subscribe
              </button>
            </Magnetic>
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/20 relative z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">The AI workspace for thinkers, builders, and teams.</p>
          <div className="mt-5 flex gap-3 select-none">
            <Magnetic>
              <a
                href="#"
                className="group rounded-full border p-2.5 transition hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/40 hover:text-[#1DA1F2] block cursor-pointer"
              >
                <Twitter className="h-4 w-4 transition duration-300 group-hover:rotate-6 group-hover:scale-110" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#"
                className="group rounded-full border p-2.5 transition hover:bg-foreground/5 hover:border-foreground/30 hover:text-foreground block cursor-pointer"
              >
                <Github className="h-4 w-4 transition duration-300 group-hover:-rotate-6 group-hover:scale-110" />
              </a>
            </Magnetic>
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Models", "Pricing", "Changelog"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold tracking-wider uppercase text-foreground">{c.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition hover:text-foreground relative group block py-0.5">
                    {l}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-1/3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© 2026 Nebula AI. All rights reserved.</div>
    </footer>
  );
}
