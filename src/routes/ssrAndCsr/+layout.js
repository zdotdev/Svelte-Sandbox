export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('http://localhost:3000/products');
	return { products: await response.json() };
};
