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
	<title>{$page.data.headTitle} || Svelte Sandbox</title> <!-- to access head title by using child data -->
</svelte:head>
<h1>{$page.data.notification}</h1> <!-- Accessing child layout notification data -->
<h1>Hi {data.username}</h1>
<h1 class="flex justify-center">Notification banner</h1> <!-- Using child data -->
<slot />
<!-- to add footer -->
<Footer />
