import React from 'react';
import './Testimonials.css';
import AsifMohamad from "../../assets/AsifMohamad.png";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading" >Testimonials</h2>
      <div className="testimonials-content">
        <div className="testimonial-column">
          <div className="paragraph-container">
            <p>Trigger-based still image capture with extremely low latency</p>
            <div className="icon"><i className="ri-double-quotes-r"></i></div>
          </div>
          <div className="testimonial-footer">
            <img src={AsifMohamad} alt="Profile" className="profile-image" />
            <div className='Name-location'>
              <p className='Asif'>MR. Asif Mohamad</p>
              <p className='Dentalocation'>Dental devices | Europe</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="testimonial-column">
          <div className="paragraph-container">
            <p>Trigger-based still image capture with extremely low latency</p>
            <div className="icon"><i className="ri-double-quotes-r"></i></div>
          </div>
          <div className="testimonial-footer">
            <img src={AsifMohamad} alt="Profile" className="profile-image" />
            <div className='Name-location'>
              <p className='Asif'>MR. Asif Mohamad</p>
              <p className='Dentalocation'>Dental devices | Europe</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="testimonial-column">
          <div className="paragraph-container">
            <p>Trigger-based still image capture with extremely low latency</p>
            <div className="icon"><i className="ri-double-quotes-r"></i></div>
          </div>
          <div className="testimonial-footer">
            <img src={AsifMohamad} alt="Profile" className="profile-image" />
            <div className='Name-location'>
              <p className='Asif'>MR. Asif Mohamad</p>
              <p className='Dentalocation'>Dental devices | Europe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="read-more-container">
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default Testimonials;
