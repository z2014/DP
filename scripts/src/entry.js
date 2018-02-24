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
import { observer,Provider } from 'mobx-react'
import store from './mobx/index'
import { getPageInfo } from './request/api'



@observer
@DragDropContext(HTML5Backend)
class App extends React.Component {
    componentDidMount() {
        const self = this
        getPageInfo(window.info.pageId).then(res => {
            console.log('===== pageInfo ======', JSON.parse(res.data.pageInfo))
            const pageinfo = JSON.parse(res.data.pageInfo)
            self.props.store.config = pageinfo
            self.setState({})
        })
    }
    render () {
        const { store } = this.props
        return (
            <Provider store={store}>
                <div>
                    <Nav/>
                    <div className='wrapper'>
                        <SideBar config={config} />
                        <MainPanel/>
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App store={store}/>, document.getElementById('app'))
