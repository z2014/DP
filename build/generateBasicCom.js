const fs = require('fs')
const config = require('../scripts/config')

function generate(config) {
    let coms = ''
    config.map(com => {
        const str = `
            if (children.com.component_name === '${com.component_name}') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('${process.cwd()}/scripts/${com.component_path}')
                        ctx.setState({})
                    }, '${com.component_name}')
                }
            }
        `
        coms += str
    })
    let register = `
    // 来自于generate.js，模版生成
    import React from 'react'
    export default class Component extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                com: ''
            }
        }

        renderChild(children) {
            ${coms}
        }

        componentDidMount() {
            if (this.props.com) {
                let fn = this.renderChild(this.props.com)
                fn(this)
            }
        }

        render () {
            return (
                <div className="basic-component">
                    { this.state.com ? React.createElement(this.state.com, this.props) : null }     
                </div>
            )
        }
    }
    `
    return register
}
const register = generate(config)
const path = './scripts/src/component.js'
fs.writeFile(path, register, function () {
    console.log('generate components done')
})
module.exports = generate