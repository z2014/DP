import React from 'react'

const TableColumn = (props) => {
    if (typeof props.columns === 'undefined') {
        return null
    }
    const columns = Object.keys(props.columns)
    const cols = []
    const thead = columns.map(column => {
        return <th className="basic-th" key={column}>{ props.columns[column] }</th>
    })
    return <tr>{ thead }</tr>
}

export default TableColumn