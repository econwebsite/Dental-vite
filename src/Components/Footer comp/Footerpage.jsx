import React from 'react';
import './Footerpage.css'; // Ensure this CSS file contains the styles
import dentallogo from "../assets/DENTAL LOGO.png";
import { RiPhoneFill, RiMailFill, RiTwitterXLine, RiLinkedinFill, RiYoutubeFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri'; // Import necessary icons
import AnimatedButton from "../Button comp/AnimatedButton"
const Footerpage = () => {
  return (
    <footer className="footer-container">
      <div className="mainContainer">
      <div className="footer-inner">
        <div className="footer-column footer-column-logo">
          <div className="footer-logo">
            <img src={dentallogo} alt="Company Logo" />
          </div>
          <div className="footer-links">
            <a href="/product">IntraOral Camera</a>
            <a href="/downloads">Downloads</a>
            <a href="/casestudies">Casestudies</a>
            <a href="/blog">Blogs</a>
            <a href="/about">About Us</a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-column footer-column-contact">
          <div className="footer-contact-item">
            <p><RiPhoneFill className='footer-con-icon' /> +1 408 766 7503</p>
          </div>
          <div className="footer-contact-item">
            <p><RiMailFill className='footer-con-icon'/> customersupport@e-consystems.com</p>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-column footer-column-subscribe">
          <h4 className="footer-subscribe-title">Subscribe for latest updates</h4>
          <div className="footer-subscribe-input">
            <input type="email" placeholder="Email id" />
            <AnimatedButton className="footerproceed-btn" text="Proceed" backgroundColor="#003873" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

          </div>
          <div className="footer-social-icons">
            <button className="footer-icon-button"><RiTwitterXLine /></button>
            <button className="footer-icon-button"><RiLinkedinFill /></button>
            <button className="footer-icon-button"><RiYoutubeFill /></button>
            <button className="footer-icon-button"><RiFacebookFill /></button>
            <button className="footer-icon-button"><RiInstagramFill /></button>
          </div>
          <div className="footer-bottom-text">
            <p><span style={{color:"#00aeef"}}>e-con System</span> 2024, all rights reserved.</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footerpage;
