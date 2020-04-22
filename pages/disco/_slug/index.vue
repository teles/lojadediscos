<template>
  <div class="container">
    teste
  </div>
</template>

<script>
import Discojs from 'discojs'

export default {
  components: {},
  asyncData ({ params }) {
    const disco = new Discojs()
    const releaseId = parseInt(params.slug.match(/_([0-9]+)/)[1])
    const release = disco.getRelease(releaseId)
    return {
      disco: release
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
