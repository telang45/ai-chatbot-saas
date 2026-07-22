import { a as __toESM } from "../_runtime.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ScrollArea } from "./scroll-area-D0AShDWm.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { c as SUGGESTED_PROMPTS, t as AI_MODELS } from "./data-BE_d0gQU.mjs";
import { $ as Check, B as FileText, C as Paperclip, F as Image, G as Copy, L as GraduationCap, S as PenLine, Y as ChevronsUpDown, d as ThumbsDown, it as ArrowUp, k as Mic, l as Trash2, m as Sparkles, n as X, p as Square, q as CodeXml, u as ThumbsUp, v as RefreshCw, x as Pencil } from "../_libs/lucide-react.mjs";
import { a as CommandInput, i as CommandGroup, l as useChatStore, o as CommandItem, r as CommandEmpty, s as CommandList, t as Command$2 } from "./chat-store-DshFgPAh.mjs";
import { n as require_dayjs_min } from "../_libs/dayjs.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/radix-ui__react-popover.mjs";
import { t as Markdown$1 } from "../_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "../_libs/remark-gfm.mjs";
import { n as highlighter, t as one_dark_default } from "../_libs/react-syntax-highlighter+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.chat-BcV5psTG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min());
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
function ModelSelector() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { selectedModel, setSelectedModel } = useChatStore();
	const current = AI_MODELS.find((m) => m.id === selectedModel) ?? AI_MODELS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				role: "combobox",
				className: "h-9 gap-2 rounded-xl border bg-background px-3 text-sm font-medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-gradient-brand" }),
					current.name,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: current.provider
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "ml-1 h-3.5 w-3.5 opacity-60" })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "w-[340px] p-0",
			align: "start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search models..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No models found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: AI_MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				onSelect: () => {
					setSelectedModel(m.id);
					setOpen(false);
				},
				className: "items-start gap-3 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-1 h-4 w-4", selectedModel === m.id ? "opacity-100" : "opacity-0") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: m.name
							}), m.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-gradient-brand px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-brand-foreground",
								children: m.badge
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: m.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-[10px] text-muted-foreground",
						children: m.contextWindow
					})
				]
			}, m.id)) })] })] })
		})]
	});
}
function Markdown({ content }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose prose-sm max-w-none dark:prose-invert prose-headings:font-semibold prose-p:leading-relaxed prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 prose-code:before:content-none prose-code:after:content-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown$1, {
			remarkPlugins: [remarkGfm],
			components: {
				code({ inline, className, children }) {
					const match = /language-(\w+)/.exec(className || "");
					const code = String(children).replace(/\n$/, "");
					if (!inline && match) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
						language: match[1],
						code
					});
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]",
						children
					});
				},
				table({ children }) {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
							className: "border-collapse",
							children
						})
					});
				}
			},
			children: content
		})
	});
}
function CodeBlock({ language, code }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-3 overflow-hidden rounded-xl border bg-[#282c34]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-white/10 px-3 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium uppercase tracking-widest text-white/60",
				children: language
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-7 gap-1.5 text-xs text-white/70 hover:bg-white/10 hover:text-white",
				onClick: () => {
					navigator.clipboard.writeText(code);
					setCopied(true);
					setTimeout(() => setCopied(false), 1500);
				},
				children: [
					copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }),
					" ",
					copied ? "Copied" : "Copy"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(highlighter, {
			language,
			style: one_dark_default,
			customStyle: {
				margin: 0,
				padding: "1rem",
				background: "transparent",
				fontSize: 13
			},
			children: code
		})]
	});
}
var ICONS = {
	Sparkles,
	Code2: CodeXml,
	PenLine,
	GraduationCap
};
function ChatPage() {
	const { chats, activeChatId, sendMessage, deleteMessage, regenerate, reactMessage, newChat, setActiveChat } = useChatStore();
	const chat = chats.find((c) => c.id === activeChatId) ?? null;
	const [input, setInput] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [chat?.messages.length, chat?.messages[chat.messages.length - 1]?.content]);
	const onSubmit = async (e) => {
		e?.preventDefault();
		if (!input.trim() || busy) return;
		let id = activeChatId;
		if (!id) {
			id = newChat();
			setActiveChat(id);
		}
		const msg = input;
		setInput("");
		setFiles([]);
		setBusy(true);
		try {
			await sendMessage(id, msg);
		} finally {
			setBusy(false);
		}
	};
	const empty = !chat || chat.messages.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		onDragOver: (e) => {
			e.preventDefault();
			setDragOver(true);
		},
		onDragLeave: () => setDragOver(false),
		onDrop: (e) => {
			e.preventDefault();
			setDragOver(false);
			setFiles([...files, ...Array.from(e.dataTransfer.files)]);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelSelector, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden text-xs text-muted-foreground sm:block",
					children: chat?.title ?? "New conversation"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
				className: "min-h-0 flex-1",
				ref: scrollRef,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl px-4 py-8",
					children: empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { onPick: (p) => setInput(p) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8",
						children: chat.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
							message: m,
							onDelete: () => deleteMessage(chat.id, m.id),
							onRegenerate: () => regenerate(chat.id, m.id),
							onReact: (v) => reactMessage(chat.id, m.id, v),
							streaming: busy && m.id === chat.messages[chat.messages.length - 1].id && m.role === "assistant"
						}, m.id))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 py-4",
					children: [
						files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 flex flex-wrap gap-2",
							children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-lg border bg-muted/30 px-2.5 py-1.5 text-xs",
								children: [
									f.type.startsWith("image/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "max-w-[160px] truncate",
										children: f.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setFiles(files.filter((_, j) => j !== i)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: cn("relative rounded-2xl border bg-card shadow-card transition", dragOver && "ring-2 ring-brand ring-offset-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: input,
								onChange: (e) => setInput(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										onSubmit();
									}
								},
								placeholder: "Message Nebula...",
								className: "min-h-[64px] resize-none border-0 bg-transparent px-4 pb-14 pt-3 text-sm shadow-none focus-visible:ring-0",
								rows: 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-2 bottom-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex cursor-pointer items-center rounded-lg p-2 text-muted-foreground transition hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											multiple: true,
											hidden: true,
											onChange: (e) => setFiles([...files, ...Array.from(e.target.files ?? [])])
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-lg p-2 text-muted-foreground transition hover:bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" })
									})]
								}), busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "icon",
									variant: "secondary",
									className: "h-8 w-8 rounded-full",
									onClick: () => setBusy(false),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-3.5 w-3.5" })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "icon",
									disabled: !input.trim(),
									className: "h-8 w-8 rounded-full bg-gradient-brand text-brand-foreground disabled:opacity-40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-[10px] text-muted-foreground",
							children: "Nebula can make mistakes. Verify important information."
						})
					]
				})
			})
		]
	});
}
function EmptyState({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					scale: .8,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				className: "mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-7 w-7 text-brand-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl tracking-tight",
				children: "How can I help you today?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Pick a prompt or start typing to begin."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2",
				children: SUGGESTED_PROMPTS.map((s, i) => {
					const Icon = ICONS[s.icon] ?? Sparkles;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: i * .05 },
						onClick: () => onPick(s.prompt),
						className: "group flex items-start gap-3 rounded-2xl border bg-card p-4 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted transition group-hover:bg-gradient-brand group-hover:text-brand-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 truncate text-xs text-muted-foreground",
								children: s.prompt
							})]
						})]
					}, i);
				})
			})
		]
	});
}
function MessageBubble({ message, onDelete, onRegenerate, onReact, streaming }) {
	const isUser = message.role === "user";
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [text, setText] = (0, import_react.useState)(message.content);
	const copy = () => {
		navigator.clipboard.writeText(message.content);
		toast.success("Copied");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .25 },
		className: cn("group flex gap-4", isUser && "flex-row-reverse"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold", isUser ? "bg-primary text-primary-foreground" : "bg-gradient-brand text-brand-foreground shadow-glow"),
			children: isUser ? "AM" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-w-0 flex-1", isUser && "flex flex-col items-end"),
			children: [isUser ? editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: text,
					onChange: (e) => setText(e.target.value),
					className: "rounded-2xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => {
							setText(message.content);
							setEditing(false);
						},
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => {
							message.content = text;
							setEditing(false);
							toast.success("Edited");
						},
						children: "Save"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-xl rounded-2xl bg-secondary px-4 py-2.5 text-sm",
				children: message.content
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, { content: message.content || " " }), streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-4 w-1.5 animate-blink bg-foreground align-middle" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-2 flex items-center gap-1 text-muted-foreground opacity-0 transition group-hover:opacity-100", isUser && "flex-row-reverse"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px]",
						children: (0, import_dayjs_min.default)(message.createdAt).format("HH:mm")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: "h-7 w-7 rounded-md",
						onClick: copy,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
					}),
					isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: "h-7 w-7 rounded-md",
						onClick: () => setEditing(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						className: "h-7 w-7 rounded-md",
						onClick: onDelete,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: "h-7 w-7 rounded-md",
							onClick: onRegenerate,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: cn("h-7 w-7 rounded-md", message.liked === true && "text-brand"),
							onClick: () => onReact(message.liked === true ? null : true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							className: cn("h-7 w-7 rounded-md", message.liked === false && "text-destructive"),
							onClick: () => onReact(message.liked === false ? null : false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsDown, { className: "h-3.5 w-3.5" })
						})
					] })
				]
			})]
		})]
	});
}
//#endregion
export { ChatPage as component };
