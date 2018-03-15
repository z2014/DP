import React from 'react'

export default class Link extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }
    render() {
        return (
            <div>
                <a href={this.config.url.value ? this.config.url.value : ''} target={this.config.location.value === 'yes' ? 'blank' : ''}>
                    { this.config.text.value }
                </a>
            </div>
        )
    }
}