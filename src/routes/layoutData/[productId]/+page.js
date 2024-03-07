import { error } from '@sveltejs/kit'
export const load = async (loadEvent) => {
    const { fetch, params } = loadEvent
    const { productId } = params
    if (productId > 4) {
        throw error(404, 'Uh oh... no products found')
    }
    const response = await fetch(`http://localhost:3000/products/${productId}`)
    const product = await response.json()

    return {product}
}