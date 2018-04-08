const router = require('koa-router')()
const xlsx = require('node-xlsx')

router.post('/excel', async (ctx, next) => {
    const name = ctx.request.body.name.replace('&nbsp;', '')
    console.log(name)
    let val = ''
    const obj = xlsx.parse(__dirname + '/../public/test.xls')
    obj.map(data => {
        data.data.map(key => {
            if (key[0].trim() == name) {
                val = key[7]
                console.log(val)
                return
            }
        })
    })
    var a = val ? val : 'b'
    ctx.body = {
        data: a.toUpperCase()
    }
    next()
})

router.get('/excel', async (ctx, next) => {
    const obj = xlsx.parse(__dirname + '/../public/test.xls')
    ctx.body = {
        data: 'ppp'
    }
    next()
})

module.exports = router

// for(var i = 0; i < 40 ; i++){
    // $.post('http://localhost:4040/excel', {name: document.getElementById('D_title').innerHTML}, function(res) {
    //     var aa = JSON.parse(res)
    //     var value = aa.data.toUpperCase()
    //     var uu = 'D_' + value
    //     document.getElementById(uu).checked = true

    //         var e=document.createEvent("MouseEvents");//创建事件对象              
    //     e.initEvent('click',false,false);
    //     document.getElementById('submitButton_id').dispatchEvent(e);
        
    // })
// }
// $.post('http://localhost:4040/excel', {name: document.getElementById('Duo_title').innerHTML}, function(res) {
//         var aa = JSON.parse(res)
//         console.log(aa)
//         var arr = aa.data.split(',')
//         for(var i=0;i<arr.length;i++){
//              var uu = 'Duo_' + arr[i]
//             document.getElementById(uu).checked = true
//         }
// var e=document.createEvent("MouseEvents");//创建事件对象              
//         e.initEvent('click',false,false);
//         document.getElementById('submitButton_id').dispatchEvent(e);
//     })

