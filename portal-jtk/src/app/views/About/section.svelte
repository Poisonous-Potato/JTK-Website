<script lang="ts">
  import { MaterialApp, Container } from "svelte-materialify/src";
  import { onMount } from "svelte";
  import axios from "axios";

  import type { AboutSection } from "../../../lib/types/About/about.type";

  export let content: AboutSection;

  let faculties = [];
  let error = null;

  onMount(async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/faculties");
      faculties = res.data;
    } catch (e) {
      error = e;
    }
  });
</script>

<MaterialApp>
  <Container class="mb-12">
    <div class="d-flex justify-center">
      <h2>{content.title}</h2>
    </div>
    <p class="text-body-1">{@html content.description}</p>
  </Container>
</MaterialApp>
