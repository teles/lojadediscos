<template>
  <div class="container">
    {{ disco }}
  </div>
</template>

<script>
import Discojs from 'discojs'

export default {
  components: {},
  async asyncData ({ params }) {
    const disco = new Discojs()
    const releaseId = parseInt(params.slug.match(/_([0-9]+)/)[1])
    const release = await disco.getRelease(releaseId)
    return {
      disco: release
    }
  },
  data () {
    return {
      disco: {}
    }
  }
}
</script>

<style>
</style>
