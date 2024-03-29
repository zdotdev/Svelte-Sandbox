export const load = async (loadEvent) => {
	const { fetch, parent } = loadEvent; // parent is used to fetch passed data from parent +layout.js
	const { username } = await parent(); // Use the parent data by fetching and destructuring it
	const response = await fetch('http://localhost:3000/products');
	const products = await response.json();
	return { products, username };
};
