<!--
 * @Author: ray_sun
 * @Date: 2020-03-11 10:37:20
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-03-11 15:15:28
 -->
 
<template>
  <div>
    <p>Component1 locale messages: {{ $t("message.hello") }}</p>
    <p>Fallback global locale messages: {{ $t("the_world") }}</p>
  </div>
</template>
<script>
export default {
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: { message: { hello: 'hello component1' } },
      zh: { message: { hello: '你好 component1' } }
    }
  }
}
</script>