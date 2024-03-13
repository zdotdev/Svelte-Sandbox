// {fail} function is just like error handling of api data
import { fail } from "@sveltejs/kit";

export const actions = {
    login: async (loginEvent) => {
        const { request, cookies } = loginEvent
        const data = await request.formData()
        const username = await data.get('username')
        const password = await data.get('password')
        if (!username || !password) {
            return fail(400, {
                username, // adding user name in fail funtion is like preventDefault funtion to the username input
                message: 'Missing username or password'
            })
        }
        cookies.set('username', username, { path: '/' })
        return { message: 'Logged in'}
    },
    register: async (registerEvent) => {
        const { request, cookies } = registerEvent
        const data = await request.formData()
        const username = await data.get('username')
        const password = await data.get('password')
        if (!username || !password) {
            return fail(400, {
                username,
                message: 'Missing username or password'
            })
        }
        cookies.set('username', username, { path: '/' })
        return {message: 'Registered successfuly'}
    }
}