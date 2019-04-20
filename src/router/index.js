import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/pages/Profile'
import Login from '@/pages/Login'
import News from '@/pages/news'
import Detail from '@/pages/detail'
import store from '../store'

Vue.use(Router)

let router
export default router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/new'
    },
    {
      path: '/login', // 登录
      name: 'login',
      component: Login
    },
    {
      path: '/profile', // 个人中心
      name: 'profile',
      component: Profile,
      meta: {
        auth: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      // 新闻列表
      path: '/:type/:page(\\d+)?', // 要加上 \d? 要不然只输入 /new时匹配不到这个路由
      name: 'new',
      component: News
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断是否已登录(有token)，没登录且跳的是需要权限的页面，则不允许跳
  if (to.meta.auth) {
    console.log('store', store.getters)
    if (store.getters['user/isLogin']) {
      return next()
    }
    router.push('/login')
  }
  else {
    next()
  }
})
