import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence, animate } from "framer-motion";
import { cn } from "@/lib/utils";

// Custom Glowing Cursor for Desktop
export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotXTransform = useTransform(cursorXSpring, (val) => val + (isHovered ? 24 - 3 : 16 - 3));
  const dotYTransform = useTransform(cursorYSpring, (val) => val + (isHovered ? 24 - 3 : 16 - 3));

  useEffect(() => {
    // Detect mobile or touch capability
    const isMobile =
      window.matchMedia("(max-width: 768px)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isMobile) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-glow]")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full border border-brand/40 mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
          borderColor: isHovered ? "var(--color-brand)" : "rgba(139, 92, 246, 0.4)",
          backgroundColor: isHovered ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-brand mix-blend-difference hidden md:block"
        style={{
          x: dotXTransform,
          y: dotYTransform,
        }}
      />
    </>
  );
}

// Scroll Progress Bar at top
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[1000] h-[3px] origin-left bg-gradient-brand shadow-glow"
      style={{ scaleX }}
    />
  );
}

// Radial Glow Background (Mouse follow)
export function RadialGlowBackground() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const opacity = useSpring(0, { damping: 30, stiffness: 200 });

  const backgroundTransform = useTransform(
    [mouseX, mouseY, opacity],
    ([x, y, op]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, color-mix(in oklab, var(--brand) 6%, transparent), transparent 85%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      opacity.set(1);
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, opacity]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{
        background: backgroundTransform,
        opacity,
      }}
    />
  );
}

// Animated Aurora Background Blobs
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -70, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[10%] -top-[10%] h-[60vw] w-[60vw] max-w-[700px] rounded-full bg-brand/8 blur-[120px] dark:bg-brand/12"
      />
      <motion.div
        animate={{
          x: [0, -50, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[10%] top-[15%] h-[55vw] w-[55vw] max-w-[600px] rounded-full bg-brand-glow/6 blur-[110px] dark:bg-brand-glow/10"
      />
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] left-[15%] h-[50vw] w-[50vw] max-w-[500px] rounded-full bg-purple-500/4 blur-[100px] dark:bg-purple-500/8"
      />
    </div>
  );
}

// Magnetic interactive wrapper
export function Magnetic({ children, range = 60 }: { children: React.ReactNode; range?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < range) {
      x.set(distanceX * 0.35);
      y.set(distanceY * 0.35);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// Tilt card wrapper with spotlight glow
export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useSpring(0, { damping: 20, stiffness: 150 });

  const radialGlow = useTransform(
    [glowX, glowY, glowOpacity],
    ([gx, gy, opacity]) =>
      `radial-gradient(150px circle at ${gx}px ${gy}px, color-mix(in oklab, var(--brand) 12%, transparent), transparent 80%)`
  );

  const borderGlow = useTransform(
    [glowX, glowY, glowOpacity],
    ([gx, gy, opacity]) =>
      `radial-gradient(120px circle at ${gx}px ${gy}px, var(--brand), transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const relativeX = mouseX / width - 0.5;
    const relativeY = mouseY / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);

    glowX.set(mouseX);
    glowY.set(mouseY);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
  };

  return (
    <div className="perspective-[1000px] h-full w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn("relative h-full w-full rounded-2xl border transition-all duration-300 ease-out", className)}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{
            background: radialGlow,
            opacity: glowOpacity,
          }}
        />
        <motion.div
          className="pointer-events-none absolute -inset-[1px] z-0 rounded-[inherit]"
          style={{
            background: borderGlow,
            opacity: glowOpacity,
          }}
        />
        <div style={{ transform: "translateZ(8px)" }} className="relative z-10 h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// CountUp number component
export function CountUp({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericPart = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const decimalMatches = value.match(/\.([0-9]+)/);
  const decimals = decimalMatches ? decimalMatches[1].length : 0;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const element = ref.current;
          animate(0, numericPart, {
            duration,
            ease: "easeOut",
            onUpdate: (latest) => {
              if (element) {
                element.textContent = latest.toFixed(decimals) + suffix;
              }
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericPart, hasAnimated, decimals, suffix, duration]);

  return <span ref={ref}>{hasAnimated ? value : `0${suffix}`}</span>;
}

// Initial Screen Preloader
export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360],
                borderRadius: ["30%", "50%", "30%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-16 w-16 bg-gradient-brand shadow-glow flex items-center justify-center"
            >
              <div className="h-8 w-8 rounded-lg bg-background/20 backdrop-blur-sm" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl tracking-wide font-medium"
            >
              Nebula
            </motion.div>
            <div className="w-48 h-[2px] bg-muted rounded-full overflow-hidden mt-1">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full bg-gradient-brand"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Animated Section Divider (drawing path line)
export function AnimatedSectionDivider() {
  return (
    <div className="relative w-full h-[1px] flex items-center justify-center opacity-40">
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "40%", opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        className="absolute h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent shadow-glow"
      />
    </div>
  );
}
