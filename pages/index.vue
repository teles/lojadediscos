<template>
  <div>
    <section>
      <div v-if="$nuxt.$loading === true">
        carregando...
      </div>
      <div v-else>
        <div v-for="disco in discos" :key="disco.id">
          <disco-thumb :disco="disco" />
        </div>
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

<style>
</style>
