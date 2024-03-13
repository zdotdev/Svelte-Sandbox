<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let form;
	const redirectTo = $page.url.searchParams.get('redirect') || '/';
</script>

<form method="post" action="?/login&redirect={redirectTo}" use:enhance>
	<!-- use:enhance is used to ehnance the ui 
interation of users and froms by not refreshing the window when redirected and make it fast -->
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="Username" value={form?.username || ''} />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Login</button>
	<button formaction="?/register&redirect={redirectTo}">Register</button>
</form>
