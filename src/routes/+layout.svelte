<script>
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import "../app.css";

</script>

<!-- To add header -->
<Header />
<slot />
<!-- to add footer -->
<Footer />