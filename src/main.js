import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import request from './utils/request'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './utils/filters'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.prototype.$http = request
Vue.use(iView)
sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
