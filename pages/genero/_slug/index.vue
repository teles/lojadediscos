<template>
  <div class="stage--no-featured">
    <section class="stage__content">
      <div v-if="$nuxt.$loading === true">
        carregando...
      </div>
      <div v-else class="disco-grid">
        <disco-thumb v-for="disco in discos" :key="disco.id" :disco="disco" />
      </div>
    </section>
  </div>
</template>

<script>
import DiscoThumb from '../../../components/DiscoThumb'

export default {
  components: {
    DiscoThumb
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
