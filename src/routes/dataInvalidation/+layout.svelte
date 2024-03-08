<script>
    export let data
</script>

<div class="flex p-4 gap-4">
    <h1><strong>{data.mostActiveStock.symbol}</strong> - ${data.mostActiveStock.price}</h1>
    <h1><strong>{data.topGainingStock.symbol}</strong> - ${data.topGainingStock.price}</h1>
    <h1><strong>{data.topLosingStock.symbol}</strong> - ${data.topLosingStock.price}</h1>
</div>
<slot />