<template>
  <div>
    <div class="jumbotron">
      <p class="jumbotron__title"> Sua loja de discos - 10 anos de história</p>
      <p class="jumbotron__subtitle">Mais de 240 discos de estilos variados a venda</p>
    </div>
    <div class="stage--no-featured">
      <section class="stage__content">
        <div v-if="$nuxt.$loading === true">
          carregando...
        </div>
        <div v-else>
          <div v-for="  item in discosByGenres" :key="item.title">
            <discos-showcase :discos="item.discos" :title="item.title"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Discojs from 'discojs'
import DiscosShowcase from '../components/DiscosShowcase'
import configs from '../discos.json'

export default {
  components: {
    DiscosShowcase
  },
  async asyncData ({ app, params, store }) {
    const disco = new Discojs({
      userToken: configs.token
    })

    const notes = await disco.getCustomFields(configs.username)
    const items = await disco.getItemsInFolderForUser(configs.username, 0)

    items.releases.forEach((data) => {
      store.commit('discos/add', { data, notes })
    })

    return {}
  },
  data () {
    return {
      notes: [],
      loading: false
    }
  },
  computed: {
    discosByGenres () {
      return this.$store.getters['discos/genres'].map((genre) => {
        return {
          title: genre.name,
          discos: Object.values(this.$store.state.discos.listById).filter((disco) => {
            return disco.genres.map(genre => genre.slug).includes(genre.slug)
          })
        }
      })
    }
  }
}
</script>

<style lang="sass">

@import '../sass/stage.sass'
@import '../sass/spacing.sass'
@import '../sass/bem.sass'

.disco-grid
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr) )
  display: grid
  grid-gap: spacing(1)

.jumbotron
  min-height: 25vh
  height: 40vh
  max-height: 50vh
  overflow: hidden
  display: flex
  width: 100%
  position: relative
  color: #fff
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center
  background-color: #f7f8fb
  line-height: 1.2
  padding: spacing(2)
  background-image: url('../assets/looking-through-records.jpg')
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover

  +element('title')
    z-index: 2
    color: #fff
    font-size: calc(1vw + 2em)
    text-shadow: 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(0, 0, 0, .5)
    font-weight: 600
    margin-bottom: spacing(2)
    letter-spacing: .1px

  +element('subtitle')
    z-index: 2
    color: #fff
    font-size: calc(1vw + 1em)
    text-shadow: 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(0, 0, 0, .5)
    font-weight: 600
    letter-spacing: .1px

  +element('image')
    position: absolute
    filter: brightness(0.5)
    top: 0
    left: 0
    z-index: 1
    height: 100%
    object-fit: cover
    width: 100%

</style>
