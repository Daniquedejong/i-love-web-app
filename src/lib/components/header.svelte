<script>

</script>

<section> 
    <nav>
        <ul>
          <li><a href="/" aria-haspopup="true">I love web</a>
            <ul class="dropdown" aria-label="submenu">
              <li><a href="src\routes\yolijn\+page.svelte">Yolijn</a></li>
              <li><a href="src\routes\shianta\+page.svelte">Shianta</a></li>
              <li><a href="src\routes\sanne\+page.svelte">Sanne</a></li>
              <li><a href="src\routes\symposium\+page.svelte">Symposium</a></li>
              <li><a href="src\routes\maikel\+page.svelte">Maikel</a></li>
              <li><a href="src\routes\julie\+page.svelte">Julie</a></li>
            </ul>
          </li>
          <li><a href="/info">Info</a></li>
        </ul>
      </nav>      
</section>

<style>
    :root {
/*COLORS*/
   --beige: #e6e6de;
   --dark-beige: #cbcbc2;
   --darker-beige: #cecec4;
   --white: #f8f8f8;     
   --black: #000000;
   --font: #f4f4f4;
/*FONT*/
   --main-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   --h1-size: 4rem;
}

section {
    z-index: 2;
    position: relative;
}

a {
  text-decoration: none;
}

nav {
  font-family: var(--main-font);
  justify-content: right;
  display: flex;
  background-color: var(--beige);
  padding-bottom: 2em;
  font-size: 1.2rem;
}

.dropdown {
  background-color: var(--dark-beige);
}

ul {
  background: var(--dark-beige);
  list-style: none;
  margin: 0;
  padding-left: 0;
  border-radius: 0.5em;
}

li {
  color: var(--black) ;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}
  
li a {
  color: var(--black);
}

li:hover,
li:focus-within {
  background: var(--darker-beige);
  border-radius: 0.5em;
  cursor: pointer;
}

li:focus-within a {
  outline: none;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}

ul li:hover > ul,
ul li:focus-within > ul,
ul li ul:hover,
ul li ul:focus {
   visibility: visible;
   opacity: 1;
   display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
}

@media (min-width: 528px) {
ul {
    margin-right: 0.5em;
}
}
</style>