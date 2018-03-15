import React from 'react'
import '../../../style/layout.less'

export default class Layout extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
        this.state = {
            url: Object.keys(this.config.content.value)[0]
        }
    }

    changeUrl(ev) {
        this.setState({
            url: ev.target.innerHTML
        })
    }

    componentDidMount() {
        const iframe = document.getElementById('iframe')
        const wrapper = document.getElementsByClassName('layout-iframe')[0]
        iframe.width = wrapper.offsetWidth
        var bHeight = iframe.contentWindow.document.body.scrollHeight
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight
        console.log(bHeight, dHeight)
    }

    render() {
        console.log(this.config.content.value)
        return (
            <div className="layout-wrapper">
                <div className="layout-side">
                    {
                        this.config.content.value ? Object.keys(this.config.content.value).map((key, index) => {
                            if (key === this.state.url) {
                                return (
                                    <span key={index} className="layout-item layout-select" onClick={(ev) => this.changeUrl(ev)}>{key}</span>
                                )
                            }
                            return (
                                <span key={index} className="layout-item" onClick={(ev) => this.changeUrl(ev)}>{key}</span>
                            )
                        }) : null
                    }
                </div>
                <div className="layout-iframe">
                    <iframe src={this.config.content.value[this.state.url]} id="iframe" ref="iframe" width="600px" height="800px" frameBorder="0"></iframe>
                </div>
            </div>
        )
    }
}