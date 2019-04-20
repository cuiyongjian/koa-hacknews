const KoaRouter = require('koa-router')
const userController = require('../../controller/user')
const jwt = require('koa-jwt')


const router = new KoaRouter({
  prefix: '/api'
})
// 给需要鉴权的接口路由加上一个 koa-jwt 中间件

router.post('/user/login', userController.login)
router.use(jwtError()).use(jwt({secret: 'cyj'})) // 中间件会作用到后面注册的路由上
router.get('/user/:username', userController.getUserByUserName)
router.post('/user', userController.addUser)



module.exports = router




function jwtError() {
  return async(ctx, next) => {
    // 捕获 jwt鉴权错误，给出友好提醒
    try {
      await next()
    }
    catch(err) {
      console.log('err', err)
      if (err.status === 401) {
        ctx.status = 401
        ctx.body = {
          status: -401,
          msg: 'token校验失败'
        }
      }
    }
  }
}
