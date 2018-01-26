// import React from 'react'
import ReactDOM from 'react-dom'

<%- component %>

const components = [{
    com: {
        component_desc: "文本",
        component_name: "text",
        component_path: "../components/js/text/index"
    }
}]
class App extends React.Component {
    render() {
        const coms = components.map((com, index) => {
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