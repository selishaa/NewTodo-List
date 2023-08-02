import './App.css';
import Navbar from './components/navbar';
import AddTodo from './components/addTodo';
import Todos from './components/Todos';
import Footer from './components/footer';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos((prevTodos) => [...prevTodos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Navbar title="MyTodoList" searchbar={true} />
    <Routes>
      <Route path= "/" element = { 
        <>
        <AddTodo addTodo={addTodo} />
         <Todos todos={todos} onDelete={onDelete} />
        </>
      }/> 

      <Route path ="/about"  element = { <About/> }/>
    </Routes>
    <Footer />
    </Router>
      
  
    </>
  );
}

export default App;
