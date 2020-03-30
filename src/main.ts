import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import Confirm from './components/confirm/index'
import i18n from './i18n/i18n'
import router from './router'
import store from './store'
import './style/style.scss'

Vue.use(ElementUI)
Vue.prototype.$my_confirm = Confirm.install

Vue.config.productionTip = false

window.addEventListener('error', error => {
  console.log('error', error)
  uploadError(error)
  return true
})
Vue.config.errorHandler = function(err, vm, info) {
  console.log('errorHandle:', err,  vm, info)
  uploadError(err)
}

function uploadError({ lineno, colno, error: { stack }, timeStamp, message, filename }) {
  // 过滤
  const info = {
    lineno,
    colno,
    stack,
    timeStamp,
    message,
    filename
  }
  // const str = new Buffer(JSON.stringify(info)).toString("base64");
  const str = window.btoa(JSON.stringify(info))
  const host = 'http://localhost:7001/monitor/error'
  new Image().src = `${host}?info=${str}`
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
