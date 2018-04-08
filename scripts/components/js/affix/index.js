import React from 'react'
import '../../../style/affix.less'

export default class Affix extends React.Component{
    backToTop() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="affix" onClick={() => this.backToTop()}>返回顶部</div>
        )
    }
}