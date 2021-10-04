import React from 'react'

export default function TodoItem(props) {
    const {id, text, completed} = props.item
    return (
        <div className="todoItem">
            <input 
                type="checkbox" 
                checked={ completed } 
                onChange={() => props.handleChange(id)}
            />
            <p>{text}</p>
        </div>
    )
}