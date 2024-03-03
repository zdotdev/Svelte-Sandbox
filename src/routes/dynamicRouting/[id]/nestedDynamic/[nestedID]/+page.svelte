<script>
    import {page} from '$app/stores'
    const {id, nestedID} = $page.params // You can use destructure in declaring the variable. the variable name b=must be the same as the foldenames of the dinamic folder []
</script>
<p>Nested Dynamic Routing Example. <br> pageId: {id}, nestedID: {nestedID} </p>
