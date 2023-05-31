import adapter from 'svelte-adapter-github';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [svelte()],
	build: {
	  src: './docs', // relative to index.html
	  emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
	},
	adapter: adapter({
		name: 'adapter-package-name'
	}),
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
  })

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({
		name: 'adapter-package-name'
	}),
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

// export default config;
