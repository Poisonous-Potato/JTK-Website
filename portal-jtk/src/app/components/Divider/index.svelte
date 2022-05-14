<script lang="ts">
  export let height: string;

  let className = "";
  export { className as class };
</script>

<hr style:height class="{className} divider" />

<style lang="scss">
  .divider {
    border-width: 0px;
    width: 100%;
  }
</style>
