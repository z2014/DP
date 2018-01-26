const build = require('../build/build')
const router = require('koa-router')()
router.post('/create', async (ctx, next) => {
    await build(1)
    ctx.body = {
        data: 'ppp'
    }
    next()
})
module.exports = router