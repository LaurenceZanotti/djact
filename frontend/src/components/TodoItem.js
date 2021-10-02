import React from 'react'

export default function TodoItem(props) {
    const {text, completed} = props
    return (
        <div className="todoItem">
            <input type="checkbox" name="" id="" checked={completed} onChange={() => console.log('Checkbox clicked!')}/>
            <p>{text}</p>
        </div>
    )
}