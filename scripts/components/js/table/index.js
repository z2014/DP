import React from 'react'
import request from '../../../src/request/request'
import TableBody from './tableBody'
import TableColumn from './tableColumn'
import '../../../style/table.less'
import Pagination from './pagination'

export default class Table extends React.Component{
    constructor(props) {
        super(props)
        this.config = this.props.com.com.component_meta
        this.state = {
            dataSource: [],
            page: 1
        }
    }

    componentDidMount() {
        const self = this
        request(this.config.url.value, {
            method: 'GET'
        }).then(res => {
            if (res.code === 1) {
                self.setState({
                    dataSource: res.data
                })
            } else {
                self.setState({
                    msg: 'NO DATA'
                })
            }
        })
    }

    clickBtn = (isback) => {
        const len = this.state.dataSource.length
        if (isback) {
            if (this.state.page === 1) {
                return
            } else {
                this.state.page --
                this.setState({})
            }
        } else {
            if (this.state.page >= Math.ceil(len/10)) {
                return
            } else {
                this.state.page ++
                this.setState({})
            }
        }
    }

    render() {
        const data = this.state.dataSource.slice((this.state.page-1) * 10, (this.state.page-1) * 10 + 10)
        return (
            <div className="table-center">
                <table border="0">
                    <colgroup>
                        {
                            this.config.options.value ? Object.keys(this.config.options.value).map(cols => <col key={cols} align="center"/>) : null
                        }
                    </colgroup>
                    <thead>
                        <TableColumn columns={this.config.options.value} />
                    </thead>
                    <tbody>
                        <TableBody dataSource={data} />
                    </tbody>
                </table>
                <Pagination clickBtn={this.clickBtn} page={this.state.page}/>
            </div>
        )
    }
}