<script lang="ts">
  import {
    MaterialApp,
    Container,
    Row,
    Col,
    Button,
  } from "svelte-materialify/src";
  import Section from "../../components/Section/index.svelte";

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
        <h2>Akreditasi Prodi {content.name}</h2>
      </div>
      <div class="d-flex flex-column">
        <p class="text-center text-body-1">
          Berdasarkan Badan Akreditasi Nasional Perguruan Tinggi pada Keputusan
          BAN-PT No. 2443/SK/BAN-PT/Akred/Dipl-IV/X/2016, menyatakan bahwa
          Program Studi Teknik Informatika, Pada Program Diploma Empat
          Politeknik Negeri Bandung, Bandung terakreditasi dengan peringkat:
        </p>
        <div
          id="accrediation-container"
          class="mb-7 pl-16 pr-16 pt-2 pb-2 align-self-center rounded-xl orange lighten-3 white-text"
        >
          <div id="grade" class="mb-0 text-center font-weight-bold">
            {content.accreditation}
          </div>
        </div>
        <div class="d-flex justify-center mb-4">
          <Button outlined class="blue darken-2 blue-text text-darken-2">
            Lihat Sertifikasi
          </Button>
        </div>
        <p class="text-center text-body-1">
          Sertifikat akreditasi ini berlaku5(lima) tahun sejak tanggal
          20-Oktober-2016 sampai dengan 20-Oktober-2021.
        </p>
      </div>
    </div>
  </Container>
</MaterialApp>

<style lang="scss">
  #banner {
    width: 100%;
  }

  #accrediation-container {
    width: fit-content;

    #grade {
      font-size: 200px;
    }
  }
</style>
