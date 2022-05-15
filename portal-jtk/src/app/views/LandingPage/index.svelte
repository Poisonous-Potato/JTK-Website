<script lang="ts">
  import { MaterialApp, Container } from "svelte-materialify/src";
  import Icon from "@iconify/svelte";

  import banner from "../../../assets/landing-page/banner.jpg";
</script>

<MaterialApp>
  <div class="banner">
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
</MaterialApp>

<style lang="scss">
  .banner {
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
</style>
