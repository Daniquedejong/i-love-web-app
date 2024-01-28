<script>

</script>

<section>
<footer>
    <article>
        <img src="/instagram.svg" alt="icon-instagram" width="100" height="40">
        <h1>Daniiquedejong</h1>
    </article>
    <article>
        <img src="/social-facebook.svg" alt="icon-facebook" width="100" height="40">
        <h1>Danique de Jong</h1>
    </article>
    <article>
        <img src="/github-square.svg" alt="icon-github" width="100" height="40">
        <h1>Danique de Jong</h1>
    </article>
    <article>
        <img src="/linkedin.svg" alt="icon-linkedin" width="100" height="40">
        <h1>Danique de Jong</h1>
    </article>
    <article>
        <img src="/e-mail.svg" alt="icon-email" width="100" height="60">
        <h1>Daniquedejong20<br>@hotmail.com</h1>
    </article>
    <article>
    </article>
    <article>
        <h2>Volgende I love web</h2>
    </article>
    <article>
        <p>Stuur een bericht naar <span>info@hva.nl</span> om 
            de volgende i love web te worden!
        </p>
    </article>
</footer>
</section>

<style>
:root {
/*COLORS*/
   --beige: #e6e6de;
   --white: #f8f8f8;     
   --black: #000000;
   --font: #f4f4f4;
/*FONT*/
   --main-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   --h1-size: 4rem;
   --h2-size: 1.5rem;
   --p-size: 1rem;
   --article-font-size: 1.2rem;
}

section {
    min-height: 100vh;
    background-color: var(--white);
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 95%;
}

article {
    font-family: var(--main-font);
    color: var(--black);
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 1em;
    margin: 1em;
    text-transform: uppercase;
}

img {
    width: 30px;
}

span {
    text-decoration: underline;
}

/*---TABLET---*/
@media (min-width: 600px) {
article {
    font-size: var(--article-font-size);
}

img {
    width: 40px;
    margin-left: 4em;
}

br {
    display: none;
}
}

/*---MOBILE---*/
@media (min-width: 375px) {
h1 {
    margin-left: -4em;
}

h2 {
    font-size: var(--h2-size);
    position: absolute;
    margin-top: -1.5em;
}

p {
    font-size: var(--p-size);
    margin-top: -2.5em;
    margin-right: -10em;
}

img {
    margin-left: 2em;
}
}
</style>