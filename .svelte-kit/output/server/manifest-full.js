export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Omolola_Odusanya_Resume.pdf","projects/e2e-messaging.png","projects/habit-tracker.png","projects/invoice.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.6hRcu6NI.js",app:"_app/immutable/entry/app.8KPGr-3B.js",imports:["_app/immutable/entry/start.6hRcu6NI.js","_app/immutable/chunks/bpKeuF8g.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/ClRC6CJK.js","_app/immutable/chunks/OA8UcISh.js","_app/immutable/chunks/DowlfT_H.js","_app/immutable/entry/app.8KPGr-3B.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/2eaG5y1i.js","_app/immutable/chunks/DowlfT_H.js","_app/immutable/chunks/Dn74RUrs.js","_app/immutable/chunks/CTtwc3UD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
