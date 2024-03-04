<script>
    import {goto} from '$app/navigation'
    const id = "212iiji212"
</script>

<h1 class="text-red-900">Hello MFs</h1>
<div class="m-4 flex flex-wrap">
    <button on:click={() => {goto('/routingExample')}} class="underline m-4 bg-slate-200">routingExample and nestedRouting</button>
    <button on:click={() => {goto(`/dynamicRouting/${id}`)}} class="underline m-4 bg-slate-200">dinamicRouting and nested dynamic routing</button>
    <button on:click={() => {goto('/catchAllRouting/Any URL Params')}} class="underline m-4 bg-slate-200">Catch All Routes</button>
    <button class="underline m-4 bg-slate-200" on:click={() => {goto('/optionalParameters')}}>Optional Parameter</button>
</div>