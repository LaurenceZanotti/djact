import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            bored: ''
        }
    }

    componentDidMount() {
        // Colocar state de "carregando" e buscar atividade para fazer enquanto está entediado na API Bored
        this.setState({loading: true})
        fetch("https://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => {
                this.setState({loading: false, bored: data}) // Obter dados da API e desativar state "carregando" (loading)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <main className="w-50 m-auto">
                <h1 className="text-center m-3">Nothing to do?</h1>
                {this.state.loading ? <img src="static/frontend/spinning-loading.gif" alt="" className="w-50 m-auto"/> : <p>{this.state.bored.activity}</p>}
            </main>
        )
    }
    
}