const router = require('koa-router')()
router.get('/', async (ctx, next) => {
  await ctx.render('backend')
})

module.exports = router
