<script lang="ts">
  import {
    MaterialApp,
    AppBar,
    Container,
    Row,
    Menu,
    Button,
    ListItem,
  } from "svelte-materialify/src";
  import Divider from "../Divider/index.svelte";

  type Navigation = {
    name: string;
    links: Array<Link>;
    url?: string;
  };

  type Link = {
    name: string;
    url: string;
  };

  let navigations: Array<Navigation> = [
    {
      name: "Jurusan",
      links: [
        { name: "Jurusan Teknik Komputer dan Informatika", url: "/" },
        { name: "D4 - Teknik Informatika", url: "/" },
        { name: "D3 - Teknik Informatika", url: "/" },
      ],
    },
    {
      name: "Prestasi",
      links: [
        { name: "Akademik", url: "/" },
        { name: "Non-Akademik", url: "/" },
      ],
    },
    {
      name: "Kurikulum",
      links: [
        { name: "Kurikulum D4", url: "/" },
        { name: "Kurikulum D3", url: "/" },
      ],
    },
    {
      name: "Galeri",
      url: "/",
      links: [],
    },
    {
      name: "Staff",
      links: [
        { name: "Dosen", url: "/" },
        { name: "Tata Usaha", url: "/" },
      ],
    },
  ];
</script>

<MaterialApp>
  <AppBar fixed flat height={116} class="white" style="width:100%">
    <Container fluid class="pa-0">
      <Row>
        <Container class="d-flex justify-space-between">
          <a href="/">
            <div>
              <div class="text-center text-subtitle-1 primary-text">
                JTK POLBAN
              </div>
              <div
                class="text-center font-weight-bold campus-name secondary-text"
              >
                POLITEKNIK NEGERI BANDUNG
              </div>
            </div>
          </a>
          <div class="align-self-center">
            {#each navigations as navigation}
              {#if navigation.links.length > 0}
                <Menu>
                  <div slot="activator">
                    <Button text class="primary-text">
                      <div class="text-body-1 font-weight-bold">
                        {navigation.name}
                      </div>
                    </Button>
                  </div>
                  <Divider height="5px" class="secondary-color" />
                  {#each navigation.links as link}
                    <a href={link.url}>
                      <ListItem class="primary-color white-text">
                        <div class="text-body-1">
                          {link.name}
                        </div>
                      </ListItem>
                    </a>
                  {/each}
                </Menu>
              {:else}
                <Button text class="primary-text">
                  <a href={navigation.url}>
                    <div class="text-body-1 font-weight-bold">
                      {navigation.name}
                    </div>
                  </a>
                </Button>
              {/if}
            {/each}
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
  a {
    text-decoration: none;
  }
  .campus-name {
    font-size: 1.156rem;
  }
</style>
