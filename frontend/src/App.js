import React from 'react'
import Todo from './components/TodoItem'


export default function App() {
    return (
        <main className="w-50 m-auto">
            <h1>ToDo App</h1>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </main>
    )
}