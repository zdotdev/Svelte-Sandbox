export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    const mostActiveStockresponse = await fetch('http://localhost:3000/most-active-stock')
    const topGainingStockresponse = await fetch('http://localhost:3000/top-gaining-stock')
    const topLosingStockresponse = await fetch('http://localhost:3000/top-losing-stock')
    return {
        mostActiveStock: await mostActiveStockresponse.json(),
        topGainingStock: await topGainingStockresponse.json(),
        topLosingStock: await topLosingStockresponse.json()
    }
}