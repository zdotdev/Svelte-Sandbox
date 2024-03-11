<script>
    export let data
</script>
<h1>{data.time}</h1>

<p>Prerendering API will make the api static, it is usefull for news or blogs websites. If you build a website and you 
    prerender the api, the data of the api will be save inside the dependecies in prerendered folder in build, meaning 
    it will be static.
</p>

<p>API prerendering can be inherited when the api is called to the main +page.js with "export const prerender = true". 
    It  is not recommendable to dynamic pages the needs the datato be updated.
</p>
<p>To prerender API, add "export const prerender" to the main +page.js that fetches the data from the api before building.
    You can also prerender the api to the +server.js it self.
</p>