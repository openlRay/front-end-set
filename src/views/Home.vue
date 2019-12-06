<template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ele } from '../vdom/element'
import { diff } from '../vdom/diff'
import patch from '../vdom/patch';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted() {
    var ul1 = ele('div', {
      id: 'virtual-dom'
    }, [
        ele('p', {}, ['Virtual DOM']),
        ele('ul', {
          id: 'list'
        }, [
            ele('li', {
              class: 'item'
            }, ['Item 1']),
            ele('li', {
              class: 'item'
            }, ['Item 2']),
            ele('li', {
              class: 'item'
            }, ['Item 3'])
          ]),
        ele('div', {}, ['HcreateElementlo World'])
      ])

    var ul2 = ele('div', { id: 'virtual', class: 'dom' }, [
      ele('p', {}, ['Virtual DOM']),
      ele('ul', { id: 'list' }, [
        ele('li', { class: 'item' }, ['Item 21']),
        ele('li', { class: 'item' }, ['Item 23'])
      ]),
      ele('p', {}, ['Hello World']),
      ele('span', { id: 'span' }, ['Hello span'])
    ])
    var root = ul1.render()

    document.body.appendChild(root);
    setTimeout(() => {
      var patches = diff(ul1, ul2);
      // console.log(ul1.render(), ul2.render())
      // console.log('patches:', patches);
      patch(root, patches)
    }, 1000)
  }
}
</script>
