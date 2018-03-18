import * as echarts from 'echarts'
import React from 'react'
import Wrapper from '../common/chart'

class LineChart extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }

    componentDidMount() {
        this.renderLine(this.props.data)
    }

    componentWillReceiveProps(nextProps) {
        this.renderLine(nextProps.data)
    }
    
    renderLine = (props) => {
        var dom = document.getElementById('lineChart')
        var myChart = echarts.init(dom)
        var option = null
        option = {
            title: {
                text: '堆叠区域图'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: props.legend
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : props.xaxis
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : props.data
        }
        if (option && typeof option === "object") {
            myChart.setOption(option, true)
        }
    }
    render() {
        return (
            <div id="lineChart" style={{width: '600px', height: '400px'}}></div>
        )
    }
}
export default Wrapper(LineChart)