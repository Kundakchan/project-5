<template>
  <div class="container">
    <agile @afterChange="showSlide($event)" :options="agileSettings" ref="slideContainer">
      <div class="slide" v-for="(item, index) in slides" :key="index">
        <slide-item :options="item"></slide-item>
      </div>
    </agile>
    <div class="nav__slide flex flex__between">
      <button class="nav__button nav__left icon-left" @click.prevent="prev"></button>
      <div class="nav__data grid">
        <span class="nav__item">{{ indexSlide }}</span>
        <span class="nav__slesh">/</span>
        <span class="nav__item nav__last__item">{{ allSlide }}</span>
      </div>
      <button class="nav__button nav__right icon-right" @click.prevent="next"></button>
    </div>
  </div>
</template>

<script>
import slideItem from '@/components/slideItem'
export default {
  components: {
    'slide-item': slideItem
  },
  data () {
    return {
      indexSlide: null,
      agileSettings: {
        dots: false,
        navButtons: false
      },
      slides: [
        {
          small: 'Your',
          big: 'Beautiful Escape',
          discription: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
          img: require('@/assets/img/section-one/img-1.jpg')
        },
        {
          small: 'Your',
          big: 'Beautiful Escape',
          discription: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
          img: require('@/assets/img/section-one/img-2.jpg')
        },
        {
          small: 'Your',
          big: 'Beautiful Escape',
          discription: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
          img: require('@/assets/img/section-one/img-3.jpg')
        },
        {
          small: 'Your',
          big: 'Beautiful Escape',
          discription: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
          img: require('@/assets/img/section-one/img-4.jpg')
        }
      ]
    }
  },
  computed: {
    allSlide () {
      return this.slides.length
    }
  },
  methods: {
    next () {
      this.$refs.slideContainer.goToNext()
    },
    prev () {
      this.$refs.slideContainer.goToPrev()
    },
    showSlide (event) {
      this.indexSlide = event.currentSlide + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.nav__slide {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80px;
  @media screen and (max-width: 460px) {
    display: none;
  }
}
.nav__button {
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #ebebeb;
  transition: color .3s ease;
  font-size: 18px;
}
.nav__button:focus {
  color: blueviolet;
}
.nav__data {
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  align-items: center;
}
.nav__item {
  color: #262626;
  font-family: "League Spartan";
  font-size: 10px;
  font-weight: 700;
}
.nav__slesh {
  color: #ebebeb;
  font-size: 10px;
  font-weight: 700;
}
</style>
