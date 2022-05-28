<script lang="ts">
  import { MaterialApp, Container, Row, Col } from "svelte-materialify/src";
  import { onMount } from "svelte";
  import axios from "axios";

  import Section from "./section.svelte";
  import Major from "./major.svelte";

  import sections from "../../../lib/data/examples/About/about";
  import majors from "../../../lib/data/examples/Major/brief";

  import banner from "../../../assets/profile_banner.png";

  let faculties = [];
  let error = null;

  axios.get('http://localhost:1337/api/faculties').then(response => {
  console.log(response);
});

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
  <Container>
    <div class="d-flex justify-center">
      <h2>Jurusan Teknik Komputer dan Informatika</h2>
    </div>
  </Container>
  <img id="banner" class="mb-16" src={banner} alt="Banner" />
  {#each sections as section}
    <Section content={section} />
  {/each}
  <Container class="mb-12">
    <div class="d-flex justify-center">
      <h2>Program Studi</h2>
    </div>
    <Container>
      <Row>
        {#each majors as major}
          <Col sm={12} md={6} class="d-flex align-stretch">
            <Major content={major} />
          </Col>
        {/each}
      </Row>
    </Container>
  </Container>
</MaterialApp>

<style lang="scss">
  #banner {
    width: 100%;
  }
</style>
