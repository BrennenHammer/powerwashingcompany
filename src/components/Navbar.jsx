import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='logo' src={logo} alt="Company Logo" />
        <span>Time2Clean LLC</span>
        
      </div>
      <p className='numberinnavbar'>317-789-1012</p>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/quote">Get Quote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
