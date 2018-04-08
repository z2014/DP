import React from 'react'

const TableBody = (props) => {
    if (props.dataSource.length === 0) {
        return <tr><td>暂无数据</td></tr>
    }
    const tbody = props.dataSource.map((data, index) => {
        const keys = Object.keys(data)
        const tr = keys.map(key => {
            return <td className="basic-td" key={key}>{data[key]}</td>
        })
        return (<tr className="basic-tr" key={index}>{tr}</tr>)
    })
    return tbody
}

export default TableBody