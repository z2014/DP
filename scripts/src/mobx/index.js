import { observable, computed, action, useStrict } from 'mobx'
import { getPageInfo } from '../request/api'

useStrict(true)

class Store {
    @observable config = []

    get configJson() {
        return this.config
    }

    @action addConfig(config) {
        this.config.push(config)
    }

    @action deleteConfig(config) {
        this.config.splice(this.config.indexOf(config), 1)
    }

    @action updateConfig(metaVal) {
        this.config.slice().map(com => {
            if (com.com.component_id === metaVal.component_id) {
                const keys = Object.keys(com.com.component_meta)
                keys.map(key => {
                    if (metaVal.hasOwnProperty(key)) {
                        com.com.component_meta[key].value = metaVal[key]
                    }
                })
            }
        })
    }

    @computed get getConfig() {
        return this.config
    }
    
}

const store = new Store()
export default store