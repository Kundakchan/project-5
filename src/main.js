import Vue from 'vue'
import App from './App.vue'

import '@/plugins/Agile'

import 'normalize.css'
import '@/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
