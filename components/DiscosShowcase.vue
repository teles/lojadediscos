<template>
  <div class="disco-showcase">
    <h3 class="disco-showcase__title"> {{ title }} </h3>
    <div class="disco-grid">
      <disco-thumb v-for="disco in discos" :key="disco.id" :disco="disco" />
    </div>
  </div>
</template>

<script>
import DiscoThumb from './DiscoThumb'

export default {
  components: {
    DiscoThumb
  },
  props: {
    discos: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    max: {
      type: Number,
      required: false,
      default: 50
    }
  }
}
</script>
<style lang="sass">

@import '../sass/bem.sass'
@import '../sass/spacing.sass'

.disco-showcase
  display: block

  +element('title')
    font-size: 22px
    font-weight: 500
    margin: spacing(1) 0
    padding: spacing(1)
    font-family: "Open Sans", sans-serif
    line-height: 1.2
    color: #333
</style>
