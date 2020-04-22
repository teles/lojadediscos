<template>
  <div class="disco">
    <div class="disco__image">
      <n-link :to="{name: 'disco-slug', params: {slug: disco.slug}}">
        <figure class="disco__figure">
          <img :src="disco.thumb" :alt="disco.name">
        </figure>
      </n-link>
    </div>
    <div class="disco__content">
      <n-link :to="{name: 'disco-slug', params: {slug: disco.slug}}">
        {{ disco.name }}
      </n-link>
      <p> {{ disco.customFields.preco | currency }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoThumb',
  props: {
    disco: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
