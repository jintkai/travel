
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
