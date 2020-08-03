<!--
 * @Author: ray_sun
 * @Date: 2020-03-09 11:37:44
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-11 15:14:45
 -->
<template>
  <div>
    <p>{{$t("message")}}</p>
    <p>{{ $tc('car', 1) }}</p>
    <p>{{ $tc('car', 2) }}</p>
    <p>{{ $tc('apple', 0) }}</p>
    <p>{{ $tc('apple', 1) }}</p>
    <p>{{ $tc('apple', 10, { count: 10 }) }}</p>

    <p>{{ $d(new Date(), 'short', 'en-US') }}</p>
    <p>{{ $d(new Date(), 'long', 'ja-JP') }}</p>

    <p>{{ $n(100, 'currency', 'en-US') }}</p>
    <p>{{ $n(100, 'currency', 'ja-JP') }}</p>

    <p>{{ $t('linked') }}</p>

    <component1></component1>

    <div id="string-syntax">
      <!-- 字符串 -->
      <p v-t="'hello'"></p>
      <!-- 通过数据进行键名路径绑定 -->
      <p v-t="path"></p>
    </div>

    <div id="object-syntax">
      <div>---------------------------</div>
      <p v-t="{ path: 'newHello', locale: 'zh', args: { name: 'kazupon' } }"></p>
      <!-- 通过 `data` 绑定数据 -->
      <p v-t="{ path: path, args: { name: nickName } }"></p>
    </div>
  </div>
</template>
<script>
import component1 from '../components/component1'

export default {
  components: {
    component1
  },
  data() {
    return {
      path: 'newHello'
    }
  },
  computed: {
    nickName() {
      return 'kazupon'
    }
  }
}
</script>