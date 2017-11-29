import '../../style/index'
import React from 'react'
import { DragSource } from 'react-dnd'

export default class SideBar extends React.Component {
    renderCom (coms) {
        return coms.map((com, index) => {
            return <DragDiv com={com} key={index}/>
        })
    }
    render () {
        return (
            <div className="sidebar">
                { this.renderCom(this.props.config) }
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
        return {}// com}
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
