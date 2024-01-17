<script>
	export let data;
	
	import Header from "../lib/components/header.svelte";
	import Homepage from "../lib/components/homepage.svelte";
    import Footer from "../lib/components/footer.svelte";
</script>

<Header />
<Homepage {data} />
<Footer />