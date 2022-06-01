<script lang="ts">
  import { MaterialApp, Container } from "svelte-materialify/src";

  import type { Section } from "../../../lib/types/Section/section.type";

  export let content: Section;
</script>

<MaterialApp>
  <Container class="mb-12">
    <div class="d-flex justify-center">
      <h2>{content.title}</h2>
    </div>
    <p class="text-body-1">{@html content.description}</p>
  </Container>
</MaterialApp>
