<script lang="ts">
  import { MaterialApp, Container, Button } from "svelte-materialify/src";
  import Icon from "@iconify/svelte";

  import Divider from "../../components/Divider/index.svelte";

  import partners from "../../../lib/data/examples/Partner/partner";

  import banner from "../../../assets/landing-page/banner.jpg";
</script>

<MaterialApp>
  <div id="banner">
    <div class="banner-component">
      <img src={banner} alt="Banner" />
    </div>
    <div
      id="overlay"
      class="d-flex justify-center align-center banner-component"
    >
      <div class="amber-text text-lighten-4 text-center">
        <div class="mb-16">
          <h1 class="text-h1">Jurusan Teknik Komputer dan Informatika</h1>
          <h2 id="campus" class="text-h2">Politeknik Negeri Bandung</h2>
        </div>
        <a href="/about">
          <div class="amber-text text-lighten-4 text-body-1">
            <span id="link" class="text-body-1">Learn About JTK</span>
            <Icon icon="dashicons:arrow-right-alt" height={20} />
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="d-flex justify-center section">
    <Container class="pb-0">
      <div class="section-content">
        <h2 class="mb-16 text-h2 text-center grey-text text-darken-4">
          Partnership JTK 2022
        </h2>
        <div class="d-flex justify-center align-center mb-16">
          {#each partners as partner}
            <div class="mr-6 ml-6">
              <a href={partner.web} target="_blank">
                <img src={partner.logo} alt="{partner.name} Logo" width={150} />
              </a>
            </div>
          {/each}
        </div>
        <div class="d-flex justify-center">
          <Button outlined class="blue darken-2 blue-text text-darken-2">
            Join partnership with JTK
          </Button>
        </div>
      </div>
      <Divider height="5px" class="secondary-color" />
    </Container>
  </div>
</MaterialApp>

<style lang="scss">
  #banner {
    display: grid;
    grid-template-areas: "inner-div";
  }

  .banner-component {
    grid-area: inner-div;
  }

  #overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(12, 8, 51, 0.7);
  }

  #campus {
    font-size: 36px;
  }

  #link {
    font-size: 25px;
    text-decoration: underline;
  }

  .section {
    margin-top: 100px;

    .section-content {
      margin-bottom: 100px;
    }
  }
</style>
