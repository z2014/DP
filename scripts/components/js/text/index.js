import React from 'react'
import '../../../style/text.less'

export default class Text extends React.Component {
    constructor (props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }
    render () {
        return (
            <div className="text">
                { this.config.content.value }
            </div>
        )
    }
}
