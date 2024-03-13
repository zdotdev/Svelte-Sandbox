<script>
	export let form;
</script>

<p>Check code for info.</p>
<form method="post" action="?/login">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="Username" value={form?.username ?? ''} />
	<!-- to add the username
    from cookies and if there is no data in cookies, it will return empty value -->
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Login</button>
	<button formaction="?/register">Register</button>
</form>
