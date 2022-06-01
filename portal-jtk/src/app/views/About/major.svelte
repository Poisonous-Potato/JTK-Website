<script lang="ts">
  import type { Major } from "../../../lib/types/Major/major.type";

  import stringToDate from "../../../lib/functions/utilities/date/stringToDate";
  import formatDate from "../../../lib/functions/utilities/date/formatDate";

  export let content: Major;
</script>

<div class="pt-10 pl-13 pr-13 pb-16 amber lighten-4">
  <a href="/prodi/{content.slug}" class="black-text">
    <h3 class="mb-1">{content.name}</h3>
    <p class="text-body-1 font-italic grey-text text-darken-4">
      Last updated {formatDate(stringToDate(content.updatedAt))}
    </p>
    <p class="text-body-1 font-italic">
      {content.description}
    </p>
  </a>
</div>

<style lang="scss">
  a {
    text-decoration: none;
  }
</style>
