import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import EleForm from 'vue-ele-form'
import EleFormGallery from '../lib/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EleForm)
Vue.component('gallery', EleFormGallery)

new Vue({
  render: h => h(App)
}).$mount('#app')
