import React, { useState } from 'react';
import '../styles/NavBar.css'; 
import logo from '../assets/Hamster.png'; 

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="HamsterPOS Logo" />
      </div>
      <h1>Hamster POS</h1>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={menuOpen ? 'nav-links show' : 'nav-links'}>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/location">Location</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
