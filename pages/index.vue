<template>
  <div>
    <page-header/>
    <section class="container is-fullhd">
      <div v-if="$nuxt.$loading === true" class="section">
        carregando...
      </div>
      <div v-else class="section">
        <div class="columns is-multiline">
          <div v-for="disco in discos" :key="disco.id" class="column is-narrow">
            <disco-thumb :disco="disco" />
          </div>
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
import PageHeader from '../components/PageHeader'

export default {
  components: {
    DiscoThumb,
    PageHeader
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
