export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","Omolola_Odusanya_Resume.pdf","projects/e2e-messaging.png","projects/habit-tracker.png","projects/invoice.png"]),
	mimeTypes: {".svg":"image/svg+xml",".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DP6Fniun.js",app:"_app/immutable/entry/app.C0EgIdjz.js",imports:["_app/immutable/entry/start.DP6Fniun.js","_app/immutable/chunks/DwQx9nSB.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/ClRC6CJK.js","_app/immutable/chunks/OA8UcISh.js","_app/immutable/chunks/DowlfT_H.js","_app/immutable/entry/app.C0EgIdjz.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/2eaG5y1i.js","_app/immutable/chunks/DowlfT_H.js","_app/immutable/chunks/Dn74RUrs.js","_app/immutable/chunks/CTtwc3UD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/projects/Invoice","/projects/E2E Messaging App","/projects/Habit Tracker"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
