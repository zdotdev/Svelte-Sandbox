/* load function is a universal load function. It can be trigger by client side navigation. but it can be trigger
by navigating inn the address bar. Meaning, client side navigation does not execute any code on the server */
export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('fetchFunction/api'); /* fetch function in sveltekit can directly use
    the location whithout defining its localhost. You dont have to add the http://localhost:5173 in fetch 
    because you are  fetching a route containing the server */
	const postcodes = await response.json();

	return {
		postcodes
	};
};
