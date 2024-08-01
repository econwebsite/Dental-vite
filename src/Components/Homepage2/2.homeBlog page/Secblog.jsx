import React from 'react';
import './secblog.css'; // Make sure the CSS file is named Blog.css
import Dentalimg from "../../assets/des.jpg";
import rightimg1 from "../../assets/rightimg 1.png";
import rightimg2 from "../../assets/rightimg 2.jpg";
// import relatedImg1 from "../assets/Cardimg1.png";
// import relatedImg2 from "../assets/Cardimg3.png";

const Secblog = () => {
  return (
    <div className='homeblog-pg'>
      <div className="homeblog-component-container">
        <div className="homeblog-left-column" >
          <div className="homeblog-full-image-card">
            <img src={Dentalimg} alt="Full Image" className="homeblog-full-image" />
          </div>

          <div className="homeblog-text-card">
            <div className="homeblog-card-content">
              <h4>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h4>
              <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
            </div>
          </div>
        </div>

        <div className="homeblog-right-column">
          <div className="homeblog-box">
            <img src={rightimg1} alt="Box 1" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
              <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 2" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Apple Push Notification Service (APNS)</h6>
              <p>Vision-based gesture recognition technology and its applications.</p>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 3" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Apple Push Notification Service (APNS)</h6>
              <p>Vision-based gesture recognition technology and its applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secblog;