import React from 'react';
import './rectanglepg.css';
import rectangle1 from "../../assets/rectangle1.png"
import rectangle2 from "../../assets/rectangle2.png"
import rectangle3 from "../../assets/rectangle3.png"

const RectangleBox = () => (
  <div className='Border-rectang'>
  <div className="Total-Rectangle"  data-aos="zoom-in" data-aos-duration="1000">
    <div className="rectangle-box">
      <div className="small-rectangle1">
        <img src={rectangle1} alt="Small" className="small-image" />
      </div>
      <div className="Rectangle-content">
        <p>Trigger-based still image capture with extremely low latency</p>
      </div>
    </div>
    <div className="rectangle-box">
      <div className="small-rectangle2">
        <img src={rectangle2} alt="Small" className="small-image" />
      </div>
      <div className="Rectangle-content">
        <p>Lens shading for accurate color reproduction</p>
      </div>
    </div>
    <div className="rectangle-box">
      <div className="small-rectangle3">
        <img src={rectangle3} alt="Small" className="small-image" />
      </div>
      <div className="Rectangle-content">
        <p>UVC on USB3.0 for simple driverless installation</p>
      </div>
    </div>
  </div>
  </div>
);

export default RectangleBox;
