import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as MOCK_CHATS } from "./data-BE_d0gQU.mjs";
import { _ as Search, n as X } from "../_libs/lucide-react.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-store-DshFgPAh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Command$2 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$2.displayName = _e.displayName;
var CommandDialog = ({ children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command$2, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			})
		})
	});
};
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
function mockResponse(prompt) {
	const templates = [
		`Great question. Here's a structured take on "${prompt.slice(0, 60)}":\n\n### Key points\n- **Clarity first** — define the outcome you want.\n- **Iterate quickly** — ship small, learn fast.\n- **Measure everything** — instrument before optimizing.\n\n\`\`\`ts\nfunction thinkAboutIt(input: string) {\n  return input.split(' ').reverse().join(' ');\n}\n\`\`\`\n\n| Approach | Effort | Impact |\n|----------|--------|--------|\n| Manual | Low | Small |\n| Automated | Medium | Large |\n| AI-native | High | Huge |\n\nWant me to go deeper on any of these?`,
		`Absolutely — let's break this down.\n\n1. First, **understand the problem space**.\n2. Then, sketch 3 candidate solutions.\n3. Prototype the most promising one.\n\n> Speed of iteration beats quality of iteration.\n\nHappy to draft the first prototype if you'd like.`,
		`Here's how I'd approach that:\n\n- Start with a clear hypothesis\n- Design a minimal experiment\n- Ship, measure, and iterate\n\nWould you like me to write the spec?`
	];
	return templates[Math.floor(Math.random() * templates.length)];
}
async function streamMock(text, onChunk) {
	const words = text.split(" ");
	for (let i = 0; i < words.length; i++) {
		await new Promise((r) => setTimeout(r, 20 + Math.random() * 40));
		onChunk((i === 0 ? "" : " ") + words[i]);
	}
}
var useChatStore = create((set, get) => ({
	chats: MOCK_CHATS,
	activeChatId: MOCK_CHATS[0]?.id ?? null,
	selectedModel: "claude-sonnet",
	setActiveChat: (id) => set({ activeChatId: id }),
	setSelectedModel: (m) => set({ selectedModel: m }),
	newChat: () => {
		const id = `c${Date.now()}`;
		const chat = {
			id,
			title: "New conversation",
			model: get().selectedModel,
			createdAt: Date.now(),
			updatedAt: Date.now(),
			messages: []
		};
		set((s) => ({
			chats: [chat, ...s.chats],
			activeChatId: id
		}));
		return id;
	},
	sendMessage: async (chatId, content) => {
		const userMsg = {
			id: `m${Date.now()}`,
			role: "user",
			content,
			createdAt: Date.now()
		};
		const assistantId = `m${Date.now() + 1}`;
		set((s) => ({ chats: s.chats.map((c) => c.id === chatId ? {
			...c,
			title: c.messages.length === 0 ? content.slice(0, 40) : c.title,
			updatedAt: Date.now(),
			messages: [
				...c.messages,
				userMsg,
				{
					id: assistantId,
					role: "assistant",
					content: "",
					createdAt: Date.now(),
					model: get().selectedModel
				}
			]
		} : c) }));
		await streamMock(mockResponse(content), (chunk) => {
			set((s) => ({ chats: s.chats.map((c) => c.id === chatId ? {
				...c,
				messages: c.messages.map((m) => m.id === assistantId ? {
					...m,
					content: m.content + chunk
				} : m)
			} : c) }));
		});
	},
	deleteChat: (id) => set((s) => ({
		chats: s.chats.filter((c) => c.id !== id),
		activeChatId: s.activeChatId === id ? null : s.activeChatId
	})),
	renameChat: (id, title) => set((s) => ({ chats: s.chats.map((c) => c.id === id ? {
		...c,
		title
	} : c) })),
	togglePin: (id) => set((s) => ({ chats: s.chats.map((c) => c.id === id ? {
		...c,
		pinned: !c.pinned
	} : c) })),
	archiveChat: (id) => set((s) => ({ chats: s.chats.map((c) => c.id === id ? {
		...c,
		archived: !c.archived
	} : c) })),
	deleteMessage: (chatId, messageId) => set((s) => ({ chats: s.chats.map((c) => c.id === chatId ? {
		...c,
		messages: c.messages.filter((m) => m.id !== messageId)
	} : c) })),
	regenerate: async (chatId, messageId) => {
		set((s) => ({ chats: s.chats.map((c) => c.id === chatId ? {
			...c,
			messages: c.messages.map((m) => m.id === messageId ? {
				...m,
				content: ""
			} : m)
		} : c) }));
		const chat = get().chats.find((c) => c.id === chatId);
		const idx = chat?.messages.findIndex((m) => m.id === messageId) ?? -1;
		await streamMock(mockResponse(chat?.messages[idx - 1]?.content ?? ""), (chunk) => {
			set((s) => ({ chats: s.chats.map((c) => c.id === chatId ? {
				...c,
				messages: c.messages.map((m) => m.id === messageId ? {
					...m,
					content: m.content + chunk
				} : m)
			} : c) }));
		});
	},
	reactMessage: (chatId, messageId, liked) => set((s) => ({ chats: s.chats.map((c) => c.id === chatId ? {
		...c,
		messages: c.messages.map((m) => m.id === messageId ? {
			...m,
			liked
		} : m)
	} : c) }))
}));
//#endregion
export { CommandInput as a, CommandSeparator as c, CommandGroup as i, useChatStore as l, CommandDialog as n, CommandItem as o, CommandEmpty as r, CommandList as s, Command$2 as t };
