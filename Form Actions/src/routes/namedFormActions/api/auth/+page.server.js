export const actions = {
    login: async (loginEvent) => { // You can specify the name of actions
        const { request, cookies } = loginEvent
        const data = await request.formData()
        const username = await data.get('username')
        const password = await data.get('password')
        // error handling
        if (!username || !password) {
            return {message: 'Missing username or password'}
        }
        cookies.set('username', username, { path: '/' })
        return {message: 'logged in'}
    },
    register: async (registerEvent) => {
        const { request, cookies } = registerEvent
        const data = await request.formData()
        const username = await data.get('username')
        const password = await data.get('password')
        if (!username || !password) {
            return {
                message: 'Missing username or password'
            }
        }
        cookies.set('username', username, { path: '/' })
        return {message: 'Registered successfuly'}
    }
}