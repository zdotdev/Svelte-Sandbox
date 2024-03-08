<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import {page} from '$app/stores'
	import '../app.css';
	export let data;
</script>

<!-- To add header -->
<Header />
<svelte:head>
	<title>{$page.data.headTitle || 'Svelte Sandbox'}</title> <!-- to access head title by using child data -->
</svelte:head>
<h1 class="flex justify-center text-2xl p-4 mb-4 font-bold bg-green-200">{$page.data.notification}</h1> <!-- Accessing child layout notification data -->
<h1 class="flex justify-center text-2xl font-extrabold">Hi {data.username}</h1>
<slot />
<!-- to add footer -->
<Footer />
