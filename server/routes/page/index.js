const KoaRouter = require('koa-router')
const router = new KoaRouter()
const homeController = require('../../controller/home')

router.get('/', homeController.index)

module.exports = router