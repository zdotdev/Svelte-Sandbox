export const load = async (loadEvent) => {
    const { fetch, params } = loadEvent
    const { productId } = params
    const response = await fetch(`http://localhost:3000/products/${productId}`)
    const product = await response.json()
    const notification = 'child dynamic +page.svelte'
    const headTitle = 'Child Sandbox'
    return {product, notification, headTitle}
}