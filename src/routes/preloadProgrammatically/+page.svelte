<script>
    import {goto, preloadData, preloadCode} from '$app/navigation'
</script>

<p>Programmatically coded preload data and preload code has the same use as the element data value. It must be asynchronous function</p>
<button on:focus={ async () => { await preloadData('/preloadProgrammatically/69fd') } } on:mousedown={ async () => { await preloadData('/preloadProgrammatically/69fd') } } on:click={() => {goto('/preloadProgrammatically/69fd')}} class="m-4 bg-slate-200">Preload data on tap</button>
<button on:focus={ async () => { await preloadCode('/preloadProgrammatically/69fd') } } on:mousedown={ async () => { await preloadCode('/preloadProgrammatically/69fd') } } on:click={() => {goto('/preloadProgrammatically/69fd')}} class="m-4 bg-slate-200">Preload code on tap</button>