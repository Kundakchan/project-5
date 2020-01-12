<template>
  <div class="container grid grid__center">
    <div class="section__item section__big-title">
      <h2>{{ big }}</h2>
    </div>
    <div class="section__item section__small-title">
      <h3>{{ small }}</h3>
    </div>
    <div class="section__item section__vertical-line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      big: 'Surfing is the most blissful experience you can have on this planet, a taste of heaven.',
      small: 'John McCarthy'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  grid-row-gap: 28px;
}
.section__item {
  max-width: 610px;
  width: 100%;
  text-align: center;
}
.section__big-title {
  h2 {
    opacity: 0.9;
    color: #333333;
    font-family: "Playfair Display";
    font-size: 26px;
    font-weight: 400;
    line-height: 38px;
    /* Text style for "S, urfing" */
    letter-spacing: 0.26px;
  }
}
.section__small-title {
  h3 {
    opacity: 0.9;
    color: #333333;
    font-family: "League Spartan";
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    /* Text style for "J, ohn McC" */
    letter-spacing: 5.4px;
  }
}
.section__vertical-line {
  margin-top: 30px;
  height: 100px;
  width: 2px;
  background-color: #5da8ef;
}

@media screen and (max-width: 940px) {
  .section__big-title h2 {
    font-size: 22px;
    line-height: 1.5em;
  }
}
@media screen and (max-width: 820px) {
  .section__big-title h2 {
    font-size: 20px;
  }
}
@media screen and (max-width: 640px) {
  .section__big-title h2 {
    font-size: 18px;
  }
}
@media screen and (max-width: 480px) {
  .section__big-title h2 {
    font-size: 16px;
  }
  .section__small-title h3 {
    font-size: 7px;
  }
}
</style>
