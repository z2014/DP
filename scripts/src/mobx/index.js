import { observable, computed, action, useStrict } from 'mobx'

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

    @action addChildElement(child, index, component_id) {
        // layout 组件添加子元素
        this.config.slice().map(com => {
            if (com.com.component_id === component_id) {
                if (com.com.component_child) {
                    if (Array.isArray(com.com.component_child[index].slice())) {
                        com.com.component_child[index].push(child)
                    } else{
                        com.com.component_child[index] = [child]
                    }
                } else{
                    com.com.component_child = {}
                    com.com.component_child[index] = [child]
                }
            }
        })
    }

    @action deleteChildElement(child, index, component_id) {
        this.config.slice().map(com => {
            if (com.com.component_id === component_id) {
                com.com.component_child[index].splice(com.com.component_child[index].indexOf(child), 1)
            }
        })
    }

    @action updateChildConfig(parentId, index, config) {
        // 更新layout子元素配置
        this.config.slice().map(com => {
            if (com.com.component_id === parentId) {
                com.com.component_child[index].slice().map(child => {
                    if (child.com.component_id === config.component_id) {
                        Object.keys(child.com.component_meta).map(key => {
                            if (config.hasOwnProperty(key)) {
                                child.com.component_meta[key].value = config[key]
                            }
                        })
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