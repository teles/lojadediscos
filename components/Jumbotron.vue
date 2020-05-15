<template>
  <div class="jumbotron">
    <p class="jumbotron__title">
      {{ title }}
    </p>
    <p class="jumbotron__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>
<script>

export default {
  name: 'Jumbotron',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="sass">

@import '../sass/stage.sass'
@import '../sass/spacing.sass'
@import '../sass/bem.sass'

.jumbotron
  min-height: 25vh
  height: 45vh
  max-height: 60vh
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
    font-weight: 800
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
