<template>
  <div class="layout">
    <div class="layout__images">
      <disco-photos :photos="disco.images" />
    </div>
    <div class="layout__content">
      <section>
        <div>
          <div>
            <h1>
              {{ disco.name }} - {{ disco.year }}
            </h1>
            <h2>
              {{ disco.artist.name }}
            </h2>
          </div>
        </div>
        <p>R$ 30,00</p>
      </section>
      <tracklist :tracklist="disco.tracklist" style="padding-top:0" />
    </div>
  </div>
</template>

<script>
import Discojs from 'discojs'
import DiscoFullAdapter from '../../../components/DiscoFullAdapter'
import configs from '../../../discos.json'
import DiscoPhotos from '../../../components/DiscoPhotos'
import Tracklist from '../../../components/Tracklist'

export default {
  components: {
    Tracklist,
    DiscoPhotos
  },
  async asyncData ({ params }) {
    const disco = new Discojs({
      userToken: configs.token
    })
    const releaseId = parseInt(params.slug.match(/_([0-9]+)/)[1])
    const release = await disco.getRelease(releaseId)
    const notes = await disco.getCustomFields(configs.username)

    return {
      disco: new DiscoFullAdapter(release, notes)
    }
  },
  data () {
    return {
      disco: {}
    }
  },
  head () {
    return {
      title: `${this.disco.artist.name} - ${this.disco.name}`,
      link: [{
        rel: 'canonical',
        href: `${process.env.baseUrl}/${this.$route.path}`
      }]
    }
  }
}
</script>

<style lang="css">
  .layout {
    display: inline-flex;
  }

  .layout__images {
    max-width: 50%;
    width: 400px;
  }
</style>
