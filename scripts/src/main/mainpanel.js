import '../../style/index'
import React from 'react'
import { DropTarget } from 'react-dnd'
import Component from '../component'
import { observer } from 'mobx-react'

const ItemTypes = {
    DRAGDIV: 'dragdiv'
}

const squareTarget = {
    drop (props, monitor, component) {
        const item = monitor.getItem()
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

@observer
@DropTarget(ItemTypes.DRAGDIV, squareTarget, collect)
export default class MainPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            coms: []
        }
    }

    handleDrop (item) {
        this.state.coms.push(item)
        this.setState({})
    }

    render () {
        const { connectDropTarget } = this.props
        let coms = this.props.store.config.map((com, index) => {
            return <Component com={com} key={index} />
        })
        return connectDropTarget(
            <div className='mainpanel'>
                这是主页
                { coms }
            </div>
        )
    }
}
