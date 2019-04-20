import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    idLists: {
      top: [],
      new: []
    },
    itemLists: {},
    size: 20
  },
  actions,
  mutations,
  getters
})
