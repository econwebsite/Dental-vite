import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure your CSS file is correctly linked
import econlogo from '../assets/econlogo.png'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbarpage-navbar">
      <div className='Nav-align'>
        <img src={econlogo} alt="Econ Logo" className="navbarpage-logo" />

        <div className="navbarpage-navItems">
          <Link to="/product">Products</Link>
          <div className="navbarpage-divider"></div>
          <Link to="/downloads">Downloads</Link>
          <div className="navbarpage-divider"></div>
          <Link to="/homepage2">Homepage2</Link>
          <div className="navbarpage-divider"></div>
          <Link to="/blog">Blog</Link>
          <div className="navbarpage-divider"></div>
          <Link to="/about">About</Link>
        </div>

        <input type="text" placeholder="Search.." className="navbarpage-searchInput" />

        <div className="navbarpage-contact">
          <i className="ri-phone-fill navbarpage-phoneIcon"></i>
          <div className="navbarpage-contactDetails">
            <p className="navbarpage-tellUs" style={{ color: "#00aeef" }}>Tell us</p>
            <p className="navbarpage-phoneNumber">+1 408 766 7503</p>
          </div>
          <button className="navbarpage-getQuoteButton">Get a Quote</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
