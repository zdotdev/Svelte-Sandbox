import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments.js";

export function GET(requestEvent) {
    const { params } = requestEvent
    const { dynamicAPIRoute } = params
    const comment = comments.find((comment) => comment.id === parseInt(dynamicAPIRoute))
    return json(comment, {status : 200})
}