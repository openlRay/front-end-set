<!--
 * @Author: ray_sun
 * @Date: 2020-03-09 20:00:49
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-09 20:05:27
 -->

# 详细介绍 vue 组件 https://github.com/natsu0728/blog/issues/8

# 父子组件创建顺序父

beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted ->父 mounted
