<script>
	let username = '';
	let password = '';
	let message = '';

	const handleSubmit = async () => {
		message = '';
		const response = await fetch('/formsAction/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username,
				password
			})
		});
		const data = await response.json();
		message = data.message;
	};
</script>

<p>Check code for info.</p>
<form on:submit|preventDefault={handleSubmit}>
	<p>{message}</p>
	<input type="text" name="username" placeholder="Username" bind:value={username} />
	<input type="password" name="password" placeholder="Password" bind:value={password} />
	<button type="submit">Login</button>
</form>
