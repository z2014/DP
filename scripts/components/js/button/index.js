import React from 'react'

export default class Button extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }
    computedConfig = () => {
        const style = {
            backgroundColor: '#1890ff',
            color: 'white',
            borderRadius: '10px',
            padding: '5px',
            cursor: 'pointer',
            textAlign: 'center',
        }
        switch(this.config.size.value) {
        case 'big': style.fontSize = '18px'; style.width = '60px'; break
        case 'middle': style.fontSize = '16px';style.width = '50px'; break
        case 'small': style.fontSize = '14px';style.width = '40px'; break
        default: style.fontSize = '14px'
        }
        switch(this.config.location.value) {
        case 'left': break
        case 'center': style.margin = '0 auto'; break
        case 'right': style.float = 'right'; break
        default: style.margin = '0 auto'
        }
        return style
    }
    render() {
        const style = this.computedConfig()
        return(
            <div style={style}>
                { this.config.content.value }
            </div>
        )
    }
}