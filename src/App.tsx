import React, {useEffect, useState} from 'react';
import './App.css';

type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<Array<PropsType>>([])

    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json))},[])



    const onClickHandler = () => {
       setTodos([])
    }
    return (
        <div className="App">
            <button onClick={onClickHandler}>CLEAN POSTS</button>
            <ul>
                {todos.map(t => {
                    return (
                        <li>
                            <span>{t.id}</span>
                            <span>{t.title}</span>
                            <span>{t.completed}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
