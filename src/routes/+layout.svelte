<script>
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import "../app.css";
  export let data
  const {username} = data
</script>

<!-- To add header -->
<Header />
<h1>Username: {username}</h1>
<slot />
<!-- to add footer -->
<Footer />