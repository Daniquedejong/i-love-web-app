<script>
    export let data;
    console.log(data);
  </script>
   
  <svelte:head>
  <title>{data.blogPost.blogTitle}</title>
  </svelte:head>
   
  <main class="detailPage">
    <h1>{data.blogPost.blogTitle}</h1>
    {@html data.blogPost.blogInfo.html}
  </main>

