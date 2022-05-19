<script lang="ts">
  import { MaterialApp, Container } from "svelte-materialify/src";

  import Section from "./section.svelte";

  import sections from "../../../lib/data/examples/About/about";
</script>

<MaterialApp>
  <Container>
    <div class="d-flex justify-center">
      <h2>Jurusan Teknik Komputer dan Informatika</h2>
    </div>
  </Container>
  {#each sections as section}
    <Section content={section} />
  {/each}
</MaterialApp>
