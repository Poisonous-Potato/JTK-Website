<script lang="ts">
  import {
    MaterialApp,
    Container,
    Row,
    Col,
    Button,
  } from "svelte-materialify/src";
  import Section from "../../components/Section/index.svelte";
  import Accreditation from "./accreditation.svelte";

  import type { Major } from "../../../lib/types/Major/major.type";

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
      <p class="text-center font-italic text-body-1">{content.description}</p>
    </div>
    {#each content.sections as section}
      <Section content={section} />
    {/each}
    <div class="mb-12">
      <div class="d-flex justify-center">
        <h2>Akreditasi</h2>
      </div>
      <Row>
        {#each content.accreditation as accreditation}
          <Col md={6}>
            <Accreditation content={accreditation} />
          </Col>
        {/each}
      </Row>
    </div>
  </Container>
</MaterialApp>

<style lang="scss">
  #banner {
    width: 100%;
  }
</style>
