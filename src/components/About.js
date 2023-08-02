import React from 'react';

const About = () => {
  const aboutContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f1f1f1',
  };

  const aboutContentStyle = {
    maxWidth: '600px',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #3a5a40',
  };

  const headingStyle = {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#3a5a40', 
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  };

  return (
    <div style={aboutContainerStyle}>
      <div style={aboutContentStyle}>
        <h2 style={headingStyle}>About Todo List</h2>
        <p style={paragraphStyle}>
          Welcome to the Todo List App. This app allows you to keep track of your tasks and manage your daily activities. You can add new todos, mark them as completed, and delete them as needed. The application uses React's state to manage the list of todos, and the data is stored in the browser's local storage so that your todo items persist even after refreshing the page. Feel free to explore the application and make the most of it to stay organized and productive!
        </p>
      </div>
    </div>
  );
};

export default About;





