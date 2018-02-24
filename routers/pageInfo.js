const router = require('koa-router')()
const page = require('../models/page')

router.get('/pageinfo', async (ctx, next) => {
    const pageId = ctx.request.query.pageId
    const result = await page.findOne({
        where: {
            pageId
        }
    })
    ctx.body = {
        data: result
    }
    next()
})

router.post('/pageinfo', async (ctx, next) => {
    try{
        const pageInfo = JSON.stringify(ctx.request.body.pageInfo)
        const pageId = ctx.request.body.pageId
        const result = await page.findOne({
            where: {
                pageId
            }
        })
        if (result) {
            result.pageInfo = pageInfo
            result.save()
        } else {
            const createRes = await page.create({
                pageInfo,
                pageId
            })
        }
        ctx.body = {
            code: 1,
            data: ''
        }
        next()
    } catch(err) {
        ctx.body = {
            code: 2,
            msg: JSON.stringify(err)
        }
        next()
    }
})

module.exports = router