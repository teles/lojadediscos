<template>
  <div class="page-header">
    <div class="page-header__content">
      <p class="page-header__title">
        Sua loja de discos
      </p>
      <p>
        <n-link v-for="genre in genres" :key="genre.slug" :to="{name: 'genero-slug', params: {slug: genre.slug}}">
          {{ genre.name }}
        </n-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageHeader',
  data () {
    return {}
  },
  computed: {
    ...mapGetters('discos', [
      'genres'
    ])
  }
}
</script>
<style lang="sass">

@import '../sass/bem.sass'
@import '../sass/breakpoints.sass'
@import '../sass/spacing.sass'
@import '../sass/grid-variables.sass'

.page-header
  display: grid
  grid-template-columns: 1fr
  grid-gap: spacing(2)
  padding: spacing(2)
  grid-template-areas:  "page-header"
  background-color: #0e1615
  color: #fff

  @media(min-width: $screen-tablet-min)
    grid-template-columns: $desktop-4-grid-columns
    grid-template-areas: ". page-header page-header ."

  +element('content')
    grid-area: page-header

</style>
