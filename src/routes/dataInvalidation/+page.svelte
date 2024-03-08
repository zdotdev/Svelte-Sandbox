<script>
    import { invalidate } from '$app/navigation';
    // import { invalidateAll } from '$app/navigation';
    export let data;
    $: stocks = data.stocks // in using validate, to update the value of the dom when button is clicked, you must use $ reactive

     function refresh() {
        invalidate('stocks:active');
    }

    // heres how to update the dom of the layout load data when the .json is modified by using the invalidateAll
    // function refresh() {
    //     invalidateAll()
    // }

</script>

<div class="bg-red-200 flex gap-4 w-fit p-4 m-4 rounded-lg">
    {#each stocks as s}
        <h1>{s.symbol} - ${s.price}</h1>
    {/each}
</div>
<button on:click={refresh} class="m-4 bg-slate-200 p-2">Refresh</button>
