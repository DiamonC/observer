const manifest = {
	appDir: "_app",
	assets: new Set(["discord.ico","favicon.png","favicon.webp","icon/192-m.webp","icon/192.webp","icon/256.webp","icon/384.webp","icon/512-m.webp","icon/512.webp","manifest.json","service-worker.js"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".webp":"image/webp",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-4c2f6aff.js","imports":["_app/immutable/start-4c2f6aff.js","_app/immutable/chunks/index-cca7115e.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-744149f5.js'),
			() => import('./chunks/1-dc5e235b.js'),
			() => import('./chunks/2-f00466ad.js'),
			() => import('./chunks/3-47ed764a.js'),
			() => import('./chunks/4-e379d34f.js'),
			() => import('./chunks/5-353da498.js'),
			() => import('./chunks/6-2e231272.js'),
			() => import('./chunks/7-ed6062fe.js'),
			() => import('./chunks/8-5ca30616.js'),
			() => import('./chunks/9-caebe8a5.js')
		],
		routes: [
			{
				id: "(login)",
				pattern: /^\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "(login)/billing",
				pattern: /^\/billing\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "(login)/newserver",
				pattern: /^\/newserver\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "(login)/settings",
				pattern: /^\/settings\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "(nologin)/signin",
				pattern: /^\/signin\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "(nologin)/signin/admin",
				pattern: /^\/signin\/admin\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
