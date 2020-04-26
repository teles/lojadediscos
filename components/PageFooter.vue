<template>
  <div class="page-footer">
    <div class="page-footer__content">
      <p class="page-footer__title">
        Rodapé
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
  data () {
    return {}
  }
}
</script>
<style lang="sass">

@import '../sass/bem.sass'
@import '../sass/breakpoints.sass'
@import '../sass/spacing.sass'
@import '../sass/grid-variables.sass'

.page-footer
  display: grid
  grid-template-columns: 1fr
  grid-gap: spacing(2)
  padding: spacing(4) spacing(2)
  grid-template-areas:  "page-footer"
  background-color: #666
  color: #fff

  @media(min-width: $screen-tablet-min)
    grid-template-columns: $desktop-4-grid-columns
    grid-template-areas: ". page-footer page-footer ."

  +element('content')
    grid-area: page-footer

</style>
