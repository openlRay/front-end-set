<template>
    <transition name="fade">
        <div class="confirm-wrap"
            v-if="visible">
            <div class="confirm">
                <div class="hd">
                    {{title}}
                    <i class="btn-close iconfont icon-close"
                        @click="handleAction('close')"></i>
                </div>
                <div class="bd">
                    <i v-if="type!=''"
                        class="icon-type iconfont"
                        :class="'icon-'+type"></i>{{content}}
                </div>
                <div class="ft">
                    <a href="javscript:void(0)"
                        class="btn btn-primary"
                        @click="handleAction('yes')">{{yesBtnText}}</a>
                    <a href="javscript:void(0)"
                        class="btn btn-default"
                        @click="handleAction('cancel')">{{cancelBtnText}}</a>
                </div>
            </div>
            <div class="backdrop"
                @click="handleAction('close')"></div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "MyConfirm",
  data () {
    return {
      visible: false,
      title: '',
      content: '',
      yesBtnText: '确定',
      cancelBtnText: '取消',
      type: '',
      promiseStatus: null,
    }
  },
  // watch: {
  //   visible: function (curVal) {
  //     if (curVal && document.body.scrollHeight > window.innerHeight) {
  //       document.querySelector('body').classList.add('backdrop-open');
  //     } else {
  //       document.querySelector('body').classList.remove('backdrop-open');
  //     }
  //   }
  // },
  methods: {
    confirm () {
      let _this = this;
      this.visible = true;
      return new Promise(function (resolve, reject) {
        _this.promiseStatus = { resolve, reject };
      });
    },
    handleAction (action) {
      this.visible = false;
      if (action == 'yes') {
        this.promiseStatus && this.promiseStatus.resolve();
      } else {
        this.promiseStatus && this.promiseStatus.reject();
      }
    }
  }
}
</script>