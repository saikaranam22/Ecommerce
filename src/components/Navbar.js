import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Testing</h1>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/products" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>
              Products
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="navbar-action">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">2</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 