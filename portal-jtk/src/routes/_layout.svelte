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
    background-color: white;
    padding-top: 116px;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: calc(100vh - 589px);
  }
</style>
