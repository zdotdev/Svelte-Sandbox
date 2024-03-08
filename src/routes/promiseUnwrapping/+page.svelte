<script>
    export let data
</script>
<p>In Promise Unwrapping, it is a way of directly adding the .json() response to the object sent by the universal or
    server data function. The response.json() is directly added to the object returned.
</p>

<h1>{data.Most_Active_Stock.symbol} - {data.Most_Active_Stock.price}</h1>
<h1>{data.Top_Gaining_Stock.symbol} - {data.Top_Gaining_Stock.price}</h1>
<h1>{data.Top_Losing_Stock.symbol} - {data.Top_Losing_Stock.price}</h1>