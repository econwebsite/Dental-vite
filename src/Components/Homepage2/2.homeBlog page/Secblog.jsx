import React from 'react';
import './secblog.css'; // Ensure this is the correct CSS file path
import Dentalimg from "../../assets/des.jpg";
import rightimg1 from "../../assets/rightimg 1.png";
import rightimg2 from "../../assets/rightimg 2.jpg";

const Secblog = () => {
  return (
    <div className='homeblog-pg'>
      <div className="homeblog-component-container">
        <div className="homeblog-left-column">
          <div className="homeblog-merged-box" data-aos="zoom-in-right" data-aos-duration="1300">
            <img src={Dentalimg} alt="Full Image" className="homeblog-full-image" />
            <div className="homeblog-box-content">
              <h4>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h4>
              <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
             <br></br>
             <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
            <br></br>
            <button className="homeblog-btn1">Know more</button>
             </div>
            
          </div>
        </div>

        <div className="homeblog-right-column" data-aos="zoom-in-left" data-aos-duration="1200">
          <div className="homeblog-box">
            <img src={rightimg1} alt="Box 1" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Capturing the Dentists' POV with Dental Loupe Cameras</h6>
              <p>This blog explores features that enable loupe cameras for precise diagnoses. Find out why size ...</p>
              <button className="homeblog-btn">Know more</button>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 2" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>A Guide to Choosing the Right Dental Intraoral Camera</h6>
              <p>Read to learn about the key features that make a dental intraoral camera ...</p>
              <button className="homeblog-btn">Know more</button>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 3" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>How to Choose the Right Camera for Extraoral Devices?</h6>
              <p>Read on to learn more about key features like 4K resolution, autofocus capabilities...</p>
              <button className="homeblog-btn">Know more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secblog;
