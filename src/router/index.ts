import css from './css'
import error from './error'
import i18n from './i18n'
import defaultLayout from './layouts/default.vue'
import vueT from './vueT'

const routes = [
  {
    path: '/',
    name: '',
    component: defaultLayout,
    children: [vueT, i18n, error, css]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './About.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('./template/template.vue')
  }
]

export default routes
