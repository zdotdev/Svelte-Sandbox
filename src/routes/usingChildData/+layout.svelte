<script>
	export let data;
</script>

<h1>Welcome: {data.username}</h1>
<slot />
<div class="flex gap-4 m-4">
	{#each data.products as product}
		<div class="bg-slate-300 p-8">
			<h1>{product.title} - ${product.price}</h1>
			<p>{product.description}</p>
		</div>
	{/each}
</div>
