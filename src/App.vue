<template>
  <div class="container-global container grid">
    <header class="header flex felx__vertical__center">
      <app-header></app-header>
    </header>
    <div class="vertical-text-right">
      <vertical-text-right></vertical-text-right>
    </div>
    <div class="section-one">
      <section-one></section-one>
    </div>
    <div class="section-two">
      <section-two></section-two>
    </div>
    <div class="section-three">
      <section-three></section-three>
    </div>
    <div class="section-four">
      <section-four></section-four>
    </div>
    <footer class="footer">
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import verticalTextRight from '@/components/verticalTextRight'
import appFooter from '@/components/appFooter'
import sectionOne from '@/components/sectionOne'
import sectionTwo from '@/components/sectionTwo'
import sectionThree from '@/components/sectionThree'
import sectionFour from '@/components/sectionFour'
export default {
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
    'vertical-text-right': verticalTextRight,
    'section-one': sectionOne,
    'section-two': sectionTwo,
    'section-three': sectionThree,
    'section-four': sectionFour
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container-global {
  max-width: 1390px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: 125px auto auto auto auto auto auto auto auto auto;
  grid-gap: 10px;
}
.header {
  grid-row: 1;
  grid-column: 2 / 8;
  @media screen and (max-width: 1200px){
    grid-column: 2 / 9
  }
  @media screen and (max-width: 940px){
    grid-column: 2 / 10
  }
  @media screen and (max-width: 940px){
    grid-column: 2 / 11
  }
  @media screen and (max-width: 940px){
    grid-column: 2 / 13
  }
}
.vertical-text-right {
  grid-row: 1 / 3;
  grid-column: 14 / 15;
  @media screen and (max-width: 620px) {
    display: none;
  }
}
.section-one {
  grid-row: 2;
  grid-column: 2 / 14;
  @media screen and (max-width: 620px) {
    grid-column: 2 / 15;
  }
}
.section-two {
  margin-top: 190px;
  grid-row: 3;
  grid-column: 1 / 15;
  @media screen and (max-width: 940px) {
    margin-top: 100px;
  }
  @media screen and (max-width: 620px) {
    margin-top: 40px;
  }
}
.section-three {
  margin-top: 62px;
  grid-row: 4;
  grid-column: 2 / 14;
  @media screen and (max-width: 640px) {
    grid-column: 1 / 15;
  }
}
.section-four {
  grid-row: 5;
  grid-column: 1 / 15;
}
.footer {
  grid-row: 10;
  grid-column: 6 / 10;
  @media screen and (max-width: 1200px) {
    grid-column: 5 / 11;
  }
  @media screen and (max-width: 820px){
    grid-column: 4 / 12;
  }
  @media screen and (max-width: 620px){
    grid-column: 2 / 14;
  }
  @media screen and (max-width: 420px){
    grid-column: 1 / 15;
  }
}
</style>
