import React from 'react';

const Todo = ({ todo, onDelete }) => {
  const todoStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  };

  const descStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '10px',
  };

  const deleteButtonStyle = {
    backgroundColor: '#ff4d4f',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return (
    <div style={todoStyle}>
      <h4 style={titleStyle}>{todo.title}</h4>
      <p style={descStyle}>{todo.desc}</p>
      <button style={deleteButtonStyle} onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
