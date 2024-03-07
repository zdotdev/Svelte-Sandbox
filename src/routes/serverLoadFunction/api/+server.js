import { json } from "@sveltejs/kit"
export async function GET() {
    const uri = await fetch('http://localhost:3000/products')
    const data = await uri.json()

    return json(data, {status: 200})
}