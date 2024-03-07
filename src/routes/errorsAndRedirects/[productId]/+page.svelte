<script>
    export let data
    const product = data.products
</script>

<ul>
    <li>{product.title} - ${product.price}</li>
    <p>{product.description}</p>
</ul>