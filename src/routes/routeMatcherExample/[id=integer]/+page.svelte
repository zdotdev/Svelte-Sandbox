<script>
    import {page} from '$app/stores'
    const {id} = $page.params 
</script>

<p>It is an explicit code block that accepts integer only as a dynamic parameter.</p>
<p>for example:</p>
<p>Current location: routeMatcherExample/{id}</p>
<a href="/routeMatcherExample/test" class="bg-red-200">This will throw an error</a>
