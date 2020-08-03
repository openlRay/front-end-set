<!--
 * @Author: ray_sun
 * @Date: 2020-07-27 16:47:11
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-27 17:19:04
--> 
<template>
  <div>
    <div class="expand-range" @click="click"></div>
  </div>
</template>  
<script>
export default {
  methods: {
    click() {
      console.log(123)
    }
  }
}
</script>
<style lang="scss">
.expand-range {
  width: 20px;
  height: 20px;
  border: 1px solid;
  position: relative;
}
.expand-range:after {
  content: '';
  position: absolute;
  top: -10px; right: -10px; bottom: -10px; left: -10px;
  cursor: pointer;
}
</style>