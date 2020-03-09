/*
 * @Author: ray_sun
 * @Date: 2020-03-09 11:35:02
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-09 20:00:11
 */
import defaultLayout from '../layouts/default'

export default {
  path: '/vueT',
  component: defaultLayout,
  children: [
    {
      path: 'life-cycle',
      meta: {
        title: 'life-cycle'
      },
      component: () => import('./vue-life-cycle')
    }
  ]
}
