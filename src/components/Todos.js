import Todoitem from './Todo';
import addTodo from './addTodo';
import React from 'react'

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vf",
  }
  return (
    <div className='container my-1' style={myStyle}> 
    <h3 className=' my-3'>My Todos List</h3> 
    {props.todos.length===0? "No Todos to display":
    props.todos.map((todo)=>{
     
      return (
        <>
         <Todoitem todo={todo} key={todo.sno}onDelete={props.onDelete}/> <hr/>
        </>
        
      )
   
  }
 
  )}
  
  
     
     
    </div>
  )
}


export default Todos