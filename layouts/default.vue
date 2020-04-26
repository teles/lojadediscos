<template>
  <div class="layout">
    <page-header />
    <nuxt />
    <page-footer class="layout__footer"/>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

export default {
  components: {
    PageFooter,
    PageHeader
  }
}
</script>
<style lang="sass">
@import '../sass/bem.sass'

.layout
  display: flex
  flex-direction: column
  min-height: 100vh

  +element('footer')
    margin-top: auto

</style>
