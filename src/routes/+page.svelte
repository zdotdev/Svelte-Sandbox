<script>
    import Counter from '$lib/components/counter.svelte' /* in using components or scripts from the lib directory,
    you dont have to use './lib' to access it. In sveltekit, you can use a built in alias '$lib' to call 
    a component */
    const id = "212iiji212"
</script>
<!-- In sveltekit, +page.svelte is a default naming convention for pages -->
<h1 class="text-red-900 flex justify-center text-4xl p-4 font-bold">Sveltekit Sandbox</h1>
<div class="m-4 p-8 h-fit flex flex-wrap justify-center">
    <a href="/routingExample" class="m-4 p-4 bg-slate-200 rounded-lg">routingExample and nestedRouting</a>
    <a href="/dynamicRouting/{id}" class="m-4 p-4 bg-slate-200 rounded-lg">dinamicRouting and nested dynamic routing</a>
    <a href="/catchAllRouting/Any URL Params" class="m-4 p-4 bg-slate-200 rounded-lg">Catch All Routes</a>
    <a href="/optionalParameters" class="m-4 p-4 bg-slate-200 rounded-lg">Optional Parameter</a>
    <a href="/goto" class="m-4 p-4 bg-slate-200 rounded-lg">goto example</a>
    <a href="/routeMatcherExample/1" class="m-4 p-4 bg-slate-200 rounded-lg">Route Matcher</a>
    <a href="/routeLayoutExample" class="m-4 p-4 bg-slate-200 rounded-lg">Route Layout</a>
    <a href="/LayoutGroup" class="m-4 p-4 bg-slate-200 rounded-lg">Layout Group</a>
    <a href="/breakingOutLayout" class="m-4 p-4 bg-slate-200 rounded-lg">Breaking Out Layout</a>
    <a href="/APIRoutes" class="m-4 p-4 bg-slate-200 rounded-lg">GET/POST Method Request</a>
    <a href="/APIRequest/commentsAPI" class="m-4 p-4 bg-slate-200 rounded-lg">Dynamic API Request: GET by id, PUT/PATCH, DELETE</a>
    <a href="/pageData" class="m-4 p-4 bg-slate-200 rounded-lg">Page Data</a>
</div>
<div class="flex justify-center m-4"><Counter /></div> 