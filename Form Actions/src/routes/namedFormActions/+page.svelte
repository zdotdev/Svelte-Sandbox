<script>
    export let form
</script>
<p>This si how to access named form actions as an api.</p>
<form method="post" action="/namedFormActions/api/auth?/login"> <!-- Add the path of the api form and the user will be 
redirected to that path -->
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Login</button>
    <button formaction="/namedFormActions/api/auth?/login">Register</button>
</form>