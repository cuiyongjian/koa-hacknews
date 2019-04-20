import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(function (config) {
  console.log('config', config)
  if (config.url.startsWith('api/user') || config.url.startsWith('/api/user')) {
    // 需要鉴权
    config.headers['Authorization'] = `Bearer ${store.state.user.token}`
  }
  return config
})

export default axios
