<script lang="ts">
  import Navbar from "../app/components/Navbar/index.svelte";
  import Footer from "../app/components/Footer/index.svelte";
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    padding-top: 116px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
