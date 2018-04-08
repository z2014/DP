import '../../style/index'
import React from 'react'
import { DropTarget } from 'react-dnd'
import Component from '../component'
import { observer, inject } from 'mobx-react'
import renderMeta from '../../JsonSchema/index'
import Modal from './modal'

const ItemTypes = {
    DRAGDIV: 'layoutdiv'
}

const squareTarget = {
    drop (props, monitor, component) {
        const item = monitor.getItem()
        item.com.component_id = component.props.store.config.slice().length
        // component.handleDrop(item)
        props.store.addConfig(item)
    }
}

function collect (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

@inject('store')
@observer
@DropTarget(ItemTypes.DRAGDIV, squareTarget, collect)
export default class MainPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            coms: [],
            meta: 'aa',
            isshow: false,
            metaVal: {}
        }
    }

    handleDrop (item) {
        this.state.coms.push(item)
        this.setState({})
    }

    removeComponent = (config) => {
        this.props.store.deleteConfig(config)
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
        this.props.store.updateConfig(this.state.metaVal)
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

    render () {
        const { connectDropTarget } = this.props
        let coms = this.props.store.config.map((com, index) => {
            return <Component com={com} key={com.com.component_id} renderModal={this.renderModal} removeComponent={this.removeComponent} store={this.props.store}/>
        })
        return connectDropTarget(
            <div className='mainpanel'>
                {
                    coms.length !== 0 ?  coms : <div className="main-basic">从左侧拖动组件过来</div>
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
