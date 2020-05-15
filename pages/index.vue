<template>
  <div>
    <jumbotron :title="'Sua loja de discos - 10 anos de história'" :subtitle="'Mais de 240 discos de estilos variados a venda'" />
    <div class="stage--no-featured">
      <section class="stage__content">
        <div v-if="$nuxt.$loading === true">
          carregando...
        </div>
        <div v-else>
          <div v-for=" item in discosByGenres" :key="item.title">
            <discos-showcase :discos="item.discos" :title="item.title" :max="13" />
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
import Jumbotron from '../components/Jumbotron'

export default {
  components: {
    DiscosShowcase,
    Jumbotron
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
