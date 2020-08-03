<!--
 * @Author: ray_sun
 * @Date: 2020-03-09 11:47:15
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-09 11:48:30
 -->
<template>
  <div>

  </div>
</template>
<script>
export default {
  beforeCreate() {
    console.log('child beforeCreate')
  },
  created() {
    console.log('child created')
  },
  beforeMount() {
    console.log('child beforeMount')
  },
  mounted() {
    console.log('child mounted')
  },
  beforeDestroy() {
    console.log('child beforeDestroy')
  },
  destroyed() {
    console.log('child destroyed')
  }
}
</script>