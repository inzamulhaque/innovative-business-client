import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Store/reducer/todoSlice';

function CreateTodo() {
    const [text, setText] = useState('');
    // initial the dispatch here
    const dispatch = useDispatch();

    const addTodoHandler = (event) => {
        event.preventDefault();
    
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <form onSubmit={addTodoHandler}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>Add todo</button>
        </form>
    );
}
export default CreateTodo