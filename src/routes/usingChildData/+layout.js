export const load = async (loadEvent) => {
    const { fetch, parent } = loadEvent
    const {username} = await parent()
    const response = await fetch('http://localhost:3000/products')
    const products = await response.json()
    return {products, username}
}