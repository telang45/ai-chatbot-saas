import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-BU-BYC3s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children, defaultTheme = "system" }) {
	const [theme, setThemeState] = (0, import_react.useState)(defaultTheme);
	const [resolvedTheme, setResolved] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
		if (stored) setThemeState(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const root = window.document.documentElement;
		const apply = () => {
			const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
			root.classList.toggle("dark", isDark);
			setResolved(isDark ? "dark" : "light");
		};
		apply();
		if (theme === "system") {
			const mq = window.matchMedia("(prefers-color-scheme: dark)");
			mq.addEventListener("change", apply);
			return () => mq.removeEventListener("change", apply);
		}
	}, [theme]);
	const setTheme = (t) => {
		localStorage.setItem("theme", t);
		setThemeState(t);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			setTheme,
			resolvedTheme
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
//#endregion
export { useTheme as n, ThemeProvider as t };
