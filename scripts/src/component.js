
import React from 'react'
export default class Component extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            com: ''
        }
    }

    renderChild(children) {
        
        if (children.com.component_name === 'text') {
            return (ctx) => {
                require.ensure([], (require) => {
                    ctx.state.com = require('../components/js/text/index')
                    ctx.setState({})
                }, '文本')
            }
        }
	
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
