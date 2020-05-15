<template>
  <div>
    <jumbotron :title="genre.name" />
    <div class="stage--no-featured">
      <section class="stage__content">
        <div v-if="$nuxt.$loading === true">
          carregando...
        </div>
        <div v-else>
          <discos-showcase :discos="discos" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DiscosShowcase from '../../../components/DiscosShowcase'
import Jumbotron from '../../../components/Jumbotron'

export default {
  components: {
    DiscosShowcase,
    Jumbotron
  },
  data () {
    return {
    }
  },
  computed: {
    discos () {
      return this.$store.getters['discos/listByGenreSlug'](this.$route.params.slug)
    },
    genre () {
      return this.$store.getters['discos/genreBySlug'](this.$route.params.slug)
    }
  }
}
</script>
<style lang="sass">
@import '../../../sass/stage.sass'
</style>
