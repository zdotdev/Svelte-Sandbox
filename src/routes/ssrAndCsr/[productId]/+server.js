import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function GET(requestEvent) {
    const { params } = requestEvent;
    const { productId } = params;

    // the error must be handle using try catch error
    try {
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        if (!response.ok) {
            throw error(500, 'Uh oh, no products dound');
        }
        const products = await response.json();
        return json(products);
    } catch (error) {
        console.error(error);
        return json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

