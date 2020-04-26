<template>
  <div class="photo-gallery">
    <figure class="photo-gallery__box">
      <img :src="photos[currentPhotoIndex].url" class="photo-gallery__image">
    </figure>
    <div class="photo-gallery__panel">
      <button class="photo-gallery__panel__button--first" :disabled="currentPhotoIndex === 0" @click="goToPreviousPhoto">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>

      <button
        v-for="(photo, index) in photos"
        :key="index"
        :class="index === currentPhotoIndex ? 'photo-gallery__panel__button--active' : 'photo-gallery__panel__button'"
        @click="goToPhoto(index)"
      >
      &nbsp;
      </button>

      <button class="photo-gallery__panel__button--last" :disabled="currentPhotoIndex === photos.length - 1" @click="goToNextPhoto">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoPhotos',
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentPhotoIndex: 0
    }
  },
  methods: {
    goToPhoto (index) {
      this.currentPhotoIndex = index
    },
    goToPreviousPhoto () {
      this.currentPhotoIndex = Math.max(this.currentPhotoIndex - 1, 0)
    },
    goToNextPhoto () {
      this.currentPhotoIndex = Math.min(this.currentPhotoIndex + 1, this.photos.length - 1)
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "../sass/bem.sass"
  @import "../sass/spacing.sass"

  .photo-gallery
    position: relative

    +element('box')
      position: relative
      max-width: 100%
      max-height: 100%
      overflow: hidden
      background: #ededed
      display: flex

      &::before
        content: ""
        display: block
        padding-top: 100%

      &::after
        position: absolute
        content: "IMAGEM MERAMENTE ILUSTRATIVA"
        right: 0
        bottom: 0
        background-color: #fff
        font-size: 9px
        line-height: 2
        opacity: .95

    +element('image')
      position:  absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      margin: auto
      max-height: 100%

    +element('panel')
      display: flex
      justify-content: space-between
      margin-top: spacing(1)

      +element('button')
        border: 0
        padding: 0
        outline: none
        display: block
        cursor: pointer
        color: #ccc
        border-radius: 99px
        background-color: #ccc
        width: 12px
        height: 12px
        margin: 7px
        &:hover
          background-color: #8cc9f0

        +modifier('first')
          background: none
          margin-right: auto
          &:hover
            background: none
            color: #8cc9f0

        +modifier('last')
          background: none
          margin-left: auto
          &:hover
            background: none
            color: #8cc9f0

        +modifier('active')
          background: orange

</style>
