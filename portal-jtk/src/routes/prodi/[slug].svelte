<script context="module" lang="ts">
  import findMajor from "./findMajor";

  export async function preload({ params }) {
    return { major: findMajor(params.slug)};
  }
</script>

<script lang="ts">
  import Major from "../../app/views/Major/index.svelte";

  import type { Major as MajorType } from "../../lib/types/Major/brief.type";

  export let major: MajorType;
</script>

<svelte:head>
	<title>{major.name}</title>
</svelte:head>

<Major content={major} />
