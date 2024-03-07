import { json } from "@sveltejs/kit"
export async function GET() {
    const url = await fetch('http://localhost:3000/postcode')
    const data = await url.json()
    const postcodes = data.map((postcode) => { /* map is used to populate data. Populate to get the only
    data that you want */
        return {
            Postcode: postcode.postcode,
            description: postcode.description
        }
    })
    return json(postcodes, {status: 200})
}