<template>
  <div class="buy-box">
    <p class="buy-box__price">
      R$ 120,00
    </p>
    <button class="buy-box__action">
      <span>Falar com o vendedor &nbsp;</span>
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </button>
    <p class="buy-box__stock">
      <strong>
        Disponibilidade:
      </strong>
      <span>
        Em estoque.
      </span>
    </p>
  </div>
</template>
<script>
export default {

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
    padding: 8px
    border-radius: 4px
    cursor: pointer
    transition: all ease-in-out .2s
    &:hover
      background-color: #15a292

  +element('price')
    margin-bottom: spacing(1)
    color: orange
    font-weight: 600
    font-size: 18px

  +element('stock')
    margin-top: spacing(1)
</style>
