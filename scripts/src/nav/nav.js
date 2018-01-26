import '../../style/index'
import React from 'react'
import build from '../request/build'

export default class Nav extends React.Component {
    build() {
        build(window.info || 1)
    }
    render () {
        return (
            <div className='nav'>
                拖动生成页面工具
                <a className="preview-btn" onClick={this.build}
                >生成</a>
                <a  href="//localhost:4040/preview/pc/1"
                    target="blank"
                    className="preview-btn"
                >预览</a>
            </div>
        )
    }
}
