import React from 'react';
import './Footerpage.css'; // Ensure you create or update this CSS file
import econlogo from "../assets/econlogo.png"

const Footerpage = () => {
  return (
    <footer className="footcomp-footer-container">
      <div className="footcomp-footer-column">
        <div className="footcomp-footer-logo">
          <img src={econlogo} alt="Company Logo" />
        </div>
        <div className="footcomp-footer-links">
          <a href="#products">Products</a>
          <a href="#downloads">Downloads</a>
          <a href="#casestudies">Case Studies</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="footcomp-divider"></div> {/* Divider between columns */}
      
      <div className="footcomp-footer-column">
        <div className="footcomp-footer-contact">
          <div className="footcomp-contact-item">
            <span className="footcomp-icon phone">📞</span>
            <span className="footcomp-contact-info">+1 408 766 7503</span>
          </div>
          <div className="footcomp-contact-item">
            <span className="footcomp-icon email">📧</span>
            <span className="footcomp-contact-info">customersupport@econsystems.com</span>
          </div>
        </div>
      </div>
      <div className="footcomp-divider"></div> {/* Divider between columns */}
      
      <div className="footcomp-footer-column">
        <div className="footcomp-footer-subscribe">
          <h4>Subscribe for latest updates</h4>
          <div className="footcomp-subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Proceed</button>
          </div>
          <div className="footcomp-social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpage;
