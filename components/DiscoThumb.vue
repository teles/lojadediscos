<template>
  <div class="disco">
    <div class="disco__thumb">
      <n-link :to="{name: 'disco-slug', params: {slug: disco.slug}}">
        <figure class="disco__thumb__figure">
          <img :src="disco.thumb" :alt="disco.name" class="disco__thumb__image">
        </figure>
      </n-link>
    </div>
    <div class="disco__content">
      <n-link :to="{name: 'disco-slug', params: {slug: disco.slug}}" class="disco__name">
        {{ disco.name }}
      </n-link>
      <p class="disco__price">
        {{ disco.customFields.preco | currency }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoThumb',
  props: {
    disco: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="sass">

@import '../sass/bem.sass'
@import '../sass/spacing.sass'

.disco
  display: flex
  flex-direction: column
  align-items: center

  +element('content')
    width: 100%
    padding: 0 spacing(1)
    margin-top: spacing(1)

  +element('thumb')
    width: 100%
    min-width: 150px

    +element('figure')
      display: flex
      justify-content: center
      background: hsl(0, 0%, 97%)

    +element('image')
      max-height: 100%

  +element('name')
    font-size: 14px
    font-weight: 400

  +element('price')
    color: #b12704
    font-weight: 300
    font-size: 13px
    line-height: 19px

</style>
