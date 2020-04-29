<template>
  <div class="buy-box">
    <p class="buy-box__prices">
      <span v-if="oldPrice > 0" class="buy-box__price--old">
        {{ oldPrice | currency }}
      </span>
      <span v-if="price > 0" class="buy-box__price">
        {{ price | currency }}
      </span>
      <span v-if="discount > 5" class="buy-box__discount">
        ({{ discount }}% de desconto)
      </span>
    </p>
    <a :href="whatsappLink" class="buy-box__action" target="_blank">
      <span>Falar com o vendedor &nbsp;</span>
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </a>
    <div class="buy-box__informations">
      <div class="buy-box__informations__item">
        <strong>
          Disponibilidade:
        </strong>
        <span v-if="stock > 0" class="buy-box__has-stock">
          Em estoque.
        </span>
        <span v-else class="buy-box__no-stock">
          Indisponível no momento
        </span>
      </div>
      <div class="buy-box__informations__item">
        <strong>
          Formas de pagamento:
        </strong>
        <span>
          Cartão de crédito, débito, transferência bancária. Aceitamos trocas.
        </span>
      </div>
    </div>
  </div>
</template>
<script>

import configs from '../discos.json'

export default {
  props: {
    oldPrice: {
      type: Number,
      required: false,
      default: 0
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      discount: Math.floor(100 - (this.price / this.oldPrice) * 100),
      whatsappLink: `https://wa.me/${configs.contacts.whatsapp}?text=${encodeURIComponent('Olá, gostaria de mais informações sobre esse disco: ') + `${process.env.baseUrl}/${this.$route.path}`}`
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../sass/spacing.sass'
@import '../sass/bem.sass'

.buy-box
  background-color: #fff2bd
  border: 1px solid #ffdd57
  padding: spacing(1)
  margin: spacing(2) 0

  +element('action')
    font-size: 20px
    font-weight: 300
    background-color: #128c7e
    color: #fff
    border: none
    padding: spacing(1)
    border-radius: 4px
    cursor: pointer
    transition: all ease-in-out .2s
    margin: spacing(1) 0
    display: inline-block

    &:hover
      background-color: #15a292

  +element('prices')
    margin-bottom: spacing(1)
    font-weight: 600
    font-size: 18px

  +element('discount')
    font-weight: 200
    font-size: 13px

  +element('price')
    color: orange

    &:not(:first-child)
      margin-left: spacing(1)

    +modifier('old')
      text-decoration: line-through
      color: #b3b3b3
      font-size: 13px

  +element('informations')
    margin-top: spacing(1)

    +element('item')
      display: block
</style>
