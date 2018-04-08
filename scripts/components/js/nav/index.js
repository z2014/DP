import React from 'react'

export default class Nav extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }
    render() {
        return (
            <div style={{ width: '100%', lineHeight: '40px', textAlign: 'center', boxShadow: '0px 5px 5px #ccc', fontWeight: 'bold'}}>
                { this.config.content.value }
            </div>
        )
    }
}