import { json } from '@sveltejs/kit'
export async function GET(requestEvent) {
    const { fetch } = requestEvent
    const response = await fetch('http://localhost:3000/stocks')
    const stocks = await response.json()
    return json(stocks)
}