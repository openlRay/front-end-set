import defaultLayout from '../layouts/default.vue'

export default {
  path: '/css',
  component: defaultLayout,
  children: [
    {
      name: 'variable',
      path: 'variable',
      meta: {
        title: 'css变量'
      },
      component: () => import('./variable/index.vue')
    }
  ]
}
