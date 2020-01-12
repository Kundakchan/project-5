<template>
  <div class="container flex h-100 flex__between">
    <h3 class="message">{{ message }}</h3>
    <ul class="network__group">
      <li class="network__item" v-for="(item, index) in networks" :key="index">
        <a :href="item.path" :class="item.icon"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'First Surfing Magazine',
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  align-items: center;
}
.message {
  padding: 60px 0;
  writing-mode: vertical-lr;
  opacity: 0.2;
  color: #0b0c11;
  font-family: "League Spartan";
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  /* Text style for "F, irst Su" */
  letter-spacing: 5.4px;
}
.network__item:nth-child(2) {
  margin: 30px 0;
}
.network__item a {
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: #ebebeb;
  transition: color .2s ease;
  outline: none;
}
.network__item a:focus {
  color: blueviolet;
}
</style>
