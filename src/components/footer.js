import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
  };

  const copyrightStyle = {
    fontSize: '14px',
  };

  return (
    <div style={footerStyle}>
      <p style={copyrightStyle}>
        &copy; MyTodoList.com {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
