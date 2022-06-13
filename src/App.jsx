import React, {useState} from 'react';
import axios from "axios";

import List from "./components/List";

import useDebounce from "./hooks/useDebounce";
import useInput from "./hooks/useInput";
import useRequest from "./hooks/useRequest";

function App() {
    const [todos, loading, error] = useRequest(fetchTodos);
    const username = useInput('');

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка при загрузке данных</h1>
    }

    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}
            <input {...username} type="text" placeholder='Username' />
        </div>
    );
}

export default App;
