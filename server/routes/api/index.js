const KoaRouter = require('koa-router')
const loginController = require('../../controller/login')


const router = new KoaRouter()

router.get('/user/:id', loginController.getUserId)


module.exports = router
