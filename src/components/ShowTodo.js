import React from 'react'
import { useSelector } from 'react-redux';

const ShowTodo = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowTodo