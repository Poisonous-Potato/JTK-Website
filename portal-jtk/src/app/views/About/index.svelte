<script lang="ts">
  import { MaterialApp, Container } from "svelte-materialify/src";

  import Section from "./section.svelte";

  import sections from "../../../lib/data/examples/About/about";

  import banner from "../../../assets/profile_banner.png";
</script>

<MaterialApp>
  <Container>
    <div class="d-flex justify-center">
      <h2>Jurusan Teknik Komputer dan Informatika</h2>
    </div>
  </Container>
  <img id="banner" class="mb-16" src={banner} alt="Banner" />
  {#each sections as section}
    <Section content={section} />
  {/each}
</MaterialApp>

<style lang="scss">
  #banner {
    width: 100%;
  }
</style>