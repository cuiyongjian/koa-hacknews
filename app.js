const config = require('./server/config')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser') // 根据请求类型解析请求体
const koaLogger = require('koa-logger') // 打印请求响应基础流水日志
const koaJson = require('koa-json') // 响应为json时 打印响应的json
const db = require('./server/middleware/db')

// 实例化 Koa
const app = new Koa()

// 异常处理 (主要负责记录日志到我们自定义的存储平台，默认koa的app.onerror只会通过 console.error 打印)
app.on('error', (err, ctx) => {
  console.log('出错了', err, ctx)
  if (ctx) {
    ctx.status = err.status || 500
  }
  ctx.body = '出错了'
})

// 加载必要中间件
app.use(bodyParser())
app.use(koaLogger())
app.use(koaJson({ pretty: false, param: 'pretty' })) // 美化json响应，这样浏览器就不用装什么json美化插件了。(不过建议还是装吧)
app.use(db)

// 业务路由
api.routes(app)

// listen 本质上调用的 Server.listen，同时返回的也是Server本身。 listen可以传入一个回调函数，在listening事件触发时调用, listening触发后可以读取server对象获取监听的信息。
const server = app.listen(config.port, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('listening at ', server.address())
})
