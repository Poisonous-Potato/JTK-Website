<script lang="ts">
  import type { Major } from "../../../lib/types/Major/brief.type";

  export let content: Major;
</script>

<div class="pt-10 pl-13 pr-13 pb-16 amber lighten-4">
  <h3 class="mb-1">{content.name}</h3>
  <p class="text-body-1 font-italic grey-text text-darken-4">Last updated 1 May 2022</p>
  <p class="text-body-1 font-italic">
    {content.description}
  </p>
</div>
