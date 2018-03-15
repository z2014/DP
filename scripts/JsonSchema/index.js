import React from 'react'
import Input from './input'
import Radio from './radio'
import JsonEditor from './jsoneditor'

const renderMeta = (props) => {
    const config = props.config.component_meta
    const keys = Object.keys(config)
    const metaVal = {
        component_id: props.config.component_id
    }
    const coms = []
    keys.map(key => {
        if (config[key].type === 'string') {
            coms.push(<Input meta={config[key]} key={key} value={config[key].value} metaVal={metaVal} setMetaVal={props.setMetaVal} label={key}/>)
            return coms
        } else if (config[key].type === 'radio') {
            coms.push(<Radio meta={config[key]} key={key} value={config[key].value} metaVal={metaVal} setMetaVal={props.setMetaVal} label={key}/>)
        } else if (config[key].type === 'jsoneditor') {
            coms.push(<JsonEditor meta={config[key]} key={key} value={config[key].value} metaVal={metaVal} setMetaVal={props.setMetaVal} label={key}/>)
        }
    })
    return (
        <div>
            { coms }
        </div>
    )
}

export default renderMeta