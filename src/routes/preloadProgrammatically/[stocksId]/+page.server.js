export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent
    const { stocksId } = params
    const response = await fetch(`http://localhost:3000/stocks/${stocksId}`)
    return {stock: await response.json()}
}