<script>
import Footer from "../../lib/components/footer.svelte";
import Header from "../../lib/components/header.svelte";

export let data;
console.log(data);
</script>
   
  <svelte:head>
  <title>{data.blogPost.blogTitle}</title>
  </svelte:head>
   
<Header />

<section>

  <main class="detailPage">
    <h1>{data.blogPost.blogTitle}</h1>
    <p>{@html data.blogPost.blogInfo.html}</p>
  </main>

</section>

<Footer />

<style>
:root {
/*COLORS*/
   --beige: #e6e6de;
   --dark-beige: #cbcbc2;
   --darker-beige: #bebeb3;
   --white: #f8f8f8;     
   --black: #000000;
   --font: #f4f4f4;
/*FONT*/
   --main-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   --h1-size: 4rem;
}

section {
  background-color: var(--beige);
  z-index: 1;
  position: relative;
}

main {
  padding-left: 2em;
  padding-right: 2em;
}

h1 {
  color: var(--black);
  font-family: var(--main-font);
}

.detailPage p {
  color: var(--black);
  font-family: var(--main-font);
}

 /* MOBILE */
 @media (max-width: 500px) {

.detailPage p {
  
}
 }
</style>