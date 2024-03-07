export const load = async (serverLoadData) => {
    const { fetch } = serverLoadData
    const data = await fetch('/universalLoadVSServerLoad/api')
    const products = await data.json()
    return {products}
}