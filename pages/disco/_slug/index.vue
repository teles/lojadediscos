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
        {{ disco.name }} - {{ disco.year }}
      </h1>
      <h2 class="stage__subtitle">
        {{ disco.artist.name }} - Vinil - 7pm
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
      <div class="stage__description">
        Um dos discos mais aclamados da história do rock
      </div>
      <div class="buy-box">
        <p class="buy-box__price">
          R$ 120,00
        </p>
        <button class="buy-box__action">
          <span>Falar com o vendedor</span>
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </button>
        <p class="buy-box__stock">
          <strong>
            Disponibilidade:
          </strong>
          <span>
            Em estoque.
          </span>
        </p>
      </div>
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
import DiscoFullAdapter from '../../../components/DiscoFullAdapter'
import configs from '../../../discos.json'
import PhotoGallery from '../../../components/PhotoGallery'
import Tracklist from '../../../components/Tracklist'
import RatingStar from '../../../components/RatingStar'
import Breadcrumbs from '../../../components/Breadcrumbs'

export default {
  components: {
    Breadcrumbs,
    Tracklist,
    PhotoGallery,
    RatingStar
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
      disco: {},
      canonical: `${process.env.baseUrl}/${this.$route.path}`,
      disqusUsername: configs.disqusUsername
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
@import '../../../sass/spacing.sass'

.breadcrumb
  display: inline-flex

.buy-box
  background-color: #fff2bd
  border: 1px solid #ffdd57
  padding: spacing(1)
  margin: spacing(2) 0

  +element('action')
    font-size: 20px
    font-weight: 300
    background-color: #128c7e
    color: #fff
    border: none
    padding: 8px
    border-radius: 4px
    cursor: pointer
    transition: all ease-in-out .2s
    &:hover
      background-color: #15a292

  +element('price')
    margin-bottom: spacing(1)
    color: orange
    font-weight: 600
    font-size: 18px

  +element('stock')
    margin-top: spacing(1)

</style>
