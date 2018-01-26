// import React from 'react'
import ReactDOM from 'react-dom'

<%- component %>

// const components = [{
//     com: {
//         component_desc: "文本",
//         component_name: "text",
//         component_path: "../components/js/text/index"
//     }
// },{
//     com: {
//         component_desc: "文本",
//         component_name: "text",
//         component_path: "../components/js/text/index"
//     }
// }]
const coms = <%- coms %>
class App extends React.Component {
    render() {
        const coms = coms.map((com, index) => {
            return <Component com={com} key={index} />
        })
        return (
            <div>
            {coms}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))