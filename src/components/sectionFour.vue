<template>
  <div class="container grid">
    <div class="four__item-1">
      <div class="four__top">
        <span class="small__title">{{ small }}</span>
        <span class="big__title">{{ big }}</span>
      </div>
    </div>
    <div class="four__item-2"></div>
    <div class="four__item-3">
      <div class="four__bottom">
        <button class="four__button">{{ button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      small: 'Shop',
      big: 'Surfboards',
      button: 'Show All'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
