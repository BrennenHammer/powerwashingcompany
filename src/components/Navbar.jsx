import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='logo' src={logo} alt="Company Logo" />
        <span>Time2Clean LLC</span>
        <div>
        <p className='numberinnavbar'>317-500-3392</p>
        </div>
      </div>
      
      <div className="mobile-nav">
        <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
          </div>
        )}
      </div>
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