<script lang="ts">
  import { MaterialApp, AppBar, Container, Row } from "svelte-materialify/src";
  import Divider from "../Divider/index.svelte";
</script>

<MaterialApp>
  <AppBar fixed flat height={116} class="white" style="width:100%">
    <Container fluid class="pa-0">
      <Row>
        <Container>
          <div class="float-left">
            <div class="text-center text-subtitle-1 primary-text">
              JTK POLBAN
            </div>
            <div
              class="text-center font-weight-bold campus-name secondary-text"
            >
              POLITEKNIK NEGERI BANDUNG
            </div>
          </div>
        </Container>
      </Row>
      <Row>
        <Divider height="11px" class="primary-color" />
      </Row>
    </Container>
  </AppBar>
</MaterialApp>

<style lang="scss">
  .campus-name {
    font-size: 1.156rem;
  }
</style>
