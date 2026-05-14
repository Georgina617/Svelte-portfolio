export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","resume-ava-morgan.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.C6jvcDB0.js",app:"_app/immutable/entry/app.8fINUVt5.js",imports:["_app/immutable/entry/start.C6jvcDB0.js","_app/immutable/chunks/DCFyUZFi.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/ClRC6CJK.js","_app/immutable/chunks/OA8UcISh.js","_app/immutable/chunks/DowlfT_H.js","_app/immutable/entry/app.8fINUVt5.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/2eaG5y1i.js","_app/immutable/chunks/DowlfT_H.js","_app/immutable/chunks/Dn74RUrs.js","_app/immutable/chunks/CTtwc3UD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/projects/signal-lab","/projects/orbit-docs","/projects/forge-ai"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
