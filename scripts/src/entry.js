import React from 'react'
import ReactDOM from 'react-dom'
import '@style/index'
import '@style/reset'
import Nav from './nav/nav'
import SideBar from './sidebar/sidebar'
import MainPanel from './main/mainpanel'
import config from '../config'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { observable, computed, action, useStrict } from 'mobx'
import { observer } from 'mobx-react'
useStrict(true)

class Store {
    @observable config = []

    get configJson() {
        return this.config
    }

    @action addConfig(config) {
        this.config.push(config)
    }
}
const store = new Store()

@observer
@DragDropContext(HTML5Backend)
class App extends React.Component {
    render () {
        const { store } = this.props
        return (
            <div>
                <Nav />
                <div className='wrapper'>
                    <SideBar config={config} />
                    <MainPanel store={store}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App store={store}/>, document.getElementById('app'))
