// i use universal data function here because im just fetching basic api
export const load = async (loadData) => {
    const { fetch, params, url, route } = loadData // url and route can also be used in fethcing params
    console.log({params, url, route: route.id});
    const {productID} = params // Must be destructured. It is the [productID] dynamic route
    const response = await fetch(`http://localhost:3000/products/${productID}`)
    const product = await response.json()
    return {product}
}