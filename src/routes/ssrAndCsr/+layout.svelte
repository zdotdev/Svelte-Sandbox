<script>
	export let data;
</script>

<slot />
<div class="p-4 flex gap-4 outline outline-2 outline-black w-fit">
	{#each data.products as products}
		<div class="p-4 bg-slate-400">
			<h1>{products.title} - {products.price}</h1>
			<p>{products.desciption}</p>
		</div>
	{/each}
</div>
