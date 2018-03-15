import React from 'react'

export default class TabBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    toggle = () => {
        this.refs.icon.style.transform = 'rotate(180deg)'
        this.refs.icon.style.transition = 'all 0.5s 0s linear'
        this.refs.child.style.height = '0px'
    }
    render() {
        return (
            <div>
                <div className="tab-bar" >
                    <span>{ this.props.type }</span>
                    <i className="icon" onClick={this.toggle} ref="icon"></i>
                </div>
                <div className="tab-child" ref="child">
                    { this.props.children }
                </div>
            </div>
        )
    }
}