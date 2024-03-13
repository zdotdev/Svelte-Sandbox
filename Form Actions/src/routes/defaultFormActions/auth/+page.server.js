export const actions = { // actions is default variable in svelte for handling form actions
    default: async (defaultEvent) => {
        const { request, cookies } = defaultEvent
        const data = await request.formData() // form data is used in actions to fetch the data from the forms
        const username = await data.get('username')
        const password = await data.get('password')
        if (!username || !password) {
            return { // unlike the +server, you don't have to return json(). All you need is just an object to handle error
                message: 'Missng username or password'
            }
        }
        cookies.set('username', username, { path: '/' })
        return {message: 'Logged in'}
    }
} 