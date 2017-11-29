import Input from './input'
import config_text from '../meta/config_text'

const render = (config) => {
    const keys = Object.keys(config)
    const coms = []
    keys.map(key => {
        if (config[key].type === 'string') {
            coms.push(<Input />)
            return coms
        }
    })
    return (
        <div></div>
    )
}