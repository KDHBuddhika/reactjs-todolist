import { useState } from "react"

export default function TodoInput(props){

    const {handleAddTodos,todovalue,setTodoValue} = props
   
    return(
       <header>
        <input value={todovalue} onChange={(e) =>{
            setTodoValue(e.target.value)
        }} placeholder="Enter todo..." />
        <button onClick={()=>{
            handleAddTodos(todovalue)
        }}>Add</button>
       </header>
    )
}