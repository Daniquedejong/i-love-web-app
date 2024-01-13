<script>

</script>

<section>
<footer>
    <article>
        <h1>Instagram</h1>
    </article>
    <article>
        <h1>Facebook</h1>
    </article>
    <article>
        <h1>Github</h1>
    </article>
    <article>
        <h1>LinkedIn</h1>
    </article>
    <article>
        <h1>E-mail</h1>
    </article>
    <article>
    </article>
    <article>
    </article>
    <article>
        <h1>Volgende I love web</h1>
        <!-- <p>Bericht hier en hier</p> -->
    </article>
</footer>
</section>

<style>
:root {
/*COLORS*/
   --lightlight-pink: #fee4fe;
   --light-pink: #ffcaed;     
   --mid-pink: #f1a7d8;
   --mid-dark-pink: rgb(255, 117, 207);
   --dark-pink: #dc1a9b;
/*FONT*/
   --main-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   --h1-size: 4rem;
   --article-font-size: 1.2rem;
}

section {
    min-height: 100vh;
    background-color: var(--light-pink);
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 95%;
}

article {
    font-family: var(--main-font);
    background-color: var(--mid-pink);
    color: var(--dark-pink);
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding: 1em;
    margin: 1em;
}

@media (min-width: 528px) {
article {
    font-size: var(--article-font-size);
}
}
</style>