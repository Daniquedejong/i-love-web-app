<script>
export let data;

// Controleer of de code wordt uitgevoerd in een browseromgeving
if (typeof window !== 'undefined') {
    // Voeg een 'onscroll' eventlistener toe aan het 'window' object
    window.onscroll = function () {
        // Controleer of de vensterbreedte groter is dan of gelijk is aan 1096 pixels (68em)
        if (window.innerWidth >= 1096) {
            // Roep de scrollFunction aan als het vensterbreedte-criterium is voldaan
            scrollFunction();
        }
    };
}

// Functie om de lettergrootte aan te passen op basis van de scrollpositie
function scrollFunction() {
    // Controleer of de scrollpositie van het document meer dan 50 pixels vanaf de bovenkant is
    // OF als de scrollpositie van het document meer dan 50 pixels vanaf de bovenkant van het HTML-element is
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // Verander de lettergrootte van het element met het id "h1" naar 50 pixels
        document.getElementById("h1").style.fontSize = "50px";
    } else {
        // Als de voorwaarde niet is voldaan, verander de lettergrootte naar 150 pixels
        document.getElementById("h1").style.fontSize = "150px";
    }
}

</script>

<section>
    <main>
        <article>
            <h1 id="h1">I love web</h1>
            <p class="intro">Op de Frontend Design & Development opleiding leren 
                we van alles. We leren frontend code schrijven, web 
                design en nieuwe ontwikkelingen in het vakgebied. Dit 
                laatste puntje ga ik het over hebben. <br><br>

                Zo nu en dan krijgen we een We Love Web les op school. 
                In zo'n les komt er altijd een andere gastspreker die 
                iets te maken heeft met frontend code en alles wat er 
                omheen hangt. Er komen mensen langs die het over web 
                toegankelijkheid hebben, maar ook oud studenten van de 
                CMD opleiding. Zo is er voor ieder wat wils! <br><br>
                
                In dit blog hou ik elke We Love Web sessie bij en probeer
                 ik uit te leggen waar elke spreker het over heeft gehad. 
                 Enjoy!</p>
        </article>
        <!-- {#each data.intros as intros}
        <p>{intros.intro}</p> -->

        {#each data.blogs as post}
            <a href="/{post.slug}">
                <h2>{post.blogTitle}</h2>
                <p>{post.blogIntro}</p>
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
    text-transform: uppercase;
}

.intro {
    margin-top: 8em;
    width: 100%;
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

 /* TABLET */
 @media (min-width: 35em) {
.intro {
    width: 100%;
}
 }

 /* DESKTOP */
 @media (min-width: 68em) {
h1 {
    background-color: var(--beige);
    position: sticky;
    display: flex;
    top: 0rem;
    height: 100px;
    align-items: center;
    z-index: 1000;
    transition: 0.8s;
    font-size: 90px;
}

article {
    min-height: 80vh;
}

.intro {
    margin-top: 10em;
    width: 80%;
    margin-left: 10em;
}
 }

</style>