import React from 'react'

export default class modal extends React.Component{
    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    { this.props.children }
                </div>
            </div>
        )
    }
}