import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/punkvideo/.DS_Store","assets/punkvideo/logo.svg","assets/punkvideo/probrone.mp4","assets/punkvideo/probrone.webm","favicon.png","fonts/Montserrat.woff2","fonts/Playfair Display.woff2"]),
	mimeTypes: {".svg":"image/svg+xml",".mp4":"video/mp4",".webm":"video/webm",".png":"image/png",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.IG4u_dzv.js","app":"_app/immutable/entry/app.DLYke-kg.js","imports":["_app/immutable/entry/start.IG4u_dzv.js","_app/immutable/chunks/entry.BsknZiKq.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DLYke-kg.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Baw2YTpQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Destiny",
				pattern: /^\/Destiny\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Heritage",
				pattern: /^\/Heritage\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Jubilee",
				pattern: /^\/Jubilee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/hero",
				pattern: /^\/hero\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/international/[[lang]]",
				pattern: /^\/international(?:\/([^/]+))?\/?$/,
				params: [{"name":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
