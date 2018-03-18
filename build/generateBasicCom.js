const fs = require('fs')
const config = require('../scripts/config')

function generate(config, bool) {
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
            this.edit = this.edit.bind(this)
            this.close = this.close.bind(this)
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

        edit() {
            this.props.renderModal(this.props.com.com)
        }

        close() {
            this.props.removeComponent(this.props.com)
        }

        render () {
            return (
                <div className="basic-component">
                    {
                        ${bool} ? 
                        (<div className="btn-nav">
                            <img src="/img/edit.png" className="btn-oper" onClick={this.edit}/>
                            <img src="/img/close.png" className="btn-oper" onClick={this.close}/>
                        </div>) : null
                    }
                    { this.state.com ? React.createElement(this.state.com, this.props) : null }     
                </div>
            )
        }
    }
    `
    return register
}
const register = generate(config, true)
const path = './scripts/src/component.js'
fs.writeFile(path, register, function () {
    console.log('generate components done')
})
module.exports = generate