require(`quasar/dist/quasar.${__THEME}.css`)
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)
require('swiper/dist/css/swiper.css')

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VeeValidate from 'vee-validate'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VeeValidate)
Vue.use(VueAwesomeSwiper)

let type = 'desktop'
if (window.navigator.appVersion.toLocaleLowerCase().indexOf('mobile') > 0) {
  type = 'mobile'
}
document.getElementsByTagName('html')[0].setAttribute('app', type)
document.getElementsByTagName('body')[0].setAttribute('app', type)
require(`./themes/pc.styl`)
require('../src/assets/style.styl')
if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font') // 打包run build时需要注释，run dev时可取消注释
}

import 'quasar-extras/animate'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/material-icons' // 打包run build时需要注释，run dev时可取消注释

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}
import { swiper, swiperSlide } from 'vue-awesome-swiper'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    data: {
      eventHub: new Vue()
    },
    render: h => h(require('./App').default)
  })
})

let socketVue = new Vue()
Vue.prototype.socket = socketVue
