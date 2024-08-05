import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this CSS file is linked
import econlogo from '../assets/econlogo.png'; // Import your logo image

const Navbarpage = () => {
  return (
    <nav className="navbarpage-navbar">
      <div className="navbarpage-header">
        <div className="navbarpage-logoContainer">
          <img src={econlogo} alt="Econ Logo" className="navbarpage-logo" />
        </div>
        <div className="navbarpage-rightColumn">
          <input type="text" placeholder="Search.." className="navbarpage-searchInput" />
          <div className="navbarpage-contact">
            <i className="ri-phone-fill navbarpage-phoneIcon"></i>
            <div className="navbarpage-contactDetails">
              <p className="navbarpage-tellUs" style={{ color: "#00aeef" }}>Call us</p>
              <p className="navbarpage-phoneNumber">+1 408 766 7503</p>
            </div>
            <button className="navbarpage-getQuoteButton">Get a Quote</button>
          </div>
        </div>
      </div>
      <div className="navbarpage-navItems">
        <Link to="/homepage2" className="navbarpage-navLink">Home</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/product" className="navbarpage-navLink">Intraoral camera</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/product" className="navbarpage-navLink">Extraoral camera</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/blog" className="navbarpage-navLink">Loupe Camera</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/about" className="navbarpage-navLink">Resources</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/contactus" className="navbarpage-navLink">Contactus</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/aboutus" className="navbarpage-navLink">About Us</Link>
      </div>
      
    </nav>
  );
};

export default Navbarpage;
