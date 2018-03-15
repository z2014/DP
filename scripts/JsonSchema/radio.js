import React from 'react'

export default class Radio extends React.Component{
    setValue(ev) {
        this.props.metaVal[this.props.label] = ev.target.value
        this.props.setMetaVal(this.props.metaVal)
    }
    render() {
        return (
            <div className="meta-wrapper">
                <span className="meta-text">{ this.props.meta.name }</span>
                <span className="meta-radio">
                    {
                        Object.keys(this.props.meta.options).map(key => {
                            if (this.props.value === key) {
                                return (
                                    <span key={key}>
                                        <input type="radio" name={this.props.meta.def} value={key} onChange={val => this.setValue(val)} checked/> { this.props.meta.options[key]}
                                    </span>
                                )
                            }
                            return (
                                <span key={key}>
                                    <input type="radio" name={this.props.meta.def} value={key} onChange={val => this.setValue(val)}/> { this.props.meta.options[key]}
                                </span>
                            )
                        })
                    }
                </span>
            </div>
        )
    }
}