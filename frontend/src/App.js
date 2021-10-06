import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            // Todo: Add loading status
            bored: ''
        }
    }

    componentDidMount() {
        fetch("https://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => {
                this.setState({bored: data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <main className="w-50 m-auto">
                <h1 className="text-center m-3">Nothing to do?</h1>
                <p>{this.state.bored.activity}</p>
            </main>
        )
    }
    
}