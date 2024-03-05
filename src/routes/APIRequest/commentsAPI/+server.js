import { comments } from "$lib/comments.js"
import { json } from "@sveltejs/kit"

// Example of GET request
export function GET() { 
    return json(comments)
    /* You dont have to fetch the url to get all the data, you can directly add the it inside the function parameter */
}

// Example of POST request
export async function POST(requestEvent) { // requestEvent parameter is required parameter
    const { request } = requestEvent // Destructure variable in handling requestEvent
    const { text } = await request.json() // Destructuring text as a POST as json
    const newComment = {
        id: comments.length,
        text // adding the text variable as post schema
    }
    comments.push(newComment) // pushing the newComment
    return json(newComment, {status : 201})
}