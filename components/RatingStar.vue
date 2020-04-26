<template>
  <div style="display: inline-block">
    <font-awesome-icon v-for="(star, index) in stars" :key="index" :icon="star" />
  </div>
</template>

<script>
export default {
  name: 'RatingStars',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      stars: []
        .concat(new Array(Math.floor(this.value)).fill(['fas', 'star']))
        .concat(new Array(Math.round(this.value) - Math.floor(this.value)).fill(['fas', 'star-half-alt']))
        .concat(new Array(5 - Math.round(this.value)).fill(['far', 'star']))
    }
  }
}
</script>
