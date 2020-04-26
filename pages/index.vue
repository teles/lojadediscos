<template>
  <div class="stage--no-featured">
    <section class="stage__content">
      <div v-if="$nuxt.$loading === true">
        carregando...
      </div>
      <div v-else class="disco-grid">
        <disco-thumb v-for="disco in discos" :key="disco.id" :disco="disco" />
      </div>
    </section>
  </div>
</template>

<script>
import Discojs from 'discojs'
import DiscoThumb from '../components/DiscoThumb'
import DiscoAdapter from '../components/DiscoAdapter'
import configs from '../discos.json'

export default {
  components: {
    DiscoThumb
  },
  async asyncData () {
    const disco = new Discojs({
      userToken: configs.token
    })

    const notes = await disco.getCustomFields(configs.username)
    const items = await disco.getItemsInFolderForUser(configs.username, 0)

    return {
      discos: items.releases.map(release => new DiscoAdapter(release, notes))
    }
  },
  data () {
    return {
      discos: [],
      notes: [],
      loading: false
    }
  }
}
</script>

<style lang="sass">

@import '../sass/stage.sass'
@import '../sass/spacing.sass'

.disco-grid
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr) )
  display: grid
  grid-gap: spacing(1)

</style>
