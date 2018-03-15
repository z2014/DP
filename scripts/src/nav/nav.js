import '../../style/index'
import React from 'react'
import { buildJs, savePage } from '../request/api'
import { inject } from 'mobx-react'

@inject('store')
export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    build = () => {
        const config = this.props.store.config.slice()
        console.log(config)
        buildJs(window.info, config)
    }
    save = () => {
        const config = this.props.store.config.slice()
        savePage(config, window.info.pageId)
    }

    preview = () => {
        window.open('//localhost:4040/preview/pc/' + window.info.pageId)
    }
    render () {
        return (
            <div className='nav'>
                拖动生成页面工具
                <span className="preview-btn" onClick={this.save}>保存</span>
                <a className="preview-btn" onClick={this.build}
                >生成</a>
                <a  onClick={this.preview}
                    className="preview-btn"
                >预览</a>
            </div>
        )
    }
}
