import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			crawl: true, // this is the default. If false, youu have to manually add the directories in entry
			entries: ['/'] /* if crawl is true, starting from the main route "/", all the +page.js or +page.server.js 
			with "export const prerender = true" will be prerendered */
		}
	}
};

export default config;
