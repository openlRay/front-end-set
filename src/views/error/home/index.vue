<!--
 * @Author: ray_sun
 * @Date: 2020-03-09 11:37:44
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-17 15:56:33
 -->
<template>
  <div>
    <div ref="wrapper" class="wrapper">
      <div ref="list" class="list">
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
          推荐
        </a>
        <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
          热点
        </a>
        <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
          北京
        </a>
        <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
          社会
        </a>
        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
          娱乐
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  mounted () {
    this.$nextTick(() => {
      this._initPics()
    })
  },
  methods: {
    // 用于初始化“商家实景”的横向滚动效果
    _initPics () {
    // 先判断是否有这个属性
      // 这里之所以要设置宽度，是因为.wrapper和.list的宽度一样大
      // 当.list的宽度大于.wrapper的宽度，才能横向滚动
      let itemWidth = 90 // 这里是设置列表每一项的宽度
      let margin = 6
      // width是整个列表的宽度
      let width = (itemWidth + margin) * 6 - margin
      console.log(width)
      this.$refs.list.style.width = width + 'px' // 设置.list的宽度的宽度
      this.$nextTick(() => {
        if (!this.picScroll) {
          this.picScroll = new BScroll(this.$refs.wrapper, {
            scrollX: true,
            eventPassthrough: 'vertical' // 忽略竖直方向的滚动
          })
        } else {
          this.picScroll.refresh()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
  white-space: nowrap; /*当子元素超过父元素宽度的时候，不会折行*/
  .list {
      display: flex;
      padding:0 32px;
    .mui-control-item {
        width:180px;
        margin-right:32px;
        padding-bottom:24px;
        line-height: 40px;
        font-size: .02rem;
    }
  }
}
</style>