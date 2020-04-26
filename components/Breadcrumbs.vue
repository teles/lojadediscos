<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__anchor">
        Home
      </a>
    </li>
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__anchor">
        Rock
      </a>
    </li>
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__anchor">
        Metallica
      </a>
    </li>
    <li class="breadcrumbs__item">
      <span class="breadcrumbs__anchor--current">
        Black Album
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: false
    }
  }
}
</script>
<style lang="sass">

@import '../sass/bem.sass'
@import '../sass/spacing.sass'

.breadcrumbs
  display: inline-flex

  +element('item')

    &:not(:first-child)
      margin-left: spacing(2)

      &::before
        content: "/"
        margin-right: spacing(1)
        color: #999

  +element('anchor')
    color: #3273dc

    +modifier('current')
      color: #999

</style>
