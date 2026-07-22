//#region node_modules/.nitro/vite/services/ssr/assets/data-BE_d0gQU.js
var AI_MODELS = [
	{
		id: "gpt-5",
		name: "GPT-5",
		provider: "OpenAI",
		description: "Frontier reasoning model",
		badge: "New",
		contextWindow: "1M"
	},
	{
		id: "gpt-4.1",
		name: "GPT-4.1",
		provider: "OpenAI",
		description: "Balanced speed and intelligence",
		contextWindow: "256k"
	},
	{
		id: "claude-opus",
		name: "Claude Opus",
		provider: "Anthropic",
		description: "Most capable Claude model",
		contextWindow: "500k"
	},
	{
		id: "claude-sonnet",
		name: "Claude Sonnet",
		provider: "Anthropic",
		description: "Fast, brilliant, and reliable",
		badge: "Popular",
		contextWindow: "200k"
	},
	{
		id: "gemini-pro",
		name: "Gemini Pro",
		provider: "Google",
		description: "Multimodal reasoning",
		contextWindow: "2M"
	},
	{
		id: "gemini-flash",
		name: "Gemini Flash",
		provider: "Google",
		description: "Ultra low latency",
		contextWindow: "1M"
	},
	{
		id: "deepseek",
		name: "DeepSeek",
		provider: "DeepSeek",
		description: "Open reasoning model",
		contextWindow: "128k"
	},
	{
		id: "llama-3",
		name: "Llama 3",
		provider: "Meta",
		description: "Open source foundation",
		contextWindow: "128k"
	},
	{
		id: "mistral",
		name: "Mistral Large",
		provider: "Mistral",
		description: "European frontier model",
		contextWindow: "128k"
	},
	{
		id: "perplexity",
		name: "Perplexity Sonar",
		provider: "Perplexity",
		description: "Web-grounded search",
		contextWindow: "200k"
	}
];
var now = Date.now();
var MOCK_CHATS = [
	{
		id: "c1",
		title: "Redesigning the onboarding flow",
		model: "claude-sonnet",
		createdAt: now - 36e5,
		updatedAt: now - 6e4,
		pinned: true,
		messages: [{
			id: "m1",
			role: "user",
			content: "Help me redesign our SaaS onboarding.",
			createdAt: now - 36e5
		}, {
			id: "m2",
			role: "assistant",
			model: "claude-sonnet",
			createdAt: now - 359e4,
			content: "Absolutely — great onboarding turns curious signups into activated users. Here's a framework:\n\n### 1. Reduce time-to-value\nGet users to a **magic moment** in under 60 seconds.\n\n### 2. Progressive disclosure\nDon't dump every feature on day one.\n\n```ts\nconst steps = ['welcome', 'personalize', 'first-action', 'aha']\n```\n\n| Step | Goal | Metric |\n|------|------|--------|\n| Welcome | Set context | View rate |\n| Personalize | Tailor experience | Completion |\n| First action | Create value | Activation |"
		}]
	},
	{
		id: "c2",
		title: "Q4 marketing strategy brainstorm",
		model: "gpt-5",
		createdAt: now - 864e5,
		updatedAt: now - 72e5,
		messages: []
	},
	{
		id: "c3",
		title: "Refactor auth middleware",
		model: "gpt-4.1",
		createdAt: now - 1728e5,
		updatedAt: now - 1728e5,
		pinned: true,
		messages: []
	},
	{
		id: "c4",
		title: "Explain vector databases",
		model: "gemini-pro",
		createdAt: now - 2592e5,
		updatedAt: now - 2592e5,
		messages: []
	},
	{
		id: "c5",
		title: "Write launch email",
		model: "claude-opus",
		createdAt: now - 6048e5,
		updatedAt: now - 6048e5,
		messages: []
	},
	{
		id: "c6",
		title: "Debug TypeScript generics",
		model: "deepseek",
		createdAt: now - 12096e5,
		updatedAt: now - 12096e5,
		messages: []
	},
	{
		id: "c7",
		title: "Compare Postgres vs Planetscale",
		model: "perplexity",
		createdAt: now - 18144e5,
		updatedAt: now - 18144e5,
		archived: true,
		messages: []
	}
];
var SUGGESTED_PROMPTS = [
	{
		icon: "Sparkles",
		title: "Brainstorm ideas",
		prompt: "Give me 10 unique product ideas for the AI creator economy."
	},
	{
		icon: "Code2",
		title: "Write code",
		prompt: "Build a React hook for debounced local storage state in TypeScript."
	},
	{
		icon: "PenLine",
		title: "Draft an email",
		prompt: "Write a concise launch announcement email to our beta users."
	},
	{
		icon: "GraduationCap",
		title: "Explain a concept",
		prompt: "Explain vector embeddings to a product manager."
	}
];
var MOCK_NOTIFICATIONS = [
	{
		id: "n1",
		title: "New model available",
		description: "GPT-5 is now available on your plan.",
		time: "2m ago",
		read: false,
		type: "success"
	},
	{
		id: "n2",
		title: "Usage alert",
		description: "You've used 80% of your monthly tokens.",
		time: "1h ago",
		read: false,
		type: "warning"
	},
	{
		id: "n3",
		title: "Weekly summary",
		description: "Your team sent 1,284 messages this week.",
		time: "1d ago",
		read: true,
		type: "info"
	},
	{
		id: "n4",
		title: "Payment received",
		description: "Invoice #1024 has been paid.",
		time: "3d ago",
		read: true,
		type: "success"
	}
];
var USAGE_DATA = [
	{
		day: "Mon",
		messages: 120,
		tokens: 45e3
	},
	{
		day: "Tue",
		messages: 210,
		tokens: 78e3
	},
	{
		day: "Wed",
		messages: 180,
		tokens: 62e3
	},
	{
		day: "Thu",
		messages: 290,
		tokens: 98e3
	},
	{
		day: "Fri",
		messages: 340,
		tokens: 112e3
	},
	{
		day: "Sat",
		messages: 150,
		tokens: 51e3
	},
	{
		day: "Sun",
		messages: 90,
		tokens: 32e3
	}
];
var MODEL_USAGE = [
	{
		name: "GPT-5",
		value: 42,
		fill: "var(--color-chart-1)"
	},
	{
		name: "Claude Sonnet",
		value: 28,
		fill: "var(--color-chart-2)"
	},
	{
		name: "Gemini Pro",
		value: 18,
		fill: "var(--color-chart-3)"
	},
	{
		name: "Others",
		value: 12,
		fill: "var(--color-chart-4)"
	}
];
var TESTIMONIALS = [
	{
		name: "Sarah Chen",
		role: "Design Lead, Linear",
		quote: "The most polished AI workspace I've used. It replaced three tools in our stack.",
		avatar: "SC"
	},
	{
		name: "Marcus Rivera",
		role: "Founder, Kite Labs",
		quote: "Switching between GPT-5 and Claude Opus mid-thread is a game changer.",
		avatar: "MR"
	},
	{
		name: "Priya Kapoor",
		role: "Staff Engineer, Stripe",
		quote: "It feels like the Arc browser of AI chat. Every detail is considered.",
		avatar: "PK"
	},
	{
		name: "Jonas Meyer",
		role: "CTO, Fieldwire",
		quote: "We rolled it out to 200 engineers in a day. Zero training required.",
		avatar: "JM"
	}
];
var PRICING = [
	{
		name: "Free",
		price: "$0",
		period: "forever",
		description: "For casual explorers.",
		features: [
			"50 messages / day",
			"GPT-4.1 & Gemini Flash",
			"Basic history",
			"Community support"
		],
		cta: "Get started"
	},
	{
		name: "Pro",
		price: "$20",
		period: "per month",
		description: "For power users and creators.",
		featured: true,
		features: [
			"Unlimited messages",
			"All frontier models",
			"File uploads (PDF, DOCX)",
			"Priority latency",
			"Advanced analytics"
		],
		cta: "Start Pro trial"
	},
	{
		name: "Team",
		price: "$49",
		period: "per seat / mo",
		description: "For growing teams.",
		features: [
			"Everything in Pro",
			"Shared workspaces",
			"Admin dashboard",
			"SSO & SCIM",
			"SOC 2 controls"
		],
		cta: "Contact sales"
	}
];
var FAQ = [
	{
		q: "Which AI models are supported?",
		a: "GPT-5, GPT-4.1, Claude Opus & Sonnet, Gemini Pro & Flash, DeepSeek, Llama 3, Mistral Large, and Perplexity Sonar. You can switch mid-conversation."
	},
	{
		q: "Is my data private?",
		a: "Yes. Conversations are encrypted at rest and in transit. We never train on your data."
	},
	{
		q: "Can I upload files?",
		a: "PDF, DOCX, TXT, CSV, and images up to 50MB on Pro. Drag and drop anywhere."
	},
	{
		q: "Do you offer team billing?",
		a: "Team plan includes centralized billing, SSO, and shared workspaces."
	},
	{
		q: "Can I cancel anytime?",
		a: "Yes. Cancel with one click. Your data stays available for 30 days."
	}
];
var FEATURES = [
	{
		icon: "Layers",
		title: "Multi-model",
		description: "Switch between 10+ frontier models in one thread."
	},
	{
		icon: "Zap",
		title: "Blazing fast",
		description: "Sub-second first-token latency, streamed to your screen."
	},
	{
		icon: "Shield",
		title: "Enterprise secure",
		description: "SOC 2, GDPR, and zero-retention data policies."
	},
	{
		icon: "History",
		title: "Perfect memory",
		description: "Every conversation indexed, searchable, forever."
	},
	{
		icon: "Upload",
		title: "File uploads",
		description: "PDFs, spreadsheets, images — analyzed instantly."
	},
	{
		icon: "Code2",
		title: "Code first",
		description: "Beautiful syntax highlighting and diff views."
	},
	{
		icon: "LineChart",
		title: "Rich analytics",
		description: "Track usage, cost, and team activity in real time."
	},
	{
		icon: "Sparkles",
		title: "Delightful UX",
		description: "Keyboard-first, dark mode, and command palette."
	}
];
var USER = {
	name: "Alex Morgan",
	username: "alexmorgan",
	email: "alex@nebula.ai",
	bio: "Building the future of human-AI collaboration.",
	avatar: "AM",
	plan: "Pro",
	joined: "January 2025"
};
//#endregion
export { MOCK_NOTIFICATIONS as a, SUGGESTED_PROMPTS as c, USER as d, MOCK_CHATS as i, TESTIMONIALS as l, FAQ as n, MODEL_USAGE as o, FEATURES as r, PRICING as s, AI_MODELS as t, USAGE_DATA as u };
