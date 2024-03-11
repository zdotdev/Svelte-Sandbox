<script>
</script>
<p>To Prerender dynamic route, you can add "export const prerender = true" in +page.js in this folder just like 
        prerendering the main page. To prerendere the dynamic route [productId], add "export const prerender = true" 
        inside the +page.js.
</p>
<p>Prerendering dynamic routes can only be achieved if and only if, the api is running, you can't prerender local api.</p>
<p>The value can also be 'auto'. The prerender.auto option in SvelteKit's configuration controls whether automatic prerendering is enabled for dynamic routes. When set to true, SvelteKit automatically prerenders dynamic routes during the build process.</p>