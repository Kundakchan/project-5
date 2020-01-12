<template>
  <div class="container grid grid__center footer">
    <div class="footer__item">
      <img :src="logo" alt="logo" class="footer__logo">
    </div>
    <nav class="footer__item w-100">
      <ul class="footer__nav flex flex__between w-100">
        <li class="nav__item" v-for="(item, index) in links" :key="index">
          <a :href="item.path">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
    <div class="footer__item">
      <ul class="network flex">
        <li class="network__item" v-for="(item, index) in networks" :key="index">
          <a :class="item.icon" :href="item.path"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logo: require('@/assets/img/logo/logo.svg'),
      networks: [
        {
          icon: 'icon-tumblr',
          path: '#'
        },
        {
          icon: 'icon-twitter',
          path: '#'
        },
        {
          icon: 'icon-vimeo',
          path: '#'
        }
      ],
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
.footer {
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 40px;
  padding-bottom: 20px;
}
.footer__nav {
  @media screen and (max-width: 420px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-row-gap: 10px;
  }
}
.nav__item a {
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
.nav__item a:focus {
  color: blueviolet;
}
.network__item {
  margin: 0 15px;
}
.network__item a {
  width: 20;
  height: 20;
  color: #ebebeb;
  font-size: 20px;
  outline: none;
  transition: color .2s ease;
}
.network__item a:focus {
  color: blueviolet;
}
</style>
