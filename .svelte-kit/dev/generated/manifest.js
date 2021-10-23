const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\dashboard.svelte"),
	() => import("..\\..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\..\\src\\routes\\login.svelte"),
	() => import("..\\..\\..\\src\\routes\\play.svelte"),
	() => import("..\\..\\..\\src\\routes\\api\\posts\\create-post.svelte"),
	() => import("..\\..\\..\\src\\routes\\[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/songs.json.js
	[/^\/songs\.json$/],

	// src/routes/dashboard.svelte
	[/^\/dashboard\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/tailwind.css
	[/^\/tailwind\/?$/],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/play.svelte
	[/^\/play\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/api/registerEmail.json.js
	[/^\/api\/registerEmail\.json$/],

	// src/routes/api/posts/create-post.svelte
	[/^\/api\/posts\/create-post\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/[slug].svelte
	[/^\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ slug: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];