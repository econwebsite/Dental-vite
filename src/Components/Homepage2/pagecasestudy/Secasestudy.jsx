import React from 'react';
import './Secasestudy.css'; // Ensure this is the correct CSS file path
import Dentalimg from "../../assets/des.jpg";
import rightimg1 from "../../assets/rightimg 1.png";
import rightimg2 from "../../assets/rightimg 2.jpg";

const Seccasestudy = () => {
  return (
    <div className='seccasestudy-pg'>
      <div className="seccasestudy-component-container">
        <div className="seccasestudy-left-column">
          <div className="seccasestudy-merged-box"data-aos="zoom-in-right" data-aos-duration="1300">
            <img src={Dentalimg} alt="Full Image" className="seccasestudy-full-image" />
            <div className="seccasestudy-box-content">
              <h4>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h4>
              <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
              <br />
              <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
            <br></br>
            <button className="seccasestudy-btn1">Know more</button>
            </div>
         
          </div>
        </div>

        <div className="seccasestudy-right-column" data-aos="zoom-in-left" data-aos-duration="1300">
          <div className="seccasestudy-box">
            <img src={rightimg1} alt="Box 1" className="seccasestudy-box-image" />
            <div className="seccasestudy-box-content">
              <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
              <p>Embedded vision systems have been a tested and proven in mature technologies.</p>
              <button className="seccasestudy-btn">Know more</button>
            </div>
          </div>
          <div className="seccasestudy-box">
            <img src={rightimg2} alt="Box 2" className="seccasestudy-box-image" />
            <div className="seccasestudy-box-content">
              <h6>Apple Push Notification Service (APNS)</h6>
              <p>Vision-based gesture recognition technology and its applications.</p>
              <button className="seccasestudy-btn">Know more</button>
            </div>
          </div>
          <div className="seccasestudy-box">
            <img src={rightimg2} alt="Box 3" className="seccasestudy-box-image" />
            <div className="seccasestudy-box-content">
              <h6>Apple Push Notification Service (APNS)</h6>
              <p>Vision-based gesture recognition technology and its applications.</p>
              <button className="seccasestudy-btn">Know more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccasestudy;
