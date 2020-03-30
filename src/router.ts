import Vue from 'vue'
import Router from 'vue-router'
import error from './views/error'
import i18n from './views/i18n'
import defaultLayout from './views/layouts/default'
import vueT from './views/vueT'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: defaultLayout,
      children: [vueT, i18n, error]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('./views/template/template.vue')
    }
  ]
})
