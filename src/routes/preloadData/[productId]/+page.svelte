<script>
    export let data
</script>

<h1 class="text-xl font-bold">Product:</h1>
<div>
    <h1>{data.product.title} - ${data.product.price}</h1>
    <p>{data.product.description}</p>
</div>