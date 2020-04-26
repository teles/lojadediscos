<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__anchor">
        Home
      </a>
    </li>
    <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumbs__item">
      <n-link
        v-if="index < breadcrumbs.length - 1"
        :to="{ name: breadcrumb.route, params: breadcrumb.params }"
        class="breadcrumbs__anchor"
      >
        {{ breadcrumb.title }}
      </n-link>
      <span v-else class="breadcrumbs__anchor--current">
        {{ breadcrumb.title }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    parser: {
      type: String,
      required: false,
      default: 'disco'
    }
  },
  created () {
    const typeToBreadcrumbs = {
      disco: data => ([{
        route: 'genero-name',
        title: data.genre.name,
        params: {
          name: data.genre.slug
        }
      },
      {
        route: 'artista-name',
        title: data.artist.name,
        params: {
          name: data.artist.slug
        }
      },
      {
        title: data.name
      }])
    }
    this.breadcrumbs = typeToBreadcrumbs[this.parser](this.data)
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
