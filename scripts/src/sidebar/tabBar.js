import React from 'react'

export default class TabBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    componentDidMount() {
        this.refs.wrapper.style.height = `${this.refs.wrapper.offsetHeight}px`
        this.refs.icon.style.transition = 'all 0.5s 0s linear'
        this.refs.wrapper.style.transition = 'all 0.5s 0s linear'
    }
    toggle = () => {
        const deg = this.refs.icon.style.transform
        if (deg === 'rotate(180deg)') {
            this.refs.icon.style.transform = 'rotate(0deg)'
            const bheight = this.refs.wrapper.offsetHeight + this.refs.child.offsetHeight
            this.refs.wrapper.style.height = `${bheight}px`
        } else {
            this.refs.icon.style.transform = 'rotate(180deg)'
            this.refs.wrapper.style.height = '42px'
        }
        
        
    }
    render() {
        return (
            <div ref="wrapper" className="tab-child">
                <div className="tab-bar" >
                    <span>{ this.props.type }</span>
                    <i className="icon icon-up" onClick={this.toggle} ref="icon"></i>
                </div>
                <div className="tab-child" ref="child">
                    { this.props.children }
                </div>
            </div>
        )
    }
}