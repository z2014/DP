import React from 'react'

export default class Pagination extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="pagination-wrapper">
                <span className="pagination-btn back-btn" onClick={() => this.props.clickBtn(true)}>
                    <i className="icon icon-left" />
                </span>
                <span className="pagination-btn">
                    { this.props.page }
                </span>
                <span className="pagination-btn" onClick={() => this.props.clickBtn(false)}>
                    <i className="icon icon-right" />
                </span>
            </div>
        )
    }
}