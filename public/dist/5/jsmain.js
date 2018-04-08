// import React from 'react'
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


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
        
            if (children.com.component_name === 'barChart') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/bar/index')
                        ctx.setState({})
                    }, 'barChart')
                }
            }
        
            if (children.com.component_name === 'lineChart') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/line/index')
                        ctx.setState({})
                    }, 'lineChart')
                }
            }
        
            if (children.com.component_name === 'mapChart') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/map/index')
                        ctx.setState({})
                    }, 'mapChart')
                }
            }
        
            if (children.com.component_name === 'funnelChart') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/funnel/index')
                        ctx.setState({})
                    }, 'funnelChart')
                }
            }
        
            if (children.com.component_name === 'link') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/link/index')
                        ctx.setState({})
                    }, 'link')
                }
            }
        
            if (children.com.component_name === 'sidebar') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/sidebar/index')
                        ctx.setState({})
                    }, 'sidebar')
                }
            }
        
            if (children.com.component_name === 'datePicker') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/datePicker/index')
                        ctx.setState({})
                    }, 'datePicker')
                }
            }
        
            if (children.com.component_name === 'searchInput') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/searchInput/index')
                        ctx.setState({})
                    }, 'searchInput')
                }
            }
        
            if (children.com.component_name === 'layout') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/layout/index')
                        ctx.setState({})
                    }, 'layout')
                }
            }
        
            if (children.com.component_name === 'button') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/button/index')
                        ctx.setState({})
                    }, 'button')
                }
            }
        
            if (children.com.component_name === 'affix') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/affix/index')
                        ctx.setState({})
                    }, 'affix')
                }
            }
        
            if (children.com.component_name === 'nav') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/nav/index')
                        ctx.setState({})
                    }, 'nav')
                }
            }
        
            if (children.com.component_name === 'table') {
                return (ctx) => {
                    require.ensure([], (require) => {
                        ctx.state.com = require('/Users/a2014/Desktop/project/scripts/components/js/table/index')
                        ctx.setState({})
                    }, 'table')
                }
            }
        
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
                        false ? 
                        (<div className="btn-nav">
                            <i className="icon icon-edit btn-oper" onClick={this.edit} />
                            <i className="icon icon-close btn-oper" onClick={this.close} />
                        </div>) : null
                    }
                    { this.state.com ? React.createElement(this.state.com, this.props) : null }     
                </div>
            )
        }
    }
    


const components = '[{"com":{"component_name":"nav","component_path":"components/js/nav/index","component_desc":"顶部栏","component_meta":{"content":{"name":"文本内容","type":"string","value":"用户画像"}},"component_type":"layout","component_id":0}},{"com":{"component_name":"layout","component_path":"components/js/layout/index","component_desc":"自定义布局","component_meta":{"url":{"name":"获取数据","type":"string"},"content":{"name":"定义布局","type":"jsoneditor"}},"component_type":"layout","component_id":1,"component_child":{"0":[{"com":{"component_name":"table","component_path":"components/js/table/index","component_desc":"表格","component_meta":{"url":{"name":"获取数据","type":"string","value":"https://www.easy-mock.com/mock/5aadcefad923ab62b0bb4f4b/project/table"},"options":{"name":"表头自定义","type":"jsoneditor","value":{"name":"名字","age":"年龄","phone":"电话","date":"出生日期","email":"邮箱","address":"出生地"}}},"component_type":"chart"}}]}}}]'

@DragDropContext(HTML5Backend)
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