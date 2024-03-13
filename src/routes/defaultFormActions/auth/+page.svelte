<script>
	export let form; // just like data, this is the returned object form the +page.server.js
</script>

<p>Check code for info.</p>

<form method="post">
	<!-- post method is use to submit a form -->
	<p>{form?.message || ''}</p>
	<!-- i use optional chaining (?) to handle empty object and it will not return undefined -->
	<input type="text" name="username" placeholder="Username" />
	<!-- This form relies on name value, unlike the 
    server type that relies on value -->
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Login</button>
</form>
