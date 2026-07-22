globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-20T15:30:54.056Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/app.index-4Bzk0Fey.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-5pEfKjP77gwFxpFobH7pCQik/tc\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 155,
		"path": "../public/assets/app.index-4Bzk0Fey.js"
	},
	"/assets/app-YwUUR7RN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3533-s6p3XDFcpjpaA3H1QR9gmepvfU8\"",
		"mtime": "2026-07-20T16:35:19.682Z",
		"size": 13619,
		"path": "../public/assets/app-YwUUR7RN.js"
	},
	"/assets/app.notifications-Bo8AUHBl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b92-SrBtvAoQoJCPHuLpQAdw80SSH0I\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 2962,
		"path": "../public/assets/app.notifications-Bo8AUHBl.js"
	},
	"/assets/app.analytics-BGfbVffa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1077f-OcLVUyKoOZjE6dr5Qyr5zi+asn4\"",
		"mtime": "2026-07-20T16:35:19.682Z",
		"size": 67455,
		"path": "../public/assets/app.analytics-BGfbVffa.js"
	},
	"/assets/auth-layout-CxAp10_z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f2-kqcDhz7G9KLRs/+SBCN3ZaCPbBU\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 1778,
		"path": "../public/assets/auth-layout-CxAp10_z.js"
	},
	"/assets/bell-DYCv6X8y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-hbzK5B/mtQbrKZy8OPUdPnLxQzo\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 290,
		"path": "../public/assets/bell-DYCv6X8y.js"
	},
	"/assets/app.profile-CK4Vk63D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ebb-QjhPnBf+jNUtH8LqaqN8ykKm5No\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 20155,
		"path": "../public/assets/app.profile-CK4Vk63D.js"
	},
	"/assets/button-D6sNbkHe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76f-2ap7x3pE/WxUS8C8xhUIL7m9pxE\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 1903,
		"path": "../public/assets/button-D6sNbkHe.js"
	},
	"/assets/code-xml-CrmZNUEx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d0-HFf2KGBxtCVaCb7gf0oaxnIjrFA\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 208,
		"path": "../public/assets/code-xml-CrmZNUEx.js"
	},
	"/assets/app.settings-BTT2SSgC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6a7-lWXxUZIMhkudpFEVNtkx3MAEn0c\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 42663,
		"path": "../public/assets/app.settings-BTT2SSgC.js"
	},
	"/assets/chevron-down-VKMOXuMs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-nFcurgX0GyLR1ciEPJBqaLjkZ6w\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 128,
		"path": "../public/assets/chevron-down-VKMOXuMs.js"
	},
	"/assets/card-CDUTeOnD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"412-I/2+hj3/Ct+65Sble5l8LmrIch4\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 1042,
		"path": "../public/assets/card-CDUTeOnD.js"
	},
	"/assets/data-Dukqtusr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e67-FLcCtijjLbOWpJh0J7jYkQZFDJI\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 11879,
		"path": "../public/assets/data-Dukqtusr.js"
	},
	"/assets/CartesianChart-C8r2aPLh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"524f1-OOfsFnfLuQbr0RBGzQS5Z1FIap0\"",
		"mtime": "2026-07-20T16:35:19.682Z",
		"size": 337137,
		"path": "../public/assets/CartesianChart-C8r2aPLh.js"
	},
	"/assets/dayjs.min-twPzDOcQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"796a-INp5o9KCvJosDmFDCmpdzUtVByw\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 31082,
		"path": "../public/assets/dayjs.min-twPzDOcQ.js"
	},
	"/assets/createLucideIcon-DC7hrbkM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"782b-2HWm3U0J8ERIhHXqD3NZjni5Pd0\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 30763,
		"path": "../public/assets/createLucideIcon-DC7hrbkM.js"
	},
	"/assets/dist-BEMcoGZY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1440-/7gSsK/fi7GztEcP4C+6mMu9PeA\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 5184,
		"path": "../public/assets/dist-BEMcoGZY.js"
	},
	"/assets/dist-Bfpgou8l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75f-SjWZpYH/Z6Aw51tkkuXOjEjmvRg\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 1887,
		"path": "../public/assets/dist-Bfpgou8l.js"
	},
	"/assets/github-CPNbUGTy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"197-am6EpkDZeUMGkHZwxxuoGz0toEI\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 407,
		"path": "../public/assets/github-CPNbUGTy.js"
	},
	"/assets/dist-BvEj4-xa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"265-tWMcsfzs+CBYArSSM35Yforbn7M\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 613,
		"path": "../public/assets/dist-BvEj4-xa.js"
	},
	"/assets/dist-BL1TqjF7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bce7-jC6Cm62dShXHT8RsKfKb01pBiKM\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 48359,
		"path": "../public/assets/dist-BL1TqjF7.js"
	},
	"/assets/app.chat-DcwTL6Dc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3598-sM+PN3sGtvSkgZeoj9Koavm5b8Y\"",
		"mtime": "2026-07-20T16:35:19.682Z",
		"size": 800152,
		"path": "../public/assets/app.chat-DcwTL6Dc.js"
	},
	"/assets/forgot-password-Bxpmnf29.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"323-OoXZRLqvVqJ64SNzZ0qWWXv74ZQ\"",
		"mtime": "2026-07-20T16:35:19.686Z",
		"size": 803,
		"path": "../public/assets/forgot-password-Bxpmnf29.js"
	},
	"/assets/index-BuA30LfW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a7da-RoTJqxrEUIJzKx85LtWDDlDQa50\"",
		"mtime": "2026-07-20T16:35:19.679Z",
		"size": 370650,
		"path": "../public/assets/index-BuA30LfW.js"
	},
	"/assets/loader-circle-CJPYM7tj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-J7zHLni+BFlvDoGtCl0GGRk8Hoc\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 144,
		"path": "../public/assets/loader-circle-CJPYM7tj.js"
	},
	"/assets/logo-B4ms1IWc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"234-S0OkVOyRurY34l5Q/SS9D8AqHYE\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 564,
		"path": "../public/assets/logo-B4ms1IWc.js"
	},
	"/assets/message-square-CqADludS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-5qPXCOp56yI6RxyUICv6oKXFCW4\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 233,
		"path": "../public/assets/message-square-CqADludS.js"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-20T16:35:19.696Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/input-BhS945eL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"278-JbqjWunoh0xXbff1XmNYDbFeXAs\"",
		"mtime": "2026-07-20T16:35:19.696Z",
		"size": 632,
		"path": "../public/assets/input-BhS945eL.js"
	},
	"/assets/login-vnFyfwGy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bff-VDErs2WcE9UzDoBBXH5hxICAi1I\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 3071,
		"path": "../public/assets/login-vnFyfwGy.js"
	},
	"/assets/label-CFbRzcD-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da-cUNcNJINmW0+SYrVSGv64yEj8kI\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 730,
		"path": "../public/assets/label-CFbRzcD-.js"
	},
	"/assets/proxy-DHhZAwN4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dbb0-u81iTnYiCKQ0M8M0Up+9PU4Xp/Y\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 121776,
		"path": "../public/assets/proxy-DHhZAwN4.js"
	},
	"/assets/react-dom-CrK8yE57.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-TYAl7GnUPUCbV+AVNcbJobxY8L4\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 3546,
		"path": "../public/assets/react-dom-CrK8yE57.js"
	},
	"/assets/register-BugANe3H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e1-DHCReHSemjEBfxYh0UIPUDxuqvw\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 2273,
		"path": "../public/assets/register-BugANe3H.js"
	},
	"/assets/reset-password-D1bN5VBZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c0-vt3IosubVG/QCIVt4pIIi97eNwQ\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 960,
		"path": "../public/assets/reset-password-D1bN5VBZ.js"
	},
	"/assets/routes-DYwon-J_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10801-2jZOn/qBxwcRNDpGkvEoom+8ckg\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 67585,
		"path": "../public/assets/routes-DYwon-J_.js"
	},
	"/assets/scroll-area-B8FSLShF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"356c-woLeZEArEk/xOf6OB+h4I/YzzgE\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 13676,
		"path": "../public/assets/scroll-area-B8FSLShF.js"
	},
	"/assets/trash-2-Dmp37QsP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148-nOI7LkrupffSiGQV5Mncuon+peA\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 328,
		"path": "../public/assets/trash-2-Dmp37QsP.js"
	},
	"/assets/textarea-Dh0jr_3_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"212-auHvTGKdlicTcvOYSnbQ4/VrO34\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 530,
		"path": "../public/assets/textarea-Dh0jr_3_.js"
	},
	"/assets/styles-Cpmb78WN.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18c87-fqtuoOXZPCWLgYG1F2kPpP3ggaU\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 101511,
		"path": "../public/assets/styles-Cpmb78WN.css"
	},
	"/assets/tabs-BbSKKwRM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e0b-jolcz36B4E+Bvp2QvCR/ocXMwvI\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 3595,
		"path": "../public/assets/tabs-BbSKKwRM.js"
	},
	"/assets/zap-qHcalCUY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"106-M6ZuVFCwCYG6F4VQt01kKw6datc\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 262,
		"path": "../public/assets/zap-qHcalCUY.js"
	},
	"/assets/verify-otp-CDZs5f8X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bf4-D73GIXg95UkxH5+VO6g2BbIK6pg\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 11252,
		"path": "../public/assets/verify-otp-CDZs5f8X.js"
	},
	"/assets/theme-toggle-CMTPLX8j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5674-cdPw0HGfxx+cwF/Trk0GBR2p8B0\"",
		"mtime": "2026-07-20T16:35:19.697Z",
		"size": 22132,
		"path": "../public/assets/theme-toggle-CMTPLX8j.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_wMQw7p = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_wMQw7p
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
