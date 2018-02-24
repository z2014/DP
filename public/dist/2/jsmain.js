// import React from 'react'
import ReactDOM from 'react-dom'


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
            
            if (children.com.component_name === 'text') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/text/index')
                        ctx.setState({})
                    }, 'text')
                }
            }
        
            if (children.com.component_name === 'pieChart') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/pie/index')
                        ctx.setState({})
                    }, 'pieChart')
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
                    <div className="btn-nav">
                        <i className="iconfont icon-MapEditing"></i>
                    </div>
                    { this.state.com ? React.createElement(this.state.com, this.props) : null }     
                </div>
            )
        }
    }
    


const components = '[{"com":{"component_name":"text","component_path":"components/js/text/index","component_desc":"文本"}}]'

class App extends React.Component {
    render() {
        let test = JSON.parse(components)
        const coms = test.map((com, index) => {
            return <Component com={com} key={index} />
        })
        return (
            <div>
            {coms}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))