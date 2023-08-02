import React from 'react'

 export const footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
    border: "2px solid green"
  }
  return (
   
  <div className="bg-dark text-light py-3 " style={footerStyle}>
    <p className='text-center'>
    Copyright &copy; MyTodoList.com
    </p>
   

  
     
    </div>


  )
}


export default footer