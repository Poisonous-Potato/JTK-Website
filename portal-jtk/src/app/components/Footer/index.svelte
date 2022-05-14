<script lang="ts">
  import {
    MaterialApp,
    Footer,
    Container,
    Row,
    Col,
  } from "svelte-materialify/src";
  import Icon from "@iconify/svelte";

  import Divider from "../Divider/index.svelte";

  import type { Navigation } from "../../../lib/types/navigation.type";
  import type { SocialMedia } from "../../../lib/types/socmed.type";

  import * as links from "../../../lib/data/Navigation/footer.json";
  import * as socmed from "../../../lib/data/SocMed/socmed.json";

  const navigations: Array<Navigation> = (<any>links).navigations;
  const accounts: Array<SocialMedia> = (<any>socmed).accounts;
</script>

<MaterialApp>
  <Footer padless class="blue-grey darken-4">
    <Container fluid class="pa-0">
      <Row>
        <Col md={4} class="pt-16 pb-10">
          <div class="mb-10 text-subtitle-1 text-center white-text">
            Location
          </div>
          <Container class="d-flex pl-16 pr-16 pb-16" style="height: 100%">
            <Row class="align-self-center">
              <Col md={3}>
                <Icon icon="dashicons:location" width={104} color="white" />
              </Col>
              <Col md={9} class="d-flex align-center">
                <div class="text-body-1 white-text">
                  <p class="font-weight-bold">
                    Jl. Gegerkalong Hilir, Ds. Ciwaruga, Bandung 40559, Jawa
                    Barat
                  </p>
                  <p class="font-weight-medium">Telp. (022) 2013789</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={8} class="pt-16 pb-10 blue-grey darken-3">
          <div class="mb-10 text-subtitle-1 text-center white-text">Links</div>
          <Container class="pl-16 pr-16">
            <Row>
              {#each navigations as navigation}
                <Col md={3}>
                  <div class="mb-4 text-subtitle-2 white-text">
                    {navigation.name}
                  </div>
                  {#each navigation.links as link}
                    <p>
                      <a
                        href={link.url}
                        class="text-body-1 font-weight-medium orange-text text-lighten-1"
                      >
                        {link.name}
                      </a>
                    </p>
                  {/each}
                </Col>
              {/each}
            </Row>
            <Divider height="5px" class="mb-7 white" />
            <div class="d-flex justify-center">
              {#each accounts as account}
                <a href={account.url}>
                  <Icon
                    icon="dashicons:{account.icon}"
                    height={48}
                    color="white"
                    class="ml-7 mr-7"
                  />
                </a>
              {/each}
            </div>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={4} />
        <Col md={8} class="pt-7 pb-7">
          <div class="text-body-1 text-center white-text">
            © 2022 Jurusan Teknik Komputer dan Informatika Politeknik Negeri
            Bandung.
          </div>
        </Col>
      </Row>
    </Container>
  </Footer>
</MaterialApp>

<style lang="scss">
  @import "../../../lib/styles/typography/override.scss";
</style>
