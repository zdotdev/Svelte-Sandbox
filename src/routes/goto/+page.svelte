<script>
	import { goto } from '$app/navigation'; // goto change the content of the dom when specific condition/s is or are met.

	let count = 3;
	function redirect() {
		setInterval(() => {
			count--;
			if(count == 0){
				goto('/')
			}
		}, 1000);
	}
</script>

<p>
	goto is a redirecting function in sveltekit. It will redirect the page when specific condition is
	met like in placing an order
</p>
<p>Example:</p>
<p>Timer: {count}</p>
<button on:click={redirect} class="bg-pink-200 p-4"
	>Click this and it will redirect you to the main page after 3 seconds</button
>
