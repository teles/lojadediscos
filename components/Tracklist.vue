<template>
  <ul class="tracklist">
    <li v-for="(track, index) in tracklist" :key="index" class="tracklist__item">
      <span class="tracklist__position">
        {{ track.position }}
      </span>
      <span class="tracklist__title">
        {{ track.title }}
      </span>
      <span class="tracklist__duration">
        {{ track.duration }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tracklist',
  props: {
    tracklist: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="sass">

@import "../sass/bem.sass"
@import "../sass/spacing.sass"
@import "../sass/breakpoints.sass"

.tracklist
  list-style: inside circle

  @media(min-width: $screen-tablet-min)
    column-count: 2

  +element('position')
    font-weight: 500
    margin-right: spacing(1)

  +element('title')
    color: #333

  +element('duration')
    color: #666
</style>
