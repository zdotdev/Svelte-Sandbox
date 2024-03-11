<script>
    export let data
</script>

<div>
    {#each data.news as news}
        <h1>{news.title}</h1>
    {/each}
</div>