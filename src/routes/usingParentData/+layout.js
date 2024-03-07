export const load = async (loadEvent) => {
    const { fetch, parent } = loadEvent // parent is used to fetch passed data from parent +layout.js
    const {username} = await parent()
    const response = await fetch('http://localhost:3000/products')
    const products = await response.json()
    return {products, username}
} 