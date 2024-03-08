// +page.js is a naming convention builtin in sveltekit. It passes the data from the .js file to its sibling +page.svelte
export const load = async (loadEvent) => {
	/* load is predefined function in sveltekit to load data in +page.svelte. 
loadEvent is a builtin parameters in load function to load data*/

	const { fetch } =
		loadEvent; /* this destructured fetch is a built in function in sveltekit. It is the native fetch
    but we must use the builtin sveltekit */
	const title = 'List of Products';
	const response = await fetch('http://localhost:3000/products'); // fetched data from db.json
	const products = await response.json();

	return {
		title,
		products // returned data from the response
	};
};
