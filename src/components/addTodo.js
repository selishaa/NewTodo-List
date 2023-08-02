import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can't be blank.");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  const formStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    border: '2px solid #a3b18a',
    borderRadius: '8px',
    backgroundColor: '#f1f1f1',
    
  };

  const labelStyle = {
    marginBottom: '8px',
    fontSize: '18px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%', 
    padding: '10px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#555',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div className='container my-3' style={formStyle}>
      <h3 style={{ textAlign: 'center', color: '#588157' }}>What's the plan for today?</h3>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="title" style={labelStyle}>
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="desc" style={labelStyle}>
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={inputStyle}
            id="desc"
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;

