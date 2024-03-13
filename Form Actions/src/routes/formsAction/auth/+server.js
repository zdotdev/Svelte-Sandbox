import { json } from "@sveltejs/kit"; // json() is use to return a response

export async function POST(postEvent) {
    const {request, cookies} = postEvent //+universal load data (+page.js) cant use cookies
    const data = await request.json();
    const { username, password } = data;
    if (!username || !password) {
        return json(
            { message: 'Missing username or password' },
            { status: 400 })
    }
    cookies.set('username', username, { path: '/' })
    return json({message: 'Logged in'})
}