import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import Confirm from './components/confirm/index'
import router from './router'
import store from './store'
import './style/style.scss'

Vue.use(ElementUI)
Vue.prototype.$my_confirm = Confirm.install

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
