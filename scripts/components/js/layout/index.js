import React from 'react'
import '../../../style/layout.less'
import { DropTarget, DragSource } from 'react-dnd'
import Component from '../../../src/component.js'
import renderMeta from '../../../JsonSchema/index'
import Modal from '../../../src/main/modal'

export default class Layout extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }

    render() {
        return (
            <div className="layout-wrapper">
                {
                    this.config.content.value ? Object.keys(this.config.content.value).map((key, index) => {
                        const style = { flex: `${this.config.content.value[key]}`}
                        return <LayoutItem style={style} key={index} {...this.props} index={index}/>
                    }) : null
                }
            </div>
        )
    }
}


const ItemTypes = {
    DRAGDIV: 'dragdiv'
}

const squareTarget = {
    drop (props, monitor, component) {
        const item = monitor.getItem()
        item.com.component_id = Symbol(item.component_name)
        props.store.addChildElement(item, props.index, props.com.com.component_id)
        // component.handleDrop(item)
        // props.store.addConfig(item)
    }
}

function collect (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

// layout 作为承载容器

@DropTarget(ItemTypes.DRAGDIV, squareTarget, collect)
class LayoutItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            coms: [],
            meta: 'aa',
            isshow: false,
            metaVal: {}
        }
    }

    removeComponent = (config) => {
        this.props.store.deleteChildElement(config, this.props.index, this.props.com.com.component_id)
        this.setState({})
    }

    renderModal = (config) => {
        const self = this
        const meta = renderMeta({config, setMetaVal: self.setMetaVal})
        this.setState({
            meta,
            isshow: true
        })
    }

    confirm = () => {
        this.props.store.updateChildConfig(this.props.com.com.component_id, this.props.index, this.state.metaVal)
        this.setState({
            isshow: false
        })
    }

    cancel = () => {
        this.setState({
            isshow: false
        })
    }

    setMetaVal = (val) => {
        this.setState({
            metaVal: val
        })
    }

    render() {
        const { connectDropTarget } = this.props
        return connectDropTarget(
            <div style={this.props.style} className="layout-item">
                {
                    this.props.com.com.component_child && this.props.com.com.component_child[this.props.index] ? this.props.com.com.component_child[this.props.index].map((child, index) => {
                        return <Component com={child} key={index} removeComponent={this.removeComponent} renderModal={this.renderModal} store={this.props.store}/>
                    }) : null
                }
                {
                    this.state.isshow ? 
                        <Modal>
                            { this.state.meta }
                            <div className="btn-bottom">
                                <span className="confirm-btn" onClick={this.confirm}>确认</span>
                                <span className="cancel-btn" onClick={this.cancel}>取消</span>
                            </div>
                        </Modal> : null
                }
            </div>
        )
    }
}