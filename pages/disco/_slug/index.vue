<template>
  <div class="stage">
    <div class="stage__header">
      <breadcrumbs :data="disco" :parser="'disco'" />
    </div>
    <div class="stage__featured">
      <photo-gallery :photos="disco.images" />
    </div>
    <div class="stage__content">
      <h1 class="stage__title">
        {{ disco.name }} <span v-if="disco.year > 0">- {{ disco.year }}</span>
      </h1>
      <h2 class="stage__subtitle">
        <strong class="stage__subtitle__part">
          Artista:
        </strong>
        <span>
          {{ disco.artist.name }}
        </span>
        <strong class="stage__subtitle__part">
          Formato:
        </strong>
        <span>
          {{ disco.formats.map(format => `${format.name}`).join(', ') }}
          <span v-if="disco.quantity > 1">
            ({{ disco.quantity }} itens)
          </span>
        </span>
        <strong class="stage__subtitle__part">
          Origem:
        </strong>
        <span>
          {{ disco.country }}
        </span>
      </h2>
      <div class="rating">
        <span class="rating__stars">
          <rating-star :value="disco.rating.average" />
        </span>
        <span class="rating__stars__value">
          <span>{{ disco.rating.average }} no</span>
          <a href="https://www.discogs.com">discogs</a>
        </span>
      </div>
      <div class="stage__description" />
      <buy-box :old-price="100" :price="90" :stock="1" />
    </div>
    <div class="stage__extra">
      <section class="stage__section">
        <h3 class="stage__section__title">
          Lista de músicas:
        </h3>
        <tracklist :tracklist="disco.tracklist" />
      </section>
      <section class="stage__section">
        <h3 class="stage__section__title">
          Comentários:
        </h3>
        <div>
          <vue-disqus shortname="disqusUsername" :identifier="canonical" :url="canonical" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Discojs from 'discojs'
import configs from '../../../discos.json'
import PhotoGallery from '../../../components/PhotoGallery'
import Tracklist from '../../../components/Tracklist'
import RatingStar from '../../../components/RatingStar'
import Breadcrumbs from '../../../components/Breadcrumbs'
import BuyBox from '../../../components/BuyBox'

export default {
  components: {
    Breadcrumbs,
    Tracklist,
    PhotoGallery,
    RatingStar,
    BuyBox
  },
  async asyncData ({ app, params, store }) {
    const discojs = new Discojs({
      userToken: configs.token
    })

    const releaseId = parseInt(params.slug.match(/_([0-9]+)/)[1])
    const release = await discojs.getRelease(releaseId)
    const notes = await discojs.getCustomFields(configs.username)

    store.commit('discos/addComplete', { data: release, notes })

    return {
      id: releaseId
    }
  },
  data () {
    return {
      canonical: `${process.env.baseUrl}/${this.$route.path}`,
      disqusUsername: configs.disqusUsername
    }
  },
  computed: {
    disco () {
      return this.$store.getters['discos/getCompleteById'](this.id)
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

<style lang="sass">
@import '../../../sass/stage.sass'
</style>
