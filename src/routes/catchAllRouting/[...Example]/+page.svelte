<script>
	import { page } from '$app/stores';

	const location = $page.params.Example;

	const locArr = location.split('/');
</script>

<p>
	Catch all routing will take all the URL parameter after the main (/catchAllRouting) location of
	the catch all [...catchAll]
</p>
<p>
	example: /catchAllRouting/start from here, the content will be the same/ and here/ and here/ and
	so on
</p>
<p class="m-4 bg-orange-200 w-fit">Location: catchAllRouting/{location}</p>

<h1>Here's how to use the catch all routing:</h1>

{#if locArr.length === 1}
	<p>The current location is {location}</p>
	<button
		on:click={(event) => {
			event.preventDefault();
			window.location.reload();
			window.location.href = `/catchAllRouting/${location}/content`;
		}}
		class="bg-green-200">Try nested catch all</button
	>
{:else if locArr.length === 2}
	<p>The current location is nested {location}</p>
{/if}
