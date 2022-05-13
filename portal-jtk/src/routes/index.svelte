<script>
  import { MaterialApp } from "svelte-materialify/src";
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<MaterialApp>
  <div class="typography">
    <h1 class="text-h1">Heading 1</h1>
    <h2 class="text-h2">Heading 2</h2>
    <h3 class="text-h3">Heading 3</h3>
    <p class="text-subtitle-1">Subtitle 1</p>
    <p class="text-subtitle-2">Subtitle 2</p>
    <p class="text-body-1">Body 1</p>
    <p class="text-button">Button</p>
  </div>
</MaterialApp>

<style>
  .typography {
    text-align: center;
    margin: 0 auto;
  }

  p {
    margin: 1em auto;
  }
</style>
