const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const cors = require('koa-cors')
// const ejs = require('ejs')
const koaStatic = require('koa-static')
const favicon = require('koa-favicon')
const bodyParser = require('koa-bodyparser');
const path = require('path')
const index = require('./routers/index')
const create = require('./routers/create')
const pageInfo = require('./routers/pageInfo')
const jserr = require('./routers/jserr')
const excel = require('./routers/excel')

app.use(koaStatic(
    path.join(__dirname, './public')
))

app.use(bodyParser())

app.use(cors())

app.use(favicon(__dirname + './public/favicon.ico'))

app.use(views(path.join(__dirname, './templates'), {
  extension: 'ejs'
}))

app.use(index.routes())
app.use(create.routes())
app.use(pageInfo.routes())
app.use(jserr.routes())
app.use(excel.routes())

app.listen(4040)

console.log('listen 4040')
