import { t as cn } from "./utils-C_uf36nf.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-C393CswG.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className, iconOnly = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				className: "h-4 w-4 text-white",
				strokeWidth: 2.5
			})
		}), !iconOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg font-semibold tracking-tight",
			children: "Nebula"
		})]
	});
}
//#endregion
export { Logo as t };
