<script>

</script>

<section>
    <main>
        <article>
            <h1>I love web</h1>
        </article>
        <a href="src\routes\yolijn\+page.svelte">
            <h2>Yolijn van der Kolk</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <a href="src\routes\shianta\+page.svelte">
            <h2>Shianta</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <a href="src\routes\sanne\+page.svelte">
            <h2>Sanne</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <article>
            <h1>Web quote, html is amazing en css ook</h1>
        </article>
        <a href="src\routes\symposium\+page.svelte">
            <h2>Symposium</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <a href="src\routes\maikel\+page.svelte">
            <h2>Maikel</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <a href="src\routes\julie\+page.svelte">
            <h2>Julie</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
</main>
</section>

<style>
:root {
/*COLORS*/
   --lightlight-pink: #fee4fe;
   --light-pink: #ffcaed;     
   --mid-pink: #f1a7d8;
   --dark-pink: #dc1a9b;
/*FONT*/
   --main-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   --h1-size: 4rem;
}

section {
    background-color: var(--lightlight-pink);
    z-index: 1;
    position: relative;
}

main {
    display: grid;
    gap: 1em;
    grid-template-columns:repeat(auto-fit, minmax(16em, 1fr));
}

h1 {
    font-family: var(--main-font);
    color: var(--dark-pink);
    font-size: var(--h1-size);
    justify-content: center;
    display: flex;
}

a {
    padding: 1em;
    margin: 1em;
    background-color: var(--light-pink);
    text-decoration: none;
    color: var(--dark-pink);
    font-family: var(--main-font);
    font-weight: 600;
    border-radius: 0.5em;
}

h2 {
    font-family: var(--main-font);
    color: var(--dark-pink);
}

p {
    font-family: var(--main-font);
    color: var(--lightlight-pink);
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
    color: var(--dark-pink);
    font-weight: 500;
    font-family: var(--main-font);
    background-color: var(--mid-pink);
    border-style: none;
    border-radius: 0.5em;
    box-shadow: 0px 0px 8px 1px rgb(224, 177, 214);
    padding: 0.5em;
    position: relative;
    margin-top: 3em;
    margin-bottom: 1em;
}

button:hover {
    color: var(--lightlight-pink);
    background-color: var(--dark-pink);
}
</style>