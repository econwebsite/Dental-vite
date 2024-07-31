import React from 'react';
import './Footerpage.css'; // Ensure you create or update this CSS file
import econlogo from "../assets/econlogo.png"

const Footerpage = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">
          <img src={econlogo} alt="Company Logo" />
        </div>
        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#downloads">Downloads</a>
          <a href="#casestudies">Case Studies</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="divider"></div> {/* Divider between columns */}
      
      <div className="footer-column">
        <div className="footer-contact">
          <div className="contact-item">
            <span className="icon phone">📞</span>
            <span className="contact-info">+1 408 766 7503</span>
          </div>
          <div className="contact-item">
            <span className="icon email">📧</span>
            <span className="contact-info">customersupport@econsystems.com</span>
          </div>
        </div>
      </div>
      <div className="divider"></div> {/* Divider between columns */}
      
      <div className="footer-column">
        <div className="footer-subscribe">
          <h4>Subscribe for latest updates</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Proceed</button>
          </div>
          <div className="social-media">
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
