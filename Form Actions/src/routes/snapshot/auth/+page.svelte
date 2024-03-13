<script>
    import {page} from '$app/stores'
    import {enhance} from '$app/forms'
    export let form
    const redirect = $page.url.searchParams.get('redirect') || '/'
    
    let message = ''
    export const snapshot = {
        capture: () => {
            return { message }
        },
        restore: (data) => {
            message = data.message
        }
    }
</script>
<form method="post" action="?/login&redirect={redirect}" use:enhance>
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="Username" value="{form?.username || ''}">
    <input type="password" name="password" placeholder="Password">
    <textarea name="message" cols="30" rows="10" bind:value={message}></textarea>
    <button type="submit">Login</button>
    <button formaction="?/register&redirect={redirect}">Register</button>
    <a href="/">cancel</a>
</form>