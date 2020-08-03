<!--
 * @Author: ray_sun
 * @Date: 2020-03-09 11:37:44
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-09 11:49:36
 -->
<template>
  <div>
    <child></child>
  </div>
</template>
<script>
import child from './child'

export default {
  components: {
    child
  },
  beforeCreate() {
    console.log('parent beforeCreate')
  },
  created() {
    console.log('parent created')
  },
  beforeMount() {
    console.log('parent beforeMount')
  },
  mounted() {
    console.log('parent mounted')
  },
  beforeDestroy() {
    console.log('parent beforeDestroy')
  },
  destroyed() {
    console.log('parent destroyed')
  }
}
</script>