import React, { useState } from "react";
import './AddInput.css'

const AddInput = ({todos, setTodos}) => {

    const [todo, setTodo] = useState('');


    const handleAddTodo = () => {
        if(!todo) return
        setTodos([...todos, {id: Math.floor(Math.random() * 9999), title: todo, status: false }])
        setTodo('');

    }

    console.log(todos)

  return (
    <div className="input-container">
      <input className="input-box"
      type="text" 
      placeholder="Type a new task here..." 
      value={todo} 
      onChange={(e) => setTodo(e.target.value)}
      />
      <button className="addButton"
      onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default AddInput;
