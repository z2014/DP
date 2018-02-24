// import React from 'react'
import ReactDOM from 'react-dom'

<%- component %>


const components = <%- components %>

class App extends React.Component {
    render() {
        let test = JSON.parse(components)
        const coms = test.map((com, index) => {
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