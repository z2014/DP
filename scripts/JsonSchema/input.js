import React from 'react'
export default class Input extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    setValue(ev) {
        this.props.metaVal[this.props.label] = ev.target.value
        this.props.setMetaVal(this.props.metaVal)
    }
    render() {
        return (
            <div className="meta-wrapper">
                <span className="meta-text">{ this.props.meta.name }</span>
                <span className="meta-input">
                    <input onChange={(val) => this.setValue(val)} value={this.props.value}/>
                </span>
            </div>
        )
    }
}