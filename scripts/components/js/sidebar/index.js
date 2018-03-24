import React from 'react'
import '../../../style/sidebar.less'

export default class Sidebar extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
        this.state = {
            url: this.config.content.value ? Object.keys(this.config.content.value)[0] : ''
        }
    }

    changeUrl(ev) {
        this.setState({
            url: ev.target.innerHTML
        })
    }

    componentDidMount() {
        try{
            const iframe = document.getElementById('iframe')
            const wrapper = document.getElementsByClassName('layout-iframe')[0]
            iframe.width = wrapper.offsetWidth
        } catch(err) {
            console.warn(err)
        }
    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="sidebar-side">
                    {
                        this.config.content.value ? Object.keys(this.config.content.value).map((key, index) => {
                            if (key === this.state.url) {
                                return (
                                    <span key={index} className="sidebar-item sidebar-select" onClick={(ev) => this.changeUrl(ev)}>{key}</span>
                                )
                            }
                            return (
                                <span key={index} className="sidebar-item" onClick={(ev) => this.changeUrl(ev)}>{key}</span>
                            )
                        }) : null
                    }
                </div>
                <div className="sidebar-iframe">
                    { this.state.url !== '' ? <iframe src={this.config.content.value[this.state.url]} id="iframe" ref="iframe" width="600px" height="800px" frameBorder="0"></iframe> : null}
                </div>
            </div>
        )
    }
}