<script lang="ts">
  import { MaterialApp, Container, Row, Col } from "svelte-materialify/src";

  import type { Major } from "../../../lib/types/Major/brief.type";

  import banner from "../../../assets/profile_banner.png";

  export let content: Major;
</script>

<MaterialApp>
  <Container>
    <div class="d-flex justify-center">
      <h2>{content.name}</h2>
    </div>
  </Container>
  <img id="banner" class="mb-7" src={banner} alt="Banner" />
  <Container>
    <div class="d-flex justify-center mb-12">
      <p class="text-center text-body-1">{content.description}</p>
    </div>
    <Row>
      <Col md={6}>
        <h2 class="text-center">Visi</h2>
        <p class="font-italic text-body-1">{@html content.vision}</p>
      </Col>
      <Col md={6}>
        <h2 class="text-center">Misi</h2>
        <p class="font-italic text-body-1">{@html content.mission}</p>
      </Col>
    </Row>
  </Container>
</MaterialApp>

<style lang="scss">
  #banner {
    width: 100%;
  }
</style>
