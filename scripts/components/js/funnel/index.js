import * as echarts from 'echarts'
import React from 'react'
import Wrapper from '../common/chart'

class FunnelChart extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }

    componentDidMount() {
        this.renderFunnel(this.props.data)
    }

    componentWillReceiveProps(nextProps) {
        this.renderFunnel(nextProps.data)
    }

    renderFunnel = (props) => {
        var dom = document.getElementById('funnelChart')
        var mychart = echarts.init(dom)
        var option = {
            title: {
                text: '漏斗图',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: props.legend
            },
            calculable: true,
            series: [
                {
                    name:'漏斗图',
                    type:'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: props.data
                }
            ]
        }
        if (option && typeof option === "object") {
            mychart.setOption(option, true)
        }
    }
    render() {
        return (
            <div id="funnelChart" style={{width: '600px', height: '400px'}}></div>
        )
    }
}

export default Wrapper(FunnelChart)