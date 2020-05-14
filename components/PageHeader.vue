<template>
  <div class="page-header">
    <div class="page-header__bar">
      <p class="page-header__title">
        Sua loja de discos
      </p>
      <form class="page-header__search-form">
        <input class="page-header__search-form__input">
        <button class="page-header__search-form__button">
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
      </form>
    </div>
    <menu class="page-header__menu">
      <ul class="page-header__menu__list">
        <li class="page-header__menu__list__item">
          <n-link class="page-header__menu__anchor" v-for="genre in genres" :key="genre.slug" :to="{name: 'genero-slug', params: {slug: genre.slug}}">
            {{ genre.name }}
          </n-link>
        </li>
      </ul>
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

  +element('bar')
    display: flex
    align-items: center
    justify-content: space-between
    padding: spacing(2)
    background-color: #c12725

  +element('menu')
    padding: 0 spacing(2)
    background-color: #f7f8fb

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
