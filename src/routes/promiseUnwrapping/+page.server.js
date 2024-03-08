export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    const mostActiveStock = await fetch('http://localhost:3000/most-active-stock')
    const topLosingStock = await fetch('http://localhost:3000/top-losing-stock')
    const topGainingStock = await fetch('http://localhost:3000/top-gaining-stock')
    return {
        Most_Active_Stock: await mostActiveStock.json(), // Await  is required in this fetching method
        Top_Gaining_Stock: await topGainingStock.json(),
        Top_Losing_Stock: await topLosingStock.json()
    }
}