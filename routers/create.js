const build = require('../build/build')
const router = require('koa-router')()
router.post('/create', async (ctx, next) => {
    const pageId = ctx.request.body.pageId.pageId
    const coms = ctx.request.body.config
    await build(pageId, coms)
    ctx.body = {
        data: 'ppp'
    }
    next()
})
module.exports = router