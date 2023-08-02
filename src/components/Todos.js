import React from 'react';
import Todoitem from './Todo';

const Todos = (props) => {
  const todosContainerStyle = {
    backgroundColor: '#f1f1f1',
    marginTop: '60px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    
  };

  const todosHeadingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  };

  const noTodosMessageStyle = {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'center',
  };

  return (
    <div className='container my-3'>
      <div style={todosContainerStyle}>
        <h3 style={todosHeadingStyle}>My Todos List</h3>
        {props.todos.length === 0 ? (
          <p style={noTodosMessageStyle}>No Todos to display</p>
        ) : (
          props.todos.map((todo) => (
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;

