import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this CSS file is linked
import dentallogo from '../assets/DENTAL LOGO.png'; // Import your logo image

import {Dropdown, Space } from 'antd';

const Navbarpage = () => {
  const items = [
    {
      key: '1',
      label: (
        <Link to="/bloghub">
          Blogs
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/casehub">
          Casestudies
        </Link>
      ),
    },
  ];

  return (
    <nav className="navbarpage-navbar">
      <div className="navbarpage-header">
        <div className="navbarpage-logoContainer">
          <img src={dentallogo} alt="Econ Logo" className="navbarpage-logo" />
        </div>
        <div className="navbarpage-rightColumn">
          <input type="text" placeholder="Search.." className="navbarpage-searchInput" />
          <div className="navbarpage-contact">
            <i className="ri-phone-fill navbarpage-phoneIcon"></i>
            <div className="navbarpage-contactDetails">
              <p className="navbarpage-tellUs">Call us</p>
              <p className="navbarpage-phoneNumber">+1 408 766 7503</p>
            </div>
            {/* <button className="navbarpage-getQuoteButton">Get a Quote</button> */}
          </div>
        </div>
      </div>
      <div className="navbarpage-navItems">
        <Link to="/home" className="navbarpage-navLink">Home</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/product" className="navbarpage-navLink">IntraOral camera</Link>
        <div className="navbarpage-divider"></div>
        <Link className="navbarpage-navLink">ExtraOral camera</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/blog" className="navbarpage-navLink">Loupe Camera</Link>
        <div className="navbarpage-divider"></div>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown
              menu={{ items }}
              placement="bottomLeft"
              arrow={{ pointAtCenter: true }}
            >
                <Link to="/about" className="navbarpage-navLink">Resources</Link>
            </Dropdown>
          </Space>
        </Space>
        <div className="navbarpage-divider"></div>
        <Link to="/contactus" className="navbarpage-navLink">Contactus</Link>
        <div className="navbarpage-divider"></div>
        <Link to="/aboutus" className="navbarpage-navLink">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbarpage;
