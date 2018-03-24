const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const generate = require('./generateBasicCom')
const config = require('../scripts/config')
const sh = require('shelljs')
const createConfig = require('./webpack_config')

module.exports = function build(pageId, coms) {
    const component = generate(config, false)
    const jsPath = path.join(__dirname + '/../public/dist')
    const template = path.join(__dirname + '/../scripts/src/build.js')
    ejs.renderFile(template, {
        component: component,
        components: `'${JSON.stringify(coms)}'`
    }, (err, str) => {
        if (err) console.log(err)
        fs.exists(`${jsPath}/${pageId}`, function(exists) {
            if (exists) {
                fs.writeFileSync(`${jsPath}/${pageId}/jsmain.js`, str)
            } else {
                sh.exec(`cd ${jsPath} && mkdir ${pageId}`)
                fs.writeFileSync(`${jsPath}/${pageId}/jsmain.js`, str)
            }
        })
    })
    const entry = `../public/dist/${pageId}/jsmain.js`
    const output = `${__dirname}/../public/dist/${pageId}`
    const webpackConfig = createConfig(entry, output, pageId)
    try {
        var compiler = webpack(webpackConfig)
        compiler.run((err, status) => {
            if (err) console.log(err)
        })

    } catch(err) {
        console.log(err)
    }
    // console.log(compiler)
}