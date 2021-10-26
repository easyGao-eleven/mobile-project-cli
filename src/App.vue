<template>
  <div id="app">
    <keep-alive :include="include">
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      include: []
    }
  },
  watch: {
    $route: {
      handler (to, from) {
        // console.log('to', to)
        // console.log('from', from)
        // 如果要 to(进入) 的页面是需要 keepAlive 缓存的，把 name push 进 include数组
        // 页面的name 和 路由的name 要一致
        if (to.meta.keepAlive) {
          !this.include.includes(to.name) && this.include.push(to.name)
        }
        // 如果 要 form(离开) 的页面是 keepAlive缓存的，
        // 再根据 deepth 来判断是前进还是后退
        // 如果是后退,则消除缓存
        if (from && from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
          const index = this.include.indexOf(from.name)
          index !== -1 && this.include.splice(index, 1)
        }
      },
      immediate: true
    }
  }
}
</script>
<style lang="less" scoped>
html,
body,
#app {
  padding: 0;
  margin: 0;
}
</style>
