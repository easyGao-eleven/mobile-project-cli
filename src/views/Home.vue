<template>
  <div class="home-style">
    <van-cell-group>
      <van-field
        v-model="idCard"
        label="身份证号"
        placeholder="请输入身份证号"
      />
    </van-cell-group>
    <div class="flex j-center">
      <van-button type="info" @click="checkIdCard">检测</van-button>
    </div>
  </div>
</template>

<script>
import { testCheckIdCard } from '@/services/index'
export default {
  name: 'home',
  data () {
    return {
      idCard: '210321198808251616'
    }
  },
  methods: {
    goRouter (key) {
      this.$router.push('/' + key)
    },
    async checkIdCard () {
      const res = await testCheckIdCard({
        idCard: this.idCard
      })
      this.$toast(res.data.msg)
    }
  }
}
</script>

<style lang="less" scoped>
.home-style {
  .home-btn {
    width: 80%;
    margin: 30px 0 0;
  }
  /deep/ .van-nav-bar__title {
    font-weight: bold;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #333333;
  }
  p {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #666666;
    text-align: center;
  }
}
.home-loading {
  width: 300px;
  height: 300px;
  background: url("../assets/host-loading.gif");
  background-size: 100% 100%;
  margin: 150px auto 30px auto;
}
</style>
