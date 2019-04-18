exports.index = async (ctx) => {
    const Vue = require('vue')
    const app = new Vue({
        data: {
            msg: 'baby'
        },
        template: '<div>hello world {{msg}}</div>'
    })
    const renderer = require('vue-server-renderer').createRenderer()
    ctx.body = await renderer.renderToString(app)
}
