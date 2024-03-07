import { json } from "@sveltejs/kit"
export async function GET() {
    const uri = await fetch('http://localhost:3000/products')
    const products = await uri.json()
    return json(products, {status: 200})
}