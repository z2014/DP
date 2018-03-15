import React from 'react'

export default class Text extends React.Component {
    constructor (props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }
    render () {
        const style = { textAlign: this.config.style.value ? this.config.style.value : 'center' }
        return (
            <div className="text" style={style}>
                { this.config.content.value }
            </div>
        )
    }
}
