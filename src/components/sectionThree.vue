<template>
  <div class="container grid">
    <div class="left grid">
      <div class="left__img">
        <img class="w-100" :src="left" alt="img">
      </div>
      <div class="left__content">
        <p class="left__discription">{{ discription }}</p>
        <button class="left__button">{{ button }}</button>
      </div>
    </div>
    <div class="right__box">
      <div class="right flex flex__center flex__vertical__center">
        <img :src="right" alt="img" class="right__img w-100">
        <button class="icon-controller-play right__button"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      left: require('@/assets/img/section-three/left.jpg'),
      right: require('@/assets/img/section-three/right.jpg'),
      discription: 'By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.',
      button: 'Read More'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  grid-template-columns: repeat(2, 1fr);
}
.right__box {
  position: relative;
}
.right {
  position: absolute;
  left: -100px;
  top: 50px;
  right: 0;
  box-shadow: 0px 0px 50px rgba(117, 117, 117, 0.452);
}
.right__button {
  position: absolute;
  width: 68px;
  height: 68px;
  color: white;
  border: none;
  background-color: #5da8ef;
  outline: none;
  cursor: pointer;
  transition: background-color .3s ease;
  border-radius: 100%;
  font-size: 17px;
}
.right__button:focus {
  background-color: green;
}
.left {
  grid-row-gap: 60px;
  justify-items: end;
}
.left__img{
  width: 100%;
}
.left__content {
  max-width: 336px;
  margin-right: 120px;
}
.left__discription {
  opacity: 0.65;
  color: #616161;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  /* Text style for "B, y bette" */
  letter-spacing: 0.35px;
}
.left__button {
  margin-top: 50px;
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #333333;
  font-family: "League Spartan";
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5.4px;
  padding-bottom: 10px;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 95%;
    height: 2px;
    background-color: #5da8ef;
    content: ''
  }
}
@media screen and (max-width: 640px){
  .container {
    grid-template-columns: 1fr;
    grid-row-gap: 5px;
  }
  .left {
    justify-items: center;
    order: 1;
    grid-row-gap: 20px;
  }
  .left__content {
    margin: 0;
    text-align: center;
  }
  .right__box {
    order: -1;
  }
  .right {
    top: 0;
    left: 0;
    position: relative;
    box-shadow: none
  }
}
</style>
