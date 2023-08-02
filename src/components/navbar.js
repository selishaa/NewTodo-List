import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, searchbar }) => {
  const navbarStyle = {
    backgroundColor: '#006d77',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '18px',
  };

  const searchFormStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ ...navLinkStyle, fontSize: '24px' }}>
        {title}
      </Link>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={navLinkStyle}>
            About
          </Link>
        </li>
      </ul>
      {searchbar && (
        <form style={searchFormStyle} role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            style={{ color: '#fff', border: '1px solid #fff' }}
          >
            Search
          </button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;






