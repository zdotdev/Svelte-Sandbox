export const load = async (loadEvent) => {
    const { fetch, params } = loadEvent
    const { productId } = params
    const response = await fetch(`http://localhost:3000/stocks/${productId}`)
    return {stock: await response.json()}
}