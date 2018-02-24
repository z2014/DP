const router = require('koa-router')()
router.post('/post/jserr', async (ctx, next) => {
    const jserr = ctx.request.body
    console.log('jserr', jserr)
    ctx.body = {
        data: jserr
    }
    next()
})
module.exports = router