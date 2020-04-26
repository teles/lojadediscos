<template>
  <div class="stage">
    <div class="stage__header">
      <ul class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__anchor">
            Home
          </a>
        </li>
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__anchor">
            Rock
          </a>
        </li>
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__anchor">
            Metallica
          </a>
        </li>
        <li class="breadcrumb__item">
          <a href="/" class="breadcrumb__anchor">
            Black Album
          </a>
        </li>
      </ul>
    </div>
    <div class="stage__featured">
      <disco-photos :photos="disco.images" />
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
          Comprar
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
      <h3 class="stage__content__title">
        Lista de músicas
      </h3>
      <tracklist :tracklist="disco.tracklist" />
      <h3 class="stage__content__title">
        Comentários
      </h3>
      <div>
        Bla bla bla
      </div>
    </div>
  </div>
</template>

<script>
import Discojs from 'discojs'
import DiscoFullAdapter from '../../../components/DiscoFullAdapter'
import configs from '../../../discos.json'
import DiscoPhotos from '../../../components/DiscoPhotos'
import Tracklist from '../../../components/Tracklist'
import RatingStar from '../../../components/RatingStar'

export default {
  components: {
    Tracklist,
    DiscoPhotos,
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

<style lang="sass">
@import '../../../sass/stage.sass'

.breadcrumb
  display: inline-flex

.buy-box
  background-color: hsl(60, 100%, 90%)
  border: 1px solid hsl(60, 100%, 60%)
  padding: 8px
  margin: 16px 0

  +element('action')
    font-size: 20px
    font-weight: 300
    background: #666
    color: #fff
    border: none
    padding: 8px
    border-radius: 4px
    cursor: pointer

  +element('price')
    margin-bottom: 8px
    color: orange
    font-weight: 600
    font-size: 18px

  +element('stock')
    margin-top: 8px

</style>
