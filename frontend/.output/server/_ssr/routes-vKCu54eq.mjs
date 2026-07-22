import { a as __toESM } from "../_runtime.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as animate } from "../_libs/framer-motion.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { l as TESTIMONIALS, n as FAQ, r as FEATURES, s as PRICING, t as AI_MODELS } from "./data-BE_d0gQU.mjs";
import { $ as Check, I as History, N as Layers, Q as ChevronDown, R as Github, a as Upload, at as ArrowRight, et as ChartLine, h as Shield, m as Sparkles, o as Twitter, q as CodeXml, t as Zap } from "../_libs/lucide-react.mjs";
import { o as ThemeToggle } from "./theme-toggle-DWxnIhyB.mjs";
import { t as Logo } from "./logo-C393CswG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Lenis } from "../_libs/studio-freight__lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vKCu54eq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed left-0 right-0 top-0 z-[1000] h-[3px] origin-left bg-gradient-brand shadow-glow",
		style: { scaleX }
	});
}
function Magnetic({ children, range = 60 }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, {
		stiffness: 150,
		damping: 15,
		mass: .5
	});
	const springY = useSpring(y, {
		stiffness: 150,
		damping: 15,
		mass: .5
	});
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { left, top, width, height } = ref.current.getBoundingClientRect();
		const centerX = left + width / 2;
		const centerY = top + height / 2;
		const distanceX = clientX - centerX;
		const distanceY = clientY - centerY;
		if (Math.sqrt(distanceX * distanceX + distanceY * distanceY) < range) {
			x.set(distanceX * .35);
			y.set(distanceY * .35);
		} else {
			x.set(0);
			y.set(0);
		}
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: {
			x: springX,
			y: springY
		},
		className: "inline-block",
		children
	});
}
function TiltCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useTransform(y, [-.5, .5], [10, -10]), {
		damping: 20,
		stiffness: 200
	});
	const rotateY = useSpring(useTransform(x, [-.5, .5], [-10, 10]), {
		damping: 20,
		stiffness: 200
	});
	const glowX = useMotionValue(0);
	const glowY = useMotionValue(0);
	const glowOpacity = useSpring(0, {
		damping: 20,
		stiffness: 150
	});
	const radialGlow = useTransform([
		glowX,
		glowY,
		glowOpacity
	], ([gx, gy, opacity]) => `radial-gradient(150px circle at ${gx}px ${gy}px, color-mix(in oklab, var(--brand) 12%, transparent), transparent 80%)`);
	const borderGlow = useTransform([
		glowX,
		glowY,
		glowOpacity
	], ([gx, gy, opacity]) => `radial-gradient(120px circle at ${gx}px ${gy}px, var(--brand), transparent 70%)`);
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const relativeX = mouseX / width - .5;
		const relativeY = mouseY / height - .5;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "perspective-[1000px] h-full w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onMouseMove: handleMouseMove,
			onMouseLeave: handleMouseLeave,
			style: {
				rotateX,
				rotateY,
				transformStyle: "preserve-3d"
			},
			className: cn("relative h-full w-full rounded-2xl border transition-all duration-300 ease-out", className),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute inset-0 z-10 rounded-[inherit]",
					style: {
						background: radialGlow,
						opacity: glowOpacity
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "pointer-events-none absolute -inset-[1px] z-0 rounded-[inherit]",
					style: {
						background: borderGlow,
						opacity: glowOpacity
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: { transform: "translateZ(8px)" },
					className: "relative z-10 h-full w-full",
					children
				})
			]
		})
	});
}
function CountUp({ value, duration = 1.5 }) {
	const ref = (0, import_react.useRef)(null);
	const [hasAnimated, setHasAnimated] = (0, import_react.useState)(false);
	const numericPart = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
	const suffix = value.replace(/[0-9.]/g, "");
	const decimalMatches = value.match(/\.([0-9]+)/);
	const decimals = decimalMatches ? decimalMatches[1].length : 0;
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting && !hasAnimated) {
				setHasAnimated(true);
				const element = ref.current;
				animate(0, numericPart, {
					duration,
					ease: "easeOut",
					onUpdate: (latest) => {
						if (element) element.textContent = latest.toFixed(decimals) + suffix;
					}
				});
			}
		}, { threshold: .1 });
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [
		numericPart,
		hasAnimated,
		decimals,
		suffix,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: hasAnimated ? value : `0${suffix}`
	});
}
function Preloader() {
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 1400);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			y: -40
		},
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						scale: [
							1,
							1.15,
							1
						],
						rotate: [
							0,
							180,
							360
						],
						borderRadius: [
							"30%",
							"50%",
							"30%"
						]
					},
					transition: {
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "h-16 w-16 bg-gradient-brand shadow-glow flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 rounded-lg bg-background/20 backdrop-blur-sm" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .2 },
					className: "font-display text-3xl tracking-wide font-medium",
					children: "Nebula"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-48 h-[2px] bg-muted rounded-full overflow-hidden mt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "0%" },
						animate: { width: "100%" },
						transition: {
							duration: 1.1,
							ease: "easeInOut"
						},
						className: "h-full bg-gradient-brand"
					})
				})
			]
		})
	}) });
}
function AnimatedSectionDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-[1px] flex items-center justify-center opacity-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { width: "0%" },
			whileInView: { width: "100%" },
			viewport: { once: true },
			transition: {
				duration: 1.2,
				ease: "easeOut"
			},
			className: "absolute h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				width: "0%",
				opacity: 0
			},
			whileInView: {
				width: "40%",
				opacity: .8
			},
			viewport: { once: true },
			transition: {
				duration: 1.6,
				ease: "easeOut",
				delay: .2
			},
			className: "absolute h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent shadow-glow"
		})]
	});
}
var ICONS = {
	Layers,
	Zap,
	Shield,
	History,
	Upload,
	Code2: CodeXml,
	LineChart: ChartLine,
	Sparkles
};
function ScrollReveal({ children, delay = 0, y = 20 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			],
			delay
		},
		children
	});
}
function Landing() {
	const lenisRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		lenisRef.current = lenis;
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => lenis.destroy();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedSectionDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: cn("sticky top-0 z-50 transition-all duration-300", isScrolled ? "border-b border-border/80 backdrop-blur-2xl shadow-elegant py-3" : "border-b border-border/30 backdrop-blur-md py-4"),
		style: { backgroundColor: isScrolled ? "color-mix(in oklab, var(--background) 85%, transparent)" : "color-mix(in oklab, var(--background) 65%, transparent)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
					children: [
						"features",
						"models",
						"pricing",
						"faq",
						"contact"
					].map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${section}`,
						className: "relative transition hover:text-foreground group py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capitalize",
							children: section
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand transition-all duration-300 group-hover:w-full" })]
					}, section))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "hidden sm:inline-flex rounded-full cursor-pointer hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: "Log in"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "rounded-full bg-gradient-brand text-brand-foreground shadow-glow hover:scale-[1.03] transition duration-300 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/chat",
								children: ["Get started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						}) })
					]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden py-20 sm:py-24 md:py-32 border-b border-border/10",
		style: { backgroundImage: "radial-gradient(ellipse 60% 50% at 50% -10%, color-mix(in oklab, var(--brand) 12%, transparent), transparent 70%)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 text-xs shadow-sm hover:bg-background transition duration-300 cursor-pointer group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-brand animate-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted-foreground group-hover:text-foreground transition duration-300",
							children: "GPT-5 is now live on Nebula"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "max-w-4xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground font-medium",
					children: [
						"The AI workspace for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient font-semibold",
							children: "thinkers"
						}),
						" who ship."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						],
						delay: .15
					},
					className: "mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl font-light leading-relaxed",
					children: "One beautiful chat interface for GPT-5, Claude Opus, Gemini, and every frontier model. Fast. Private. Delightfully keyboard-first."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						],
						delay: .3
					},
					className: "mt-10 flex flex-wrap items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "rounded-full bg-gradient-brand text-brand-foreground shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 px-8 py-6 text-base cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/app/chat",
							className: "flex items-center",
							children: ["Start chatting free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-5 w-5" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "rounded-full px-8 py-6 text-base cursor-pointer hover:bg-accent/40 hover:scale-[1.02] transition duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							children: "See how it works"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: [
							.16,
							1,
							.3,
							1
						],
						delay: .45
					},
					className: "mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 relative z-10",
					children: [
						{
							v: "10+",
							l: "Frontier models"
						},
						{
							v: "1.2M",
							l: "Active users"
						},
						{
							v: "180ms",
							l: "P50 latency"
						},
						{
							v: "99.99%",
							l: "Uptime"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6 border border-border/40 select-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl tracking-tight sm:text-4xl text-foreground font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { value: s.v })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 text-xs text-muted-foreground uppercase tracking-wider",
							children: s.l
						})]
					}, s.l))
				})
			]
		})
	});
}
function LogoStrip() {
	const names = [
		"OpenAI",
		"Anthropic",
		"Google",
		"Meta",
		"Mistral",
		"DeepSeek",
		"Perplexity"
	];
	const marqueeItems = [...names, ...names];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-y border-border/30 bg-muted/10 py-10 relative overflow-hidden z-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-15 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-15 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs uppercase tracking-widest text-muted-foreground/80 mb-6 font-semibold",
					children: "Powered by every frontier model"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "flex gap-20 whitespace-nowrap w-max",
						animate: { x: [0, "-50%"] },
						transition: {
							repeat: Infinity,
							ease: "linear",
							duration: 20
						},
						children: marqueeItems.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tracking-tight text-muted-foreground/50 hover:text-foreground hover:scale-105 transition-all duration-300 select-none cursor-default font-semibold",
							children: n
						}, i))
					})
				})]
			})
		]
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "mx-auto max-w-7xl px-4 py-28 sm:px-6 relative z-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-widest text-brand",
					children: "Features"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium",
					children: "Everything you need. Nothing you don't."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground text-lg font-light",
					children: "Built by people who use AI every day, for people who use AI every day."
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: FEATURES.map((f, i) => {
				const Icon = ICONS[f.icon] ?? Sparkles;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .05,
					y: 15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "bg-card border-border/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 h-full flex flex-col items-start select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5.5 w-5.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold tracking-tight text-foreground",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed font-light",
									children: f.description
								})
							]
						})
					})
				}, f.title);
			})
		})]
	});
}
function ModelsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "models",
		className: "bg-muted/10 py-28 relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-brand",
						children: "Multi-model"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium",
						children: "Switch models mid-thought."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-muted-foreground text-lg font-light leading-relaxed",
						children: "Ask GPT-5 to draft. Have Claude Opus critique. Let Gemini research the web. All in the same conversation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4 text-sm",
						children: [
							"Bring your own API keys",
							"Per-message model routing",
							"Cost & token tracking",
							"Model comparisons side-by-side"
						].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -10
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: {
								duration: .4,
								delay: i * .1
							},
							className: "flex items-center gap-3 font-light text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-5.5 w-5.5 place-items-center rounded-full bg-gradient-brand shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-brand-foreground" })
							}), x]
						}, x))
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: AI_MODELS.slice(0, 8).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						delay: i * .05,
						y: 15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							className: "bg-card/40 backdrop-blur-md border-border/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 flex flex-col h-full select-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold tracking-tight text-foreground",
											children: m.name
										}), m.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-gradient-brand px-2 py-0.5 text-[9px] font-medium text-brand-foreground shadow-glow",
											children: m.badge
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-xs text-brand font-medium uppercase tracking-wider",
										children: m.provider
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 pt-3 border-t border-border/30 text-xs text-muted-foreground flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Context Window" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: m.contextWindow
										})]
									})
								]
							})
						})
					}, m.id))
				})]
			})
		})
	});
}
function TestimonialsCarousel() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(0);
	const handleNext = () => {
		setDirection(1);
		setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
	};
	const handlePrev = () => {
		setDirection(-1);
		setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	};
	(0, import_react.useEffect)(() => {
		const interval = setInterval(handleNext, 6e3);
		return () => clearInterval(interval);
	}, []);
	const variants = {
		enter: (dir) => ({
			x: dir > 0 ? 150 : -150,
			opacity: 0,
			scale: .95
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				x: {
					type: "spring",
					stiffness: 300,
					damping: 30
				},
				opacity: { duration: .4 },
				scale: { duration: .4 }
			}
		},
		exit: (dir) => ({
			x: dir < 0 ? 150 : -150,
			opacity: 0,
			scale: .95,
			transition: {
				x: {
					type: "spring",
					stiffness: 300,
					damping: 30
				},
				opacity: { duration: .3 },
				scale: { duration: .3 }
			}
		})
	};
	const currentTestimonial = TESTIMONIALS[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-16 max-w-2xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden min-h-[220px] relative w-full flex items-center justify-center py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				custom: direction,
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					custom: direction,
					variants,
					initial: "enter",
					animate: "center",
					exit: "exit",
					drag: "x",
					dragConstraints: {
						left: 0,
						right: 0
					},
					dragElastic: .6,
					onDragEnd: (e, { offset }) => {
						if (offset.x < -50) handleNext();
						else if (offset.x > 50) handlePrev();
					},
					className: "w-full cursor-grab active:cursor-grabbing rounded-3xl border bg-card p-8 shadow-elegant md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg leading-relaxed italic md:text-xl font-light",
						children: [
							"\"",
							currentTestimonial.quote,
							"\""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-brand-foreground shadow-glow select-none",
							children: currentTestimonial.avatar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-semibold",
							children: currentTestimonial.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: currentTestimonial.role
						})] })]
					})]
				}, index)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center justify-center gap-3 select-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handlePrev,
					className: "rounded-full border border-border/80 p-2.5 transition hover:bg-accent/50 cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 rotate-90 text-muted-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1.5",
					children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setDirection(i > index ? 1 : -1);
							setIndex(i);
						},
						className: cn("h-2 rounded-full transition-all duration-300 cursor-pointer", i === index ? "w-6 bg-brand" : "w-2 bg-muted hover:bg-muted-foreground/30")
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleNext,
					className: "rounded-full border border-border/80 p-2.5 transition hover:bg-accent/50 cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 -rotate-90 text-muted-foreground" })
				})
			]
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-28 sm:px-6 relative z-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-widest text-brand",
				children: "Loved by teams"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium",
				children: "The workspace people don't quit."
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
			delay: .15,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsCarousel, {})
		})]
	});
}
function Pricing() {
	const [isYearly, setIsYearly] = (0, import_react.useState)(false);
	const getPrice = (name) => {
		if (name === "Free") return "$0";
		if (name === "Pro") return isYearly ? "$16" : "$20";
		if (name === "Team") return isYearly ? "$39" : "$49";
		return "";
	};
	const getPeriod = (name) => {
		if (name === "Free") return "forever";
		return isYearly ? "per month, billed annually" : "per month";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "bg-muted/10 py-28 relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-brand",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium",
						children: "Simple, honest pricing."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-lg font-light",
						children: "Start free. Upgrade whenever you need more."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-center gap-3 select-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm transition-colors", !isYearly ? "text-foreground font-semibold" : "text-muted-foreground"),
								children: "Monthly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIsYearly(!isYearly),
								className: "relative h-6 w-11 rounded-full bg-muted border border-border transition-colors outline-none cursor-pointer flex items-center p-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									layout: true,
									className: "h-4.5 w-4.5 rounded-full bg-brand",
									animate: { x: isYearly ? 20 : 0 },
									transition: {
										type: "spring",
										stiffness: 500,
										damping: 30
									}
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("text-sm transition-colors flex items-center gap-1.5", isYearly ? "text-foreground font-semibold" : "text-muted-foreground"),
								children: ["Yearly", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-brand/10 text-brand px-2 py-0.5 text-[10px] font-bold shadow-glow",
									children: "Save 20%"
								})]
							})
						]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: PRICING.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("relative rounded-3xl border p-8 shadow-card flex flex-col justify-between h-full transition-all duration-500", p.featured ? "bg-gradient-brand text-brand-foreground shadow-glow border-brand-glow/30" : "bg-card border-border hover:border-brand/30 hover:shadow-elegant"),
						children: [p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { scale: [
								1,
								1.04,
								1
							] },
							transition: {
								duration: 2,
								repeat: Infinity
							},
							className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-background border border-brand/20 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-glow select-none",
							children: "Most popular"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase tracking-wider opacity-90",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-baseline gap-1 overflow-hidden h-[56px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										initial: {
											y: 15,
											opacity: 0
										},
										animate: {
											y: 0,
											opacity: 1
										},
										exit: {
											y: -15,
											opacity: 0
										},
										transition: { duration: .2 },
										className: "font-display text-5xl tracking-tight font-semibold",
										children: getPrice(p.name)
									}, isYearly ? "yearly" : "monthly")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("text-xs opacity-75 leading-none", p.featured ? "text-brand-foreground/80" : "text-muted-foreground"),
									children: ["/ ", getPeriod(p.name)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-3 text-sm leading-relaxed", p.featured ? "text-brand-foreground/80" : "text-muted-foreground"),
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: cn("mt-6 w-full rounded-full py-5 text-sm font-semibold transition-all duration-300 cursor-pointer shadow-card", p.featured ? "bg-background text-foreground hover:bg-background/90 hover:scale-[1.02]" : "hover:scale-[1.02]"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/app/chat",
									children: p.cta
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3.5 text-sm",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 font-light",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-0.5 h-4.5 w-4.5 shrink-0 p-0.5 rounded-full", p.featured ? "bg-white/10 text-white" : "bg-brand/10 text-brand") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-90",
										children: f
									})]
								}, f))
							})
						] })]
					})
				}, p.name))
			})]
		})
	});
}
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "mx-auto max-w-3xl px-4 py-28 sm:px-6 relative z-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-widest text-brand",
				children: "FAQ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl font-medium",
				children: "Answers, if you were wondering."
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
			delay: .15,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-12 space-y-3",
				children: FAQ.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					whileHover: { scale: 1.005 },
					transition: {
						type: "spring",
						stiffness: 400,
						damping: 25
					},
					className: "rounded-2xl border border-border/80 bg-card/30 backdrop-blur-sm px-6 transition hover:border-brand/20 hover:bg-card/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `i${i}`,
						className: "border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left text-base font-semibold py-5 cursor-pointer hover:no-underline",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground pb-5 leading-relaxed font-light",
							children: f.a
						})]
					})
				}, i))
			})
		})]
	});
}
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) return;
		toast.success("Subscribed successfully! Welcome to the Nebula newsletter.", { description: `We'll keep you posted at ${email}` });
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "mx-auto max-w-4xl px-4 pb-28 sm:px-6 relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-brand-foreground shadow-glow sm:p-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl tracking-tight sm:text-4xl",
					children: "Stay in the loop."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-md text-sm opacity-90",
					children: "The occasional email on new models, features, and tips. Zero spam."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mx-auto mt-8 flex max-w-md flex-col gap-2.5 sm:flex-row relative z-10 animate-fade-in",
					onSubmit: handleSubmit,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "you@company.com",
						className: "flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-brand-foreground placeholder:text-brand-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/60 transition duration-300"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full sm:w-auto rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-background/90 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-card",
						children: "Subscribe"
					}) })]
				})
			]
		})
	}) });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t bg-muted/20 relative z-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-2 md:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed",
						children: "The AI workspace for thinkers, builders, and teams."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3 select-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "group rounded-full border p-2.5 transition hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/40 hover:text-[#1DA1F2] block cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-4 w-4 transition duration-300 group-hover:rotate-6 group-hover:scale-110" })
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "group rounded-full border p-2.5 transition hover:bg-foreground/5 hover:border-foreground/30 hover:text-foreground block cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4 transition duration-300 group-hover:-rotate-6 group-hover:scale-110" })
						}) })]
					})
				]
			}), [
				{
					title: "Product",
					links: [
						"Features",
						"Models",
						"Pricing",
						"Changelog"
					]
				},
				{
					title: "Company",
					links: [
						"About",
						"Blog",
						"Careers",
						"Contact"
					]
				},
				{
					title: "Legal",
					links: [
						"Privacy",
						"Terms",
						"Security",
						"DPA"
					]
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold tracking-wider uppercase text-foreground",
				children: c.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2 text-sm text-muted-foreground",
				children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "transition hover:text-foreground relative group block py-0.5",
					children: [l, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-1/3" })]
				}) }, l))
			})] }, c.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t py-6 text-center text-xs text-muted-foreground",
			children: "© 2026 Nebula AI. All rights reserved."
		})]
	});
}
//#endregion
export { Landing as component };
