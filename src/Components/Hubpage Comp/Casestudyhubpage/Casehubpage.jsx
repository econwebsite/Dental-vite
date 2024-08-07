import React from 'react';
import './casehubpage.css'; // Updated CSS file name for styling
import dentaimg from "../../assets/Dental-intraoral-cameras.jpg";
import dented1 from "../../assets/techimg1.jpg";
import tee2 from "../../assets/techimg2.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import Hubcasecard from './Hubcasecard'; // Assuming this file name remains unchanged

const Casehubpage = () => {
  return (
    <div>
      <div className='casehubpage'>
        <div className='mainContainer'>
          <h1>Case Studies</h1>
          <div className="casepageblog">
            <div className="casehubpage-column casehubpage-left">
              <div className="casehubpage-border-box">
                <img src={dentaimg} alt="Image Description" />
                <h2>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h2>
                <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
                <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
              </div>
            </div>
            <div className="casehubpage-column casehubpage-right">
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <img src={dented1} alt="Card Image 1" />
                  <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
                  <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
                  <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
                </div>
                <div className="casehubpage-card">
                  <img src={tee2} alt="Card Image 2" />
                  <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
                  <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
                  <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
                </div>
              </div>
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <img src={dented1} alt="Card Image 1" />
                  <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
                  <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
                  <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
                </div>
                <div className="casehubpage-card">
                  <img src={tee2} alt="Card Image 2" />
                  <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
                  <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
                  <AnimatedButton className="Caseread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
                </div>
              </div>
              {/* <div className="casehubpage-full-card">
                <div className="casehubpage-full-card-left">
                  <img src={tee3} alt="Full Card Image" />
                </div>
                <div className="casehubpage-full-card-right">
                  <h6>Apple Push Notification Service (APNS)</h6>
                  <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
                  <button className="casehubpage-explore-more">
                    Explore More <span className="casehubpage-arrow"><i className="ri-arrow-right-line"></i></span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Hubcasecard />
    </div>
  );
};

export default Casehubpage;
