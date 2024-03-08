/* server load function only run in server */
export const load = async (serverLoadData) => {
	const { fetch } = serverLoadData;
	const response = await fetch('/serverLoadFunction/api');
	const products = await response.json();

	return { products };
};
