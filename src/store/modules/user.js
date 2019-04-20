import axios from 'axios'
import jwt from 'jsonwebtoken'
console.log('jsonwebtoken', jwt)

export default {
  namespaced: true,
  state: {
    token: '',
  },
  getters: {
    // userInfo放置json web token解析出来的不重要的信息
    userInfo(state) {
      console.log(state.token)
      debugger
      const rel = jwt.decode(state.token, {complete: true})
      return rel && rel.payload || {}
    },
    isLogin(state) {
      return state.token
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      const rel = await axios.post('api/user/login', {
        username,
        password
      })
      if (rel.data.status === 0) {
        // 保存token到内存store
        commit('setToken', rel.data.data)
      }
      return rel.data
    }
  }
}
