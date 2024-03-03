<script>
    const id = "212iiji212"

    function optionalParameterReload(event){
        event.preventDefault()
        window.location.reload()
        window.location.href = '/optionalParameters'
    }
</script>

<h1 class="text-red-900">Hello MFs</h1>
<div class="m-4 flex flex-wrap">
    <a href="/routingExample" class="underline m-4 bg-slate-200">routingExample and nestedRouting</a>
    <a href="/dynamicRouting/{id}" class="underline m-4 bg-slate-200">dinamicRouting and nested dynamic routing</a>
    <a href="/catchAllRouting/Any URL Params" class="underline m-4 bg-slate-200">Catch All Routes</a>
    <a href="/optionalParameters" class="underline m-4 bg-slate-200" on:click={optionalParameterReload}>Optional Parameter</a>
</div>