<template>
    <div class="sided">
        <div class="side_all"
            :style="cStyle">
            <div class="side one">1</div>
            <div class="side two">2</div>
            <div class="side three">3</div>
            <div class="side four">4</div>
            <div class="side one">1</div>
        </div>
        <div class="order">
            <span class="order_item"
                v-for="i in 4"
                :key="i"
                @click.stop="clickOrder(i)"></span>
        </div>
        <button @click="prev">prev</button>
        <button @click="next">next</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      cStyle: {},
      currentIndex: 1,
      now: 0
    }
  },
  mounted () {

  },
  methods: {
    clickOrder (i) {
      if (i > 0 && i <= 4) {
        this.cStyle = {
          'transform': `translateX(${-25 * (i - 1)}%)`,
          'transition': 'all 1s'
        }
        this.currentIndex = i
        // debugger
      }
    },
    prev () {
      this.$my_confirm('是否登录?', {
        yesBtnText: '登录',
      }).then(() => {
        console.log('confirm')
      }).catch(() => {
        console.log('cancel')
      });

    },
    next () {
      let curTime = (new Date()).getTime()
      console.log(curTime - this.now)
      if (curTime - this.now > 1000) {
        this.le()
        this.now = curTime
      }
    },
    le () {
      if (this.currentIndex < 4) {
        this.currentIndex++
        this.cStyle = {
          'transform': `translateX(${-20 * (this.currentIndex - 1)}%)`,
          'transition': 'all 1s'
        }
      } else if (this.currentIndex === 4) {
        this.cStyle = {
          'transform': `translateX(-80%)`,
          'transition': 'all 1s'
        }
        setTimeout(() => {
          this.cStyle = {
            'transform': `translateX(0%)`
          }
        }, 1000)
        this.currentIndex = 1
      }
    },
    throttle (fn, time = 1000) {
      let now = 0
      return () => {
        let curTime = (new Date()).getTime()
        console.log(curTime - now)
        if (curTime - now > time) {
          fn.apply(this)
          now = curTime
        }
      }
    }
  }
}
</script>
<style lang="css">
.sided {
  overflow: hidden;
}
.side_all {
  width: 500%;
  position: relative;
}
.side {
  display: inline-block;
  width: 20%;
  height: 100px;
}
.one {
  background: #3f2;
}
.two {
  background: #446577;
}
.three {
  background: #e45;
}
.four {
  background: yellow;
}
.order {
  z-index: 10;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.order_item {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  margin-left: 5px;
}
</style>
