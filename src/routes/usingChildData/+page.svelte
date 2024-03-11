<script>
	export let data;
	const Component = data.Component;
</script>

<p>
	Using child data is like passing +layout.js data to the parent +layout.svlete. in this way, you
	can load multiple different data in every layout by passing the data.
</p>
<strong
	>Accessing child data by adding data in +page.js or +page.server.js like in my example
	notification. To access it, import page in the main +layout.svelte, declare export let data, and
	add in the body $page.data.notification to access the notification data
</strong>
<a href="/usingChildData/1" class="bg-slate-200 m-4">Product 1</a>
{#each data.products as product}
	<Component {product} />
{/each}
