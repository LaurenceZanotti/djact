import React from 'react'
import Todo from './components/TodoItem'
import todosData from './todosData'


export default function App() {
    const TodoList = todosData.map(todo => <Todo key={todo.id} text={todo.text} completed={todo.completed}/>)

    return (
        <main className="w-50 m-auto">
            <h1>ToDo App</h1>
            {TodoList}
        </main>
    )
}