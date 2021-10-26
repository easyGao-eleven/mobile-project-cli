export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {
    token: state => {
      if (!state.token) {
        try {
          const token = localStorage.getItem(process.env.VUE_APP_USER_TOKEN)
          state.token = token
        } catch (e) {
          console.error(e)
        }
      }
      return state.token
    },
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem(process.env.VUE_APP_USER_TOKEN, token)
    },
  }
}
