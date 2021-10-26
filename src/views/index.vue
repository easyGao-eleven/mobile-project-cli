<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {},

  created () {
    // 初始化方法
    this.init()
  },

  computed: {},

  methods: {
    init () {

    }
  }

}

</script>
<style lang='' scoped>
</style>
