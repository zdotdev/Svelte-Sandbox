<script>
	export let data;
	const postcode = data.postcodes;
</script>

<p>Fetch function is a builtin function in Sveltekit used to fetch data from the api</p>
{#each postcode as ps}
	<h1>Postcode Number: {ps.Postcode}</h1>
	<p>{ps.description}</p>
{/each}
