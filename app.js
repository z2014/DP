const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
// const ejs = require('ejs')
const koaStatic = require('koa-static')
// const router = require('koa-router')
const favicon = require('koa-favicon')
const path = require('path')
const index = require('./routers/index')
const create = require('./routers/create')

app.use(koaStatic(
    path.join(__dirname, './public')
))

app.use(favicon(__dirname + './public/favicon.ico'))

app.use(views(path.join(__dirname, './templates'), {
  extension: 'ejs'
}))

app.use(index.routes())
app.use(create.routes())

app.listen(4040)

console.log('listen 4040')
