import React from 'react'

export default function TodoItem(props) {
    const {id, text, completed} = props.item
    
    const style = {
        backgroundColor: completed ? '#58ca541f' : '#5493ca1f'
    }

    return (
        <div className="todoItem" style={style}>
            <input 
                type="checkbox" 
                checked={ completed } 
                onChange={() => props.handleChange(id)}
            />
            {
            completed ? 
            <p className="text-success">{text}</p> : 
            <p className="text-primary">{text}</p>
            }
        </div>
    )
}