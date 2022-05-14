<script lang="ts">
  import { MaterialApp, AppBar, Container } from "svelte-materialify/src";
</script>

<MaterialApp>
  <AppBar fixed height={116} class="white" style="width:100%">
    <Container>
      <div class="float-left">
        <div class="text-center text-subtitle-1 primary-text">JTK POLBAN</div>
        <div class="text-center font-weight-bold campus-name secondary-text">
          POLITEKNIK NEGERI BANDUNG
        </div>
      </div>
    </Container>
  </AppBar>
</MaterialApp>

<style lang="scss">
  .campus-name {
    font-size: 1.156rem;
  }
</style>
