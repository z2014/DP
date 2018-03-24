import '../../style/index'
import React from 'react'
import { DragSource } from 'react-dnd'
import TabBar from './tabBar'

export default class SideBar extends React.Component {
    renderCom (coms, type) {
        return coms.map((com, index) => {
            // 区分layout和普通组件的区别
            if (type === 'layout' && com.component_type === 'layout') {
                return <LayoutDiv com={com} key={index} />
            }
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
                <TabBar type="筛选类">
                    { this.renderCom(this.props.config, 'filter') }
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


const ItemTypes2 = {
    DRAGDIV: 'layoutdiv'
}

function collect2 (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ItemTypes2.DRAGDIV, DivSource, collect2)
class LayoutDiv extends React.Component {
    render () {
        const { connectDragSource, isDragging } = this.props
        return connectDragSource(
            <div className="com" style={{ opacity: isDragging ? 0.5 : 1 }}>{ this.props.com.component_desc }</div>
        )
    }
}