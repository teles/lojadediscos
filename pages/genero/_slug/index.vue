<template>
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
</template>

<script>
import DiscosShowcase from '../../../components/DiscosShowcase'

export default {
  components: {
    DiscosShowcase
  },
  data () {
    return {
    }
  },
  computed: {
    discos () {
      return this.$store.getters['discos/listByGenreSlug'](this.$route.params.slug)
    }
  }
}
</script>
<style lang="sass">
@import '../../../sass/stage.sass'
</style>
