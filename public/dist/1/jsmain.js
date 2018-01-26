// import React from 'react'
import ReactDOM from 'react-dom'


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
    

// const components = [{
//     com: {
//         component_desc: "文本",
//         component_name: "text",
//         component_path: "../components/js/text/index"
//     }
// },{
//     com: {
//         component_desc: "文本",
//         component_name: "text",
//         component_path: "../components/js/text/index"
//     }
// }]
const coms = [object Object],[object Object]
class App extends React.Component {
    render() {
        const coms = coms.map((com, index) => {
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