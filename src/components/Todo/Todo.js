import React, { useState } from 'react'
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

const Todo = () => {

    const [todos, setTodos] = useState([]);

  return (
    <div>
        <Header title="Todos" />
        <div style={{marginTop: '100px'}}>
        <AddInput
        todos={todos}
        setTodos={setTodos}
        />
        <TodoList
        todos={todos}
        setTodos={setTodos}
        />
        </div>
    </div>
  )
}

export default Todo