<template>
  <div class="tracklist">
    <ul>
      <li v-for="(track, index) in tracklist" :key="index">
        {{ track.position }} {{ track.title }} {{ track.duration }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tracklist',
  props: {
    tracklist: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
