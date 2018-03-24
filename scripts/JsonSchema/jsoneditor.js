import React from 'react'
import JSONEditor from 'jsoneditor'

export default class JsonEditor extends React.Component{
    componentDidMount() {
        const self = this
        var container = document.getElementById('json')
        var options = {
            onChange: function () {
                console.log(editor.get())
                self.props.metaVal[self.props.label] = editor.get()
                self.props.setMetaVal(self.props.metaVal)
            }
        }
        var editor = new JSONEditor(container, options)
        editor.set(this.props.value ? this.props.value : {'key': 'value'})
    }
    render() {
        return (
            <div className="meta-wrapper">
                <span className="meta-text">{ this.props.meta.name }</span>
                <span className="meta-input">
                    <div id="json" style={{width: '500px',height: '200px'}}></div>
                </span>
            </div>
        )
    }
}