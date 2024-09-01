import { useState } from "react";

export const TodoInput = (props) => {
  const {handleAddTodos ,todoValue , setTodoValue} = props;
  
  return (
    <header>
      <input  value={todoValue} onChange={ (e) => {
        setTodoValue(e.target.value)
      }} placeholder="Enter todo..."  />
      

      <button onClick={ ()=>{
        // Check if the input is not empty or whitespace
        if (todoValue.trim() !== ""){
          handleAddTodos(todoValue);
          // Clear the input after adding the todo 
          setTodoValue('');
        }else {
          // optionally alert the user 
          alert('Please enter a todo item')
        }

      } } >Add</button>

    </header>
  )
}
