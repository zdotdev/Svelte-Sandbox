<script>
	export let data;
	const product = data.product;
</script>

<div>
	<h1>{product.title} - ${product.price}</h1>
	<p>{product.description}</p>
</div>
