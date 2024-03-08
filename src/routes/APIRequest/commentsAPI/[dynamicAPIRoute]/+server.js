import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

// this is GET method to find by id
export function GET(requestEvent) {
	const { params } = requestEvent;
	const { dynamicAPIRoute } = params;
	// find the comment by id and the value of the id is the dynamicAPIRoute parsed value
	const comment = comments.find((comment) => comment.id === parseInt(dynamicAPIRoute));
	return json(comment, { status: 200 });
}

// PUT Request is almost the same as PATCH request
export async function PUT(requestEvent) {
	// request for the request body just like in POST
	const { params, request } = requestEvent;
	const { dynamicAPIRoute } = params;
	// text is to get the value of the body
	const { text } = await request.json();
	// Get the id of the comment
	const comment = comments.find((comment) => comment.id === parseInt(dynamicAPIRoute));
	// the comment.text is the object name in the comments
	comment.text = text;
	return json(comment, { status: 201 });
}

export async function DELETE(requestEvent) {
	const { params } = requestEvent;
	const { dynamicAPIRoute } = params;
	const deleteComment = comments.find((comment) => comment.id === parseInt(dynamicAPIRoute));
	comments.splice(deleteComment, 1);
	return json(deleteComment, { status: 200 });
}
