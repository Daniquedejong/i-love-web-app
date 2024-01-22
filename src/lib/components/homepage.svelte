<script>
export let data 
</script>

<section>
    <main>
        <article>
            <h1>I love web</h1>
        </article>
        {#each data.blogs as post}
            <a href="/{post.slug}">
                <h2>{post.blogTitle}</h2>
                <p>{post.blogIntro}
                </p>
                <button>Lees meer</button>
            </a>
        {/each}
</main>
</section>

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
    padding-bottom: 2em;
}

main {
    display: grid;
    gap: 1em;
    grid-template-columns:repeat(auto-fit, minmax(20em, 1fr));
}

h1 {
    font-family: var(--main-font);
    color: var(--black);
    font-size: var(--h1-size);
    justify-content: center;
    display: flex;
}

a {
    padding: 1em;
    margin: 1em;
    background-color: var(--white);
    text-decoration: none;
    color: var(--black);
    font-family: var(--main-font);
    font-weight: 600;
    border-radius: 0.5em;
}

h2 {
    font-family: var(--main-font);
    color: var(--black);
    margin-bottom: 0.5em;
}

p {
    font-family: var(--main-font);
    color: var(--black);
}

article {
    padding: 1em;
    margin: 1em;
}

article:first-child {
    grid-column-start:1;
    grid-column-end:-1;
}

button {
    color: var(--black);
    font-weight: 500;
    font-family: var(--main-font);
    background-color: var(--beige);
    border-style: none;
    border-radius: 0.5em;
    box-shadow: 0px 0px 8px 1px rgb(235, 235, 235);
    padding: 0.5em;
    position: relative;
    margin-top: 3em;
    margin-bottom: 1em;
}

button:hover {
    color: var(--dark-beige);
}
</style>