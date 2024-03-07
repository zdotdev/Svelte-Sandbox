<script>
    export let data
</script>
<p>Server load function is a secured method of fetching data from the api. It is used to fetch data from the database or 
    any sensitive data to fetch.
</p>
<p>+server.js is used to populate data and to host a local api.</p>
{#each data.products as prods}
    <h1>{prods.title}</h1>
{/each}