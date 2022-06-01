<script lang="ts">
  import { Button } from "svelte-materialify/src";

  import type { Accreditation } from "../../../lib/types/Major/accreditation.type";

  export let content: Accreditation;
</script>

<div class="d-flex flex-column">
  <h3 class="text-center">{content.level}</h3>
  <div
    id="accrediation-container"
    class="mb-7 pl-16 pr-16 pt-2 pb-2 align-self-center rounded-xl orange lighten-3 white-text"
  >
    <div id="grade" class="mb-0 text-center font-weight-bold">
      {content.grade}
    </div>
  </div>
  <div class="d-flex justify-center mb-4">
    <Button outlined class="blue darken-2 blue-text text-darken-2">
      <a href={content.certificate_url}>Lihat Sertifikasi</a>
    </Button>
  </div>
</div>

<style lang="scss">
  #accrediation-container {
    width: fit-content;

    #grade {
      font-size: 200px;
    }
  }

  a {
    text-decoration: none;
  }
</style>
