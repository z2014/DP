import React from 'react'
import request from '../../../src/request/request'

const Wrapper = (ChartInner) => {
    return class Chart extends React.Component{
        constructor(props) {
            super(props)
            this.config = this.props.com.com.component_meta
            this.state = {
                data: {
                    data: []
                }
            }
        }
        componentDidMount() {
            const self = this
            request(this.config.url.value, {
                method: 'GET'
            }).then(val => {
                if (val.code === 1) {
                    self.setState({
                        data: val
                    })
                } else {
                    throw new Error('data err')
                }
            }).catch(err => {
                console.error(err)
            })
        }
        render() {
            return(
                <ChartInner {...this.props} data={this.state.data}/>
            )
        }
    }
}

export default Wrapper