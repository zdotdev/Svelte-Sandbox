<script>
    import { page } from '$app/stores';

    const location = $page.params.Example;

    const locArr = location.split('/');

    function handleClick(event) {
        event.preventDefault();

        window.location.href = `/catchAllRouting/${location}/content`;
    }

</script>

<p>Catch all routing will take all the URL parameter after the main (/catchAllRouting) location of the catch all [...catchAll]</p>
<p>example: /catchAllRouting/start from here, the content will be the same/ and here/ and here/ and so on</p>
<p class="m-4 bg-orange-200 w-fit">Location: catchAllRouting/{location}</p>

<h1>Here's how to use the catch all routing:</h1>

{#if locArr.length === 1}
    <p>The current location is {location}</p>
    <a href="/catchAllRouting/{location}/content" on:click={handleClick} class="bg-green-200">Try nested catch all</a>
{:else if locArr.length === 2}
    <p>The current location is nested {location}</p>
{/if}
