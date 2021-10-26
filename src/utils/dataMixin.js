import { mapGetters, mapMutations } from 'vuex'
export default {
  created () {
    const { key, token, userId, userInfo, location } = this.$route.query
    console.log('userInfo', userInfo)
    if (key) this.setKey(key)
    if (token) this.setToken(token)
    if (userId) this.setUserId(userId)
    if (userInfo) this.setUserInfo(userInfo)
    if (location) this.setLocation(location)
  },
  computed: {
    ...mapGetters('user', ['token', 'key', 'userId', 'userInfo', 'location'])
  },
  methods: {
    ...mapMutations('user', [
      'setToken',
      'setKey',
      'setUserId',
      'setUserInfo',
      'setLocation'
    ])
  },
  filters: {
    imgSrcFilter (value) {
      return window.base_file_url + value
    }
  }
}
