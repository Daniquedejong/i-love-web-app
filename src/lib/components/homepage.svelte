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
        <!-- <a href="/yolijn">
            <h2>Yolijn van der Kolk</h2>
            <p>In deze we love web heeft Yolijn haar verhaal gedeeld
                over het werken voor Nl Design Systems. Ze legt uit wat de werkzaamheden 
                zijn en hoe ze hierbij ook met componenten werken. Deze componenten
                gebruiken ze vaker voor verschillende organisaties. Tot slot legt ze uit
                hoe zij met costum properties werken.
            </p>
            <button>Lees meer</button>
        </a>
        <a href="/shianta">
            <h2>Shianta</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <a href="/sanne">
            <h2>Sanne</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a> -->
        <!-- <article>
            <h1>“A user interface is like a joke. If you have to explain it, it’s not that good.”
                – Unknown</h1>
        </article> -->
        <!-- <a href="/symposium">
            <h2>Symposium</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a>
        <a href="/maikel">
            <h2>Maikel</h2>
            <p>In deze tech stack talk heeft Maikel ons geinformeerd
                over zijn werk bij Tribe. Hiernaast laat hij ons verschillende 
                websites zien van festivals. Hij heeft hieraan meegeholpen.
                Een grote klant was Mysteryland. Verder liet Maikel ons verschillen
                zien van meerdere frameworks.
            </p>
            <button>Lees meer</button>
        </a>
        <a href="/julie">
            <h2>Julie</h2>
            <p>Tijdens de les....</p>
            <button>Lees meer</button>
        </a> -->
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
    grid-template-columns:repeat(auto-fit, minmax(20em, 1fr));
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
    margin-bottom: 0.5em;
}

p {
    font-family: var(--main-font);
    color: var(--dark-pink);
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