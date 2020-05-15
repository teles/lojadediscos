<template>
  <div class="page-header">
    <div class="page-header__bar">
      <div class="page-header__bar__content">
        <p class="page-header__title">
          <a href="/" class="page-header__title__anchor">
            Sua loja de discos
          </a>
        </p>
        <form class="page-header__search-form">
          <input class="page-header__search-form__input">
          <button class="page-header__search-form__button">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </form>
      </div>
    </div>
    <menu class="page-header__bar--auxiliar">
      <div class="page-header__bar__content">
        <ul class="page-header__bar__list">
          <li class="page-header__bar__list__item">
            <n-link class="page-header__bar__list__anchor" v-for="genre in genres" :key="genre.slug" :to="{name: 'genero-slug', params: {slug: genre.slug}}">
              {{ genre.name }}
            </n-link>
          </li>
        </ul>
      </div>
    </menu>
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
  display: flex
  flex-direction: column
  color: #fff

  +element('title')
    color: #fff
    font-weight: 300

    +element('anchor')
      color: inherit
      &:hover
        color: #fff

  +element('bar')
    display: grid
    grid-template-columns: $desktop-4-grid-columns
    grid-template-areas: ". bar-content bar-content ."
    align-items: center
    justify-content: space-between
    padding: spacing(2) 0
    background-color: #c12725

    +modifier('auxiliar')
      padding: 0
      margin: 0
      background-color: #f7f8fb

    +element('content')
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      grid-area: bar-content

    +element('list')
      +element('anchor')
        font-weight: 300
        display: inline-block
        padding: spacing(2) spacing(1)
        &:hover
          background-color: #ededed

  +element('search-form')
    display: inline-flex
    background-color: #cc2f2c
    line-height: 44px
    height: 44px
    font-size: 16px
    border-radius: 4px
    overflow: hidden

    +element('button')
      background-color: inherit
      color: #fff
      border: 0
      width: 50px
      font-size: 16px
      cursor: pointer

    +element('input')
      border: 0
      background-color: inherit
      color: #fff
      outline: none
      line-height: inherit
      font-size: inherit
      padding: 8px

</style>
