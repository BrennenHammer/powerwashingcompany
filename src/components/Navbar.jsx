import { Link } from 'react-router-dom';
import React from 'react';
function Navbar() {
  return (
    <nav class="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
