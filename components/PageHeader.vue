<template>
  <div class="page-header">
    <div class="page-header__bar">
      <div class="page-header__bar__content">
        <p class="page-header__title">
          <a href="/" class="page-header__title__anchor">
            Loja de discos
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
    <div class="page-header__bar--auxiliar u-show-tablet">
      <div class="page-header__bar__content">
        <font-awesome-icon :icon="['fas', 'bars']" class="page-header__bar__icon" v-on:click="toggleMobileMenu()" />
      </div>
    </div>
    <ul v-if="isMobileMenuOpen" class="page-header__mobile-menu">
      <li v-for="genre in genres" :key="genre.slug" class="page-header__mobile-menu__list__item">
        <n-link class="page-header__mobile-menu__list__anchor" :to="{name: 'genero-slug', params: {slug: genre.slug}}">
          {{ genre.name }}
        </n-link>
      </li>
      <div class="page-header__mobile-menu__overlay" v-on:click="toggleMobileMenu()" />
    </ul>
    <menu class="page-header__bar--auxiliar u-hide-tablet">
      <div class="page-header__bar__content">
        <ul class="page-header__bar__list">
          <li v-for="genre in genres" :key="genre.slug" class="page-header__bar__list__item">
            <n-link class="page-header__bar__list__anchor" :to="{name: 'genero-slug', params: {slug: genre.slug}}">
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
    return {
      isMobileMenuOpen: false
    }
  },
  computed: {
    ...mapGetters('discos', [
      'genres'
    ])
  },
  methods: {
    toggleMobileMenu () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>
<style lang="sass">

@import '../sass/bem.sass'
@import '../sass/breakpoints.sass'
@import '../sass/utilities.sass'
@import '../sass/spacing.sass'
@import '../sass/grid-variables.sass'

.page-header
  display: flex
  flex-direction: column
  color: #fff

  +element('title')
    color: #fff
    font-weight: 300
    display: flex
    align-items: center

    +element('anchor')
      color: inherit
      font-size: calc(12px + .6vw)
      margin-right: spacing(1)
      &:hover
        color: #fff

  +element('bar')
    display: flex
    padding: spacing(1)
    background-color: #c12725

    +element('icon')
      color: #333
      font-size: 18px

    @media(min-width: $screen-tablet-min)
      display: grid
      padding: spacing(2) 0
      grid-template-columns: $desktop-4-grid-columns
      grid-template-areas: ". bar-content bar-content ."

    +modifier('auxiliar')
      padding: spacing(1)
      margin: 0
      background-color: #f7f8fb

      @media(min-width: $screen-tablet-min)
        padding: 0

    +element('content')
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      width: 100%
      grid-area: bar-content

    +element('list')
      display: flex
      flex-direction: row

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
    margin: 0 spacing(1)

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

  +element('mobile-menu')
    position: fixed
    z-index: 3
    background: #f8f8f8
    min-height: 100vh
    padding: 0
    width: calc(100vw - 50px)

    +element('overlay')
      content: ''
      height: 100%
      left: 100%
      position: absolute
      width: 50px
      top: 0
      border-left: 1px solid rgba(0, 0, 0, .5)
      background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .45))

    +element('list')

      +element('item')
        padding: 16px
        border-bottom: 1px solid hsl(0, 0%, 92%)
        border-top: 1px solid hsl(0, 0%, 97%)

      +element('anchor')
        color: hsl(207, 68%, 45%)

</style>
