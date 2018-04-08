import React from 'react'
import '../../../style/sidebar.less'
import Menu from '../menu/index'

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
        this.state = {
            url: this.config.content.value ? this.config.content.value[Object.keys(this.config.content.value)[0]] : ''
        }
    }

    changeUrl(ev, obj) {
        this.setState({
            url: obj[ev.target.innerHTML]
        })
    }

    componentDidMount() {
        try{
            const iframe = document.getElementById('iframe')
            const wrapper = document.getElementsByClassName('sidebar-iframe')[0]
            iframe.width = wrapper.offsetWidth
        } catch(err) {
            console.warn(err)
        }
    }

    selectIcon = (key) => {
        if (key === '日志监控') {
            return <i className="icon icon-dashboard"></i>
        } else if (key === '流量转化') {
            return <i className="icon icon-liuliang"></i>
        } else if (key === '盈利分布') {
            return <i className="icon icon-yingli"></i>
        }
    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-side">
                    {
                        this.config.content.value ? Object.keys(this.config.content.value).map((key, index) => {
                            if(typeof this.config.content.value[key] === 'string') {
                                const child = this.config.content.value
                                if (child[key] === this.state.url) {
                                    return (
                                        <span key={index} className="sidebar-item sidebar-select">
                                            { this.selectIcon(key) }
                                            <span onClick={(ev) => this.changeUrl(ev, child)}>{key}</span>
                                        </span>
                                    )
                                }
                                return (
                                    <span key={index} className="sidebar-item" >
                                        { this.selectIcon(key) }
                                        <span onClick={(ev) => this.changeUrl(ev, child)}>{key}</span>
                                    </span>
                                )
                            } else if (typeof this.config.content.value[key] === 'object') {
                                const child = this.config.content.value[key]
                                return (
                                    <Menu type={key} key={key}>
                                        { 
                                            Object.keys(child).map((key, index) => {
                                                if (child[key] === this.state.url) {
                                                    return (
                                                        <span key={index} className="sidebar-item-child sidebar-select">
                                                            <i className="icon icon-user"></i>
                                                            <span onClick={(ev) => this.changeUrl(ev, child)}>{key}</span>
                                                        </span>
                                                    )
                                                }
                                                return (
                                                    <span key={index} className="sidebar-item-child">
                                                        <i className="icon icon-user"></i>
                                                        <span onClick={(ev) => this.changeUrl(ev, child)}>{key}</span>
                                                    </span>
                                                )
                                            }) 
                                        }
                                    </Menu>
                                )
                            }
                        }) : null
                    }
                </div>
                <div className="sidebar-iframe">
                    { this.state.url !== '' ? <iframe src={this.state.url} id="iframe" ref="iframe" width="1000px" height="800px" frameBorder="0"></iframe> : null}
                </div>
            </div>
        )
    }
}