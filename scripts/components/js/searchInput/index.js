import React from 'react'
import '../../../style/searchinput.less'

export default class SearchInput extends React.Component{
    render() {
        return (
            <div>
                <div contentEditable='true' className="searchinput">
                    <i className="icon icon-search"></i>
                </div>
            </div>
        )
    }
}