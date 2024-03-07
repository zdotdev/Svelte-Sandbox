import { error, redirect } from '@sveltejs/kit'
export const load = async (loadData) => {
    const { fetch, params } = loadData
    const { productId } = params
    if (productId == 4) {
        throw error(404, {
            message: 'Uh oh... No product found:(',
        hint: 'Try different product'}) /* error handling in sveltekit must have status code and error message, 
        you can also try non object error */
    }
    if (productId == 5) {
        throw redirect(307, '/') // redirect is another error handling in sveltekit
    }
    const response = await fetch(`http://localhost:3000/products/${productId}`)
    const products = await response.json() 

    return {products}
} 