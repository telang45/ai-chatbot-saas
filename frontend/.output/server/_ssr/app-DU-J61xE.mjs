import { a as __toESM } from "../_runtime.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ScrollArea } from "./scroll-area-D0AShDWm.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { A as MessageSquare, K as Command, T as PanelLeftClose, U as Ellipsis, _ as Search, b as Pin, g as Settings, i as User, j as LogOut, l as Trash2, m as Sparkles, ot as Archive, rt as Bell, tt as ChartColumn, w as PanelLeftOpen, y as Plus, z as Folder } from "../_libs/lucide-react.mjs";
import { a as CommandInput, c as CommandSeparator, i as CommandGroup, l as useChatStore, n as CommandDialog, o as CommandItem, r as CommandEmpty, s as CommandList } from "./chat-store-DshFgPAh.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { a as DropdownMenuTrigger, i as DropdownMenuSeparator, n as DropdownMenuContent, o as ThemeToggle, r as DropdownMenuItem, t as DropdownMenu } from "./theme-toggle-DWxnIhyB.mjs";
import { t as Logo } from "./logo-C393CswG.mjs";
import { f as Outlet, g as Link, l as useLocation, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_dayjs_min, t as require_relativeTime } from "../_libs/dayjs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-DU-J61xE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min());
var import_relativeTime = /* @__PURE__ */ __toESM(require_relativeTime());
import_dayjs_min.default.extend(import_relativeTime.default);
function AppSidebar({ collapsed, onToggle }) {
	const { chats, activeChatId, setActiveChat, newChat, deleteChat, togglePin, archiveChat, renameChat } = useChatStore();
	const [query, setQuery] = (0, import_react.useState)("");
	const location = useLocation();
	const navigate = useNavigate();
	const filtered = chats.filter((c) => !c.archived && c.title.toLowerCase().includes(query.toLowerCase()));
	const pinned = filtered.filter((c) => c.pinned);
	const recent = filtered.filter((c) => !c.pinned);
	const onNew = () => {
		const id = newChat();
		setActiveChat(id);
		navigate({ to: "/app/chat" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
		animate: { width: collapsed ? 68 : 280 },
		transition: {
			type: "spring",
			stiffness: 220,
			damping: 26
		},
		className: "relative flex h-screen shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/chat",
					className: "flex items-center gap-2 overflow-hidden px-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { iconOnly: collapsed })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 rounded-lg",
					onClick: onToggle,
					children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onNew,
					className: "w-full justify-start gap-2 rounded-xl bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New chat" })]
				})
			}),
			!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search chats",
						className: "h-9 rounded-xl pl-9"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
				className: "mt-3 flex-1 px-2",
				children: [
					!collapsed && pinned.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-1 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Pinned"
					}),
					pinned.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRow, {
						chat: c,
						active: activeChatId === c.id,
						collapsed,
						onClick: () => {
							setActiveChat(c.id);
							navigate({ to: "/app/chat" });
						},
						onPin: () => togglePin(c.id),
						onArchive: () => archiveChat(c.id),
						onDelete: () => deleteChat(c.id),
						onRename: renameChat
					}, c.id)),
					!collapsed && recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-1 pb-1 pt-4 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Recent"
					}),
					recent.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRow, {
						chat: c,
						active: activeChatId === c.id,
						collapsed,
						onClick: () => {
							setActiveChat(c.id);
							navigate({ to: "/app/chat" });
						},
						onPin: () => togglePin(c.id),
						onArchive: () => archiveChat(c.id),
						onDelete: () => deleteChat(c.id),
						onRename: renameChat
					}, c.id)),
					!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-0.5 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Folders"
						}), [
							"Work",
							"Research",
							"Personal"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "h-4 w-4" }),
								" ",
								f
							]
						}, f))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
						to: "/app/analytics",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4" }),
						label: "Analytics",
						active: location.pathname === "/app/analytics",
						collapsed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
						to: "/app/notifications",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						label: "Notifications",
						active: location.pathname === "/app/notifications",
						collapsed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
						to: "/app/settings",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" }),
						label: "Settings",
						active: location.pathname === "/app/settings",
						collapsed
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center gap-2 rounded-xl p-2 text-left transition hover:bg-sidebar-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-xs font-semibold text-brand-foreground",
							children: "AM"
						}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-medium",
								children: "Alex Morgan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs text-muted-foreground",
								children: "Pro plan"
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					className: "w-56",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/profile",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }), " Profile"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/app/settings",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "mr-2 h-4 w-4" }), " Settings"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/login",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), " Log out"]
							})
						})
					]
				})] })
			})
		]
	});
}
function NavItem({ to, icon, label, active, collapsed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
		children: [
			icon,
			" ",
			!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
		]
	});
}
function ChatRow({ chat, active, collapsed, onClick, onPin, onArchive, onDelete, onRename }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(chat.title);
	if (collapsed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: cn("mx-auto my-0.5 grid h-9 w-9 place-items-center rounded-lg transition", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("group flex items-center gap-1 rounded-lg px-1 transition", active && "bg-sidebar-accent text-sidebar-accent-foreground"),
		children: [editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			autoFocus: true,
			value: name,
			onChange: (e) => setName(e.target.value),
			onBlur: () => {
				onRename(chat.id, name || chat.title);
				setEditing(false);
			},
			onKeyDown: (e) => {
				if (e.key === "Enter") {
					onRename(chat.id, name || chat.title);
					setEditing(false);
				}
			},
			className: "w-full rounded-md bg-background px-2 py-1.5 text-sm outline-none ring-1 ring-ring"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick,
			className: "min-w-0 flex-1 truncate rounded-lg px-2 py-1.5 text-left text-sm transition hover:bg-sidebar-accent",
			children: chat.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "rounded-md p-1 opacity-0 transition hover:bg-background group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			align: "end",
			className: "w-44",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onClick: () => setEditing(true),
					children: "Rename"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: onPin,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "mr-2 h-4 w-4" }), chat.pinned ? "Unpin" : "Pin"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: onArchive,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "mr-2 h-4 w-4" }), " Archive"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: onDelete,
					className: "text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), " Delete"]
				})
			]
		})] })]
	});
}
function CommandPalette({ open, setOpen }) {
	const navigate = useNavigate();
	const { chats, setActiveChat, newChat } = useChatStore();
	(0, import_react.useEffect)(() => {
		const down = (e) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen(!open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open, setOpen]);
	const go = (to) => {
		setOpen(false);
		navigate({ to });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandDialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search chats, pages, actions..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No results." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandGroup, {
				heading: "Actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => {
							const id = newChat();
							setOpen(false);
							navigate({ to: "/app/chat" });
							setActiveChat(id);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), " New chat"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => go("/app/chat"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mr-2 h-4 w-4" }), " Go to chat"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => go("/app/analytics"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "mr-2 h-4 w-4" }), " Analytics"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => go("/app/notifications"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mr-2 h-4 w-4" }), " Notifications"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => go("/app/profile"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }), " Profile"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						onSelect: () => go("/app/settings"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "mr-2 h-4 w-4" }), " Settings"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
				heading: "Recent chats",
				children: chats.slice(0, 6).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
					onSelect: () => {
						setActiveChat(c.id);
						go("/app/chat");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }),
						" ",
						c.title
					]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
				heading: "Account",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
					onSelect: () => go("/login"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), " Log out"]
				})
			})
		] })]
	});
}
function AppLayout() {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [paletteOpen, setPaletteOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-full overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
				collapsed,
				onToggle: () => setCollapsed(!collapsed)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-14 shrink-0 items-center justify-between border-b bg-background/60 px-4 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setPaletteOpen(true),
						className: "flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { className: "h-3.5 w-3.5" }),
							" Search or run a command",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "ml-4 rounded border bg-background px-1.5 text-[10px]",
								children: "⌘K"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "icon",
							className: "rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/notifications",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" })
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-h-0 flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				open: paletteOpen,
				setOpen: setPaletteOpen
			})
		]
	});
}
//#endregion
export { AppLayout as component };
