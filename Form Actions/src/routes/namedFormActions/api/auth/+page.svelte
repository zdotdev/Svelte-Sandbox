<script>
    export let form
</script>

<form method="post" action="?/login"> <!-- to access the named actions, use '?/' in the beginning of the named action -->
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Login</button>
    <button formaction="?/register">Register</button> <!-- to access multiple actions, add 'formaction' and the value
    is the named actions -->
</form>