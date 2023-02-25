import React, { useState } from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import './TodoList.css'

const TodoList = ({todos, setTodos}) => {

  const [noOfIncompleteTask, setNoOfIncompleteTask] = useState('');

  const handleTaskClick = (id) => {
    const allTodos = [...todos]
    const particularTodo = allTodos.find((todo) => todo.id == id);
    particularTodo.status = !particularTodo.status
    setTodos(allTodos)

    
  }

  const calculateNoOfIncompleteTask = () => {
    let count = 0;
        todos.forEach(todo => {
            if(!todo.status) 
            count++
        })
        return count
 
  }

 

  return (
    <div className='todolist-container'>
        <div className='todos-container'>
        {
            todos.map((todo, index) => (
                <h2 
                onClick={() => handleTaskClick(todo.id)} 
                className={`todo-item ${todo.status && 'todo-done'}`}
                key={index}
                data-testid="todo-container"
                >
                  {todo.title}
                  </h2>
            ))
        }
        </div>
        <div className='todo-footer'>
        <TodoFooter noOfIncompleteTask={calculateNoOfIncompleteTask()} />
        </div>
    </div>
  )
}

export default TodoList