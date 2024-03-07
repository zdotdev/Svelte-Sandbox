<script>
    export let data
    const postcode = data.postcodes
</script>

{#each postcode as ps }
    <h1>Postcode Number: {ps.Postcode}</h1>
    <p>{ps.description}</p>
{/each}