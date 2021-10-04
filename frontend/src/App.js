import React, { Component } from 'react'
import Todo from './components/TodoItem'
import todosData from './todosData'


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            todoList: todosData
        }
    }
    render() {
        return (
            <main className="w-50 m-auto">
                <h1>ToDo App</h1>
                {this.state.todoList.map(todo => <Todo key={todo.id} text={todo.text} completed={todo.completed}/>)}
            </main>
        )
    }
}