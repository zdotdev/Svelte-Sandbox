<script>
    export let data
    const Component = data.Component
</script>

<p>A server load function cant accept components unlike universal load function, it can accept svelte components and can accept server data</p>
<p>The process is the component is imported to +page.js and the data from +page.server.js si passed to the +page.js. All the data from +page.server.js <br>
is secured and all the data kept in +page.js will be passed to the sibling +page.svelte file.</p>
<p>Only use +page.server.js when secured data is involve like passwords or any personal information, use +page.js when displaying basic data from the API.</p>

<strong>Use Universal load function (+page.js) when accessing a 3rd party API. Use Server load function (+page.server.js) when accessing 
    secured data like database of users. 
</strong>

<div>
    {#each data.products as prods} <!-- .product is the returned data from +page.svelte -->
        <div>
            <Component {prods}/>
        </div>
    {/each}
</div>