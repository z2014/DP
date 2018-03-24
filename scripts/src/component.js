
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
                        true ? 
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
    