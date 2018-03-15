import '../../style/index'
import React from 'react'
import { DragSource } from 'react-dnd'
import TabBar from './tabBar'

export default class SideBar extends React.Component {
    renderCom (coms, type) {
        return coms.map((com, index) => {
            if (com.component_type === type) {
                return <DragDiv com={com} key={index}/>
            }
        })
    }
    render () {
        return (
            <div className="sidebar">
                <TabBar type="布局类">
                    { this.renderCom(this.props.config, 'layout') }
                </TabBar>
                <TabBar type="图表类">
                    { this.renderCom(this.props.config, 'chart') }
                </TabBar>
            </div>
        )
    }
}

const ItemTypes = {
    DRAGDIV: 'dragdiv'
}

const DivSource = {
    beginDrag (props) {
        return {
            com: props.com
        }
    },
    endDrag (props, monitor) {
        // const item = monitor.getItem()
        // let com = require('../components/js/text/index')
        // console.log('com', com)
        return {}
    }
}

function collect (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ItemTypes.DRAGDIV, DivSource, collect)
class DragDiv extends React.Component {
    render () {
        const { connectDragSource, isDragging } = this.props
        return connectDragSource(
            <div className="com" style={{ opacity: isDragging ? 0.5 : 1 }}>{ this.props.com.component_desc }</div>
        )
    }
}
