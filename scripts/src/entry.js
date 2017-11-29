import React from 'react'
import ReactDOM from 'react-dom'
import '../style/index'
import Nav from './nav/nav'
import SideBar from './sidebar/sidebar'
import MainPanel from './main/mainpanel'
import config from '../config'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
class App extends React.Component {
    render () {
        return (
            <div>
                <Nav />
                <div className='wrapper'>
                    <SideBar config={config} />
                    <MainPanel />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
