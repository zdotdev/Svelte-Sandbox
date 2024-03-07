<script>
    export let data
</script>

{#each data.products as prods}
    <h1>{prods.title}</h1>
{/each}