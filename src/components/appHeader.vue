<template>
  <div class="container w-100 flex flex__between flex__vertical__center header">
    <button class="header__button button__radius icon-menu"></button>
    <div class="header__logo">
      <img :src="logo" alt="logo" class="header__logo-icon">
    </div>
    <ul class="header__nav flex flex__between">
      <li class="header__nav-item" v-for="(item, index) in links" :key="index">
        <a :href="item.path">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logo: require('@/assets/img/logo/logo.svg'),
      links: [
        {
          name: 'Stories',
          path: '#'
        },
        {
          name: 'Events',
          path: '#'
        },
        {
          name: 'Places',
          path: '#'
        },
        {
          name: 'Boards',
          path: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header__button {
  background-clip: #fff;
  display: none;
  width: 50px;
  height: 50px;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 19px;
  box-shadow: 0px 0px 3px rgba(150, 150, 150, 0.692);
}
.header__button:focus {
  color: blueviolet;
}
.button__radius {
  border-radius: 100%;
}
.header__nav {
  max-width: 410px;
  width: 100%;
}
.header__nav-item a {
  padding: 10px 5px;
  opacity: 0.9;
  color: #0b0c11;
  font-family: "League Spartan";
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  /* Text style for "S, tories" */
  letter-spacing: 5.58px;
  outline: none;
  transition: color .2s ease;
}
.header__nav-item a:focus {
  color: blueviolet
}

@media screen and (max-width: 620px){
  .header__logo, .header__nav {
    display: none;
  }
  .header__button {
    display: initial;
  }
}
</style>
