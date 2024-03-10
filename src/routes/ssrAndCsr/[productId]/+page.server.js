import { error } from '@sveltejs/kit'
export const load = async (loadEvent) => {
    const { fetch, params } = loadEvent
    const { productId } = params
    if (productId > 10) {
        throw error(404, { message: 'Uh oh, no products found', hint: 'Try looking for different products.'})
    }
    const response = await fetch(`/ssrAndCsr/${productId}`)
    return {product: await response.json()}
}