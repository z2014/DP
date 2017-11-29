import React from 'react'
export default class Input extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    setValue(value) {
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <input onChange={(val) => this.setValue(val)}/>
        )
    }
}