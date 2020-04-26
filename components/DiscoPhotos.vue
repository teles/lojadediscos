<template>
  <div class="container">
    <figure class="disco-photos image is-square">
      <img :src="photos[currentPhotoIndex].url">
    </figure>
    <div class="carousel">
      <button class="carousel-controller--first" :disabled="currentPhotoIndex === 0" @click="goToPreviousPhoto">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>

      <button
        v-for="(photo, index) in photos"
        :key="index"
        :class="index === currentPhotoIndex ? 'carousel-controller--active' : 'carousel-controller'"
        @click="goToPhoto(index)"
      >
      &nbsp;
      </button>

      <button class="carousel-controller--last" :disabled="currentPhotoIndex === photos.length - 1" @click="goToNextPhoto">
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
<style lang="sass">
  @import "../sass/bem.sass"
  @import "../sass/spacing.sass"

  .disco-photos
    &::after
      position: absolute
      content: "IMAGEM MERAMENTE ILUSTRATIVA"
      right: 0
      bottom: 0
      background-color: #fff
      font-size: 9px
      line-height: 2
      opacity: .95

  .carousel
    display: flex
    justify-content: space-between
    margin-top: spacing(1)

  .carousel-controller
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
