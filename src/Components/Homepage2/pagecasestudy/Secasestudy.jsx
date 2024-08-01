import React from 'react';
import './Secasestudy.css'; // Ensure the CSS file is named Casestudy.css
import Dentalimg from "../../assets/Dental-intraoral-cameras.jpg";
import rightimg1 from "../../assets/case1.jpg";
import rightimg2 from "../../assets/case2.png";

const Secasestudy = () => {
  return (
    <div className='sechomecase-pg'>
      <div className="sechomecase-component-container">
        <div className="sechomecase-left-column">

          <div className="sechomecase-full-image-card">
            <img src={Dentalimg} alt="Full Image" className="sechomecase-full-image" />
          </div>

          <div className="sechomecase-text-card">
            <div className="sechomecase-card-content">
              <h4>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h4>
              <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
            </div>
          </div>
        </div>

        <div className="sechomecase-right-column">
          <div className="sechomecase-box">
            <img src={rightimg1} alt="Box 1" className="sechomecase-box-image" />
            <div className="sechomecase-box-content">
              <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
              <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
            </div>
          </div>
          <div className="sechomecase-box">
            <img src={rightimg2} alt="Box 2" className="sechomecase-box-image" />
            <div className="sechomecase-box-content">
              <h6>Apple Push Notification Service (APNS)</h6>
              <p>Vision-based gesture recognition technology and its applications.</p>
            </div>
          </div>
          <div className="sechomecase-box">
            <img src={rightimg2} alt="Box 3" className="sechomecase-box-image" />
            <div className="sechomecase-box-content">
              <h6>Apple Push Notification Service (APNS)</h6>
              <p>Vision-based gesture recognition technology and its applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secasestudy;
