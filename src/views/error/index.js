/*
 * @Author: ray_sun
 * @Date: 2020-03-09 11:35:02
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-16 14:39:20
 */
import defaultLayout from '../layouts/default'

export default {
  path: '/error',
  component: defaultLayout,
  children: [
    {
      path: 'home',
      meta: {
        title: 'home'
      },
      component: () => import('./home')
    }
  ]
}
