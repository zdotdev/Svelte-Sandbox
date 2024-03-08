<script>
	export let data;
</script>

<slot />
<div class="flex gap-4">
	{#each data.products as prods}
		<div class="bg-slate-300 flex flex-col gap-4 m-8 p-4">
			<h1 class="text-2xl font-bold">{prods.title}</h1>
			<h2>${prods.price}</h2>
			<p>{prods.description}</p>
		</div>
	{/each}
</div>
