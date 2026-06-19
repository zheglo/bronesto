import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-vercel';
import UnoCSS from '@unocss/svelte-scoped/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		UnoCSS({
			// ... preprocessor options
		}),
	],

	kit: {
		alias: {
      components: "./src/components",
      utils: "./src/utils",
      routes: "./src/routes",
      assets: "./static/assets",
      static: "./static",
    },
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
