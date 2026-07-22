import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as AuthLayout } from "./auth-layout-BINwh-Pv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-B-I7SBn-.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
	title: "Forgot password?",
	subtitle: "We'll send you a reset link.",
	footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/login",
		className: "font-medium hover:underline",
		children: "Back to login"
	}),
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: (e) => {
			e.preventDefault();
			toast.success("Reset link sent.");
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "email",
				required: true
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "w-full rounded-full",
			children: "Send reset link"
		})]
	})
});
//#endregion
export { SplitComponent as component };
