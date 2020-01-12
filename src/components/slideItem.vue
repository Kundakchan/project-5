<template>
  <div class="container grid">
    <div class="slide-left flex flex__vertical__center">
      <div class="slide__content">
        <span class="small-title">{{ smallTitle }}</span>
        <h2 class="big-title">{{ bigTitle }}</h2>
        <p class="discription">{{ discription }}</p>
      </div>
    </div>
    <div class="slide-right">
      <img :src="slideImg" alt="img" class="slide-img w-100">
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'options'
  ],
  data () {
    return {
      slideImg: this.options.img,
      smallTitle: this.options.small,
      bigTitle: this.options.big,
      discription: this.options.discription
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  grid-template-columns: 210px 1fr;
  grid-column-gap: 10px;
}
.slide-left {
  position: relative;
}
.slide__content {
  position: absolute;
  width: 520px;
}
.small-title {
  opacity: 0.9;
  color: #5da8ef;
  font-family: "League Spartan";
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  /* Text style for "Y, our" */
  letter-spacing: 5.4px;
}
.big-title {
  color: #0b0c11;
  font-family: "Playfair Display";
  font-size: 62px;
  font-weight: 700;
  padding: 20px 0;
}
.discription {
  color: #8f8f8f;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  /* Text style for "O, ne of t" */
  letter-spacing: 0.35px;
}
@media screen and (max-width: 940px){
  .slide__content {
    width: 350px;
  }
  .container {
    grid-template-columns: 150px 1fr;
  }
  .big-title {
    font-size: 42px;
  }
  .discription {
    font-size: 12px;
  }
}
@media screen and (max-width: 640px){
  .slide__content {
    width: 190px;
  }
  .container {
    grid-template-columns: 80px 1fr;
  }
  .big-title {
    font-size: 22px;
    padding: 5px 0;
  }
  .discription {
    font-size: 9px;
    line-height: 1.5em;
  }
}
</style>
