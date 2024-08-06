import React from 'react';
import './Hubpageblog.css'; // Import the CSS file for styling
import dentaimg from "../../assets/Dental-intraoral-cameras.jpg";
import dented1 from "../../assets/techimg1.jpg";
import tee2 from "../../assets/techimg2.jpg";
import tee3 from "../../assets/Techimg3.jpg";

const Hubpageblog = () => {
  return (
    <div className='hubtot-blog'>
      <h1>Our Blog</h1>
    <div className="hubpageblog">
      <div className="hubblog-column hubblog-left">
        <div className="hubblog-border-box">
          <img src={dentaimg} alt="Image Description" />
          <h2>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h2>
          <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
          <button className="hubblog-explore-more">
            Explore More
          </button>
        </div>
      </div>
      <div className="hubblog-column hubblog-right">
        <div className="hubblog-card-row">
          <div className="hubblog-card">
            <img src={dented1} alt="Card Image 1" />
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
            <button className="hubblog-explore-more">
              Explore More 
            </button>
          </div>
          <div className="hubblog-card">
            <img src={tee2} alt="Card Image 2" />
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
            <button className="hubblog-explore-more">
              Explore More </button>
          </div>
        </div>
        <div className="hubblog-card-row">
          <div className="hubblog-card">
            <img src={dented1} alt="Card Image 1" />
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
            <button className="hubblog-explore-more">
              Explore More 
            </button>
          </div>
          <div className="hubblog-card">
            <img src={tee2} alt="Card Image 2" />
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
            <button className="hubblog-explore-more">
              Explore More 
            </button>
          </div>
        </div>
        {/* <div className="hubblog-full-card">
          <div className="hubblog-full-card-left">
            <img src={tee3} alt="Full Card Image" />
          </div>
          <div className="hubblog-full-card-right">
            <h6>Apple Push Notification Service (APNS)</h6>
            <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
            <button className="hubblog-explore-more">
              Explore More <span className="hubblog-arrow"><i class="ri-arrow-right-line"></i></span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Hubpageblog;
