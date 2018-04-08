import React from 'react'
import '../../../style/chart.less'
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
                <div className="chart-wrapper">
                    <ChartInner {...this.props} data={this.state.data}/>
                </div>
            )
        }
    }
}

export default Wrapper