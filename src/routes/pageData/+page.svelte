<script>
    export let data; // data is a predefined export in sveltekit to export data from +page.js. must be a small letter
    const prods = data.products // products is the passed data from the +page.js
</script>
<h1>Landing Page</h1>

<p>Page data is the method of accessing Data from universal load function</p>
<p>{data.title}</p>

{#each prods as product}
<div>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <hr>
</div>    
{/each}