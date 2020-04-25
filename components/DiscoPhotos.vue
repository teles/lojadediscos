<template>
  <div class="container">
    <figure class="disco-photos image is-square">
      <img :src="photos[currentPhotoIndex].url">
    </figure>

    <button :disabled="currentPhotoIndex === 0" @click="goToPreviousPhoto">
      anterior
    </button>

    <button
      v-for="(photo, index) in photos"
      :key="index"
      :class="index === currentPhotoIndex ? 'carousel-controller--active' : 'carousel-controller'"
      @click="goToPhoto(index)"
    >
      {{ index }}
    </button>

    <button :disabled="currentPhotoIndex === photos.length - 1" @click="goToNextPhoto">
      próxima
    </button>
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
  .carousel-controller--active
    background-color: red
</style>
