import * as echarts from 'echarts'
import React from 'react'
import Wrapper from '../common/chart'

class PieChart extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
    }

    componentWillReceiveProps(nextProps) {
        this.renderPie(nextProps.data)
    }

    componentDidMount() {
        this.renderPie(this.props.data)    
    }

    renderPie = (props) => {
        const option = {
            backgroundColor: '#2c343c',

            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data: props.data.sort(function (a, b) { return a.value - b.value }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function () {
                        return Math.random() * 200
                    }
                }
            ]
        }
        const mychart = echarts.init(document.getElementById('pieChart'))
        mychart.setOption(option)
    }
    render() {
        return (
            <div id="pieChart" style={{width: '600px', height: '400px'}}></div>
        )
    }
}

export default Wrapper(PieChart)