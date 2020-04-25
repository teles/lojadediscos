<template>
  <div class="container">
    <div class="image-box">
      <img v-for="image in disco.images" :src="image.url">
    </div>
    <h1 class="page-title"> {{ disco.artist.name }} - {{ disco.name }} - {{ disco.year }}</h1>
    <dl class="tracklist">
      <template v-for="track in disco.tracklist">
        <dt>{{ track.duration }}</dt>
        <dd>{{ track.position }} {{ track.title }}</dd>
      </template>
    </dl>
  </div>
</template>

<script>
import Discojs from 'discojs'
import DiscoFullAdapter from "../../../components/DiscoFullAdapter"
import configs from '../../../discos.json'

export default {
  components: {},
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
        href: this.disco.slug
      }]
    }
  }
}
</script>

<style>



</style>
