const router = require('koa-router')()
router.get('/:operation/pc/:id', async (ctx, next) => {
    const pageId = ctx.params.id
    const operation = ctx.params.operation
    await ctx.render(`${operation}`, {
        pageId: pageId
    })
    next()
})

module.exports = router
