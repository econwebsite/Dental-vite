import React from 'react';
import './navbar.css'; // Import the CSS file
import econlogo from "../assets/econlogo.png"; // Import the logo image
import { useNavigate } from 'react-router-dom';

const Navbarpage = () => {

  const navigate = useNavigate();

  const handleNavigation = (route) => {
   
      navigate(route);
    
  };

  return (
    <nav className="navbarpage-navbar">
      <div className='Nav-align'>
      <img src={econlogo} alt="Econ Logo" className="navbarpage-logo" />
      <div className="navbarpage-navItems">
        <a href="#products" onClick={() => handleNavigation('/product')}>Products</a>
        <div className="navbarpage-divider"></div>
        <a href="#downloads" onClick={() => handleNavigation('/downloads')}>Downloads</a>
        <div className="navbarpage-divider"></div>
        <a href="#casestudies" onClick={() => handleNavigation('/homepage2')}>Homepage2</a>
        <div className="navbarpage-divider"></div>
        <a href="#blog" onClick={() => handleNavigation('/Blog')}>Blog</a>
        <div className="navbarpage-divider"></div>
        <a href="#about" onClick={() => handleNavigation('/About')}>About</a>
     
     
      <input type="text" placeholder='Search..' className="navbarpage-searchInput" />
      <div className="navbarpage-contact">
        <i className="ri-phone-fill navbarpage-phoneIcon"></i>
        <div className="navbarpage-contactDetails">
          <p className="navbarpage-tellUs" style={{color:"#00aeef"}}>Tell us</p>
          <p className="navbarpage-phoneNumber">+1 408 766 7503</p>
        </div>
        <button className="navbarpage-getQuoteButton">Get a Quote</button>
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbarpage;
