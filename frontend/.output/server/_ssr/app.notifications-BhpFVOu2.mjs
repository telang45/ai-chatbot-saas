import { a as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ScrollArea } from "./scroll-area-D0AShDWm.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { a as MOCK_NOTIFICATIONS } from "./data-BE_d0gQU.mjs";
import { $ as Check, P as Info, rt as Bell, s as TriangleAlert } from "../_libs/lucide-react.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.notifications-BhpFVOu2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var iconFor = (t) => t === "success" ? Check : t === "warning" ? TriangleAlert : Info;
function NotificationsPage() {
	const [items, setItems] = (0, import_react.useState)(MOCK_NOTIFICATIONS);
	const markAll = () => setItems(items.map((n) => ({
		...n,
		read: true
	})));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl tracking-tight",
					children: "Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Stay on top of what matters."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "rounded-full",
					onClick: markAll,
					children: "Mark all read"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "all",
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "all",
						children: "All"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "unread",
						children: "Unread"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "read",
						children: "Read"
					})
				] }), [
					"all",
					"unread",
					"read"
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: tab,
					className: "mt-4 space-y-2",
					children: [items.filter((n) => tab === "all" || (tab === "unread" ? !n.read : n.read)).map((n) => {
						const Icon = iconFor(n.type);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-card", !n.read && "border-brand/40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", n.type === "success" && "bg-emerald-500/15 text-emerald-500", n.type === "warning" && "bg-amber-500/15 text-amber-500", n.type === "info" && "bg-blue-500/15 text-blue-500"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-medium",
											children: n.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-muted-foreground",
											children: n.time
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-sm text-muted-foreground",
										children: n.description
									})]
								}),
								!n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" })
							]
						}, n.id);
					}), items.filter((n) => tab === "all" || (tab === "unread" ? !n.read : n.read)).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border bg-card p-10 text-center text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mx-auto mb-3 h-8 w-8 opacity-50" }), " Nothing here yet."]
					})]
				}, tab))]
			})]
		})
	});
}
//#endregion
export { NotificationsPage as component };
