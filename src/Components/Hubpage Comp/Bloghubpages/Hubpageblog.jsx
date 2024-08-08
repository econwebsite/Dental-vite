import React from 'react';
import './Hubpageblog.css'; // Import the CSS file for styling
import dentaimg from "../../assets/Dental-intraoral-cameras.jpg";
import dented1 from "../../assets/techimg1.jpg";
import tee2 from "../../assets/techimg2.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
import Hubblogcard from './Hubblogcard';

const Hubpageblog = () => {
  return (
    <div>
    <div className='hubtot-blog'>
      <div className='mainContainer'>
      <h1>Our Blog</h1>
    <div className="hubpageblog">
      <div className="hubblog-column hubblog-left">
        <div className="hubblog-border-box">
          <img src={dentaimg} alt="Image Description" />
<<<<<<< HEAD
          <h2>Colour Global Shutter Camera Solution for Gesture Recognition and Industrial Drone Application</h2>
          <p>Vision-based gesture recognition - Technology and application of many advanced technologies the embedded vision world is accustomed to. Gesture recognition is a recent addition which has been explored and tested more by the industrial segment with vision and sensor-based technology.</p>
=======
          <h2>Capturing the Dentists' POV with Dental Loupe Cameras</h2>
          <p>In this blog, we explore the five critical factors in depth: ultra-lightweight design, precise color reproduction, effective heat management, advanced image stabilization, and adaptability to variable lighting conditions. Read on to get a comprehensive view of how these features come together to create a state-of-the-art dental loupe camera that improves dentists' and patient experience.</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

        </div>
      </div>
      <div className="hubblog-column hubblog-right">
        <div className="hubblog-card-row">
          <div className="hubblog-card">
            <img src={dented1} alt="Card Image 1" />
<<<<<<< HEAD
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
=======
            <h6>How to Choose the Right Camera for Extraoral Devices?</h6>
            <p>"Read on to learn more about key features like 4K resolution, autofocus capabilities...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
            </div>
          <div className="hubblog-card">
            <img src={tee2} alt="Card Image 2" />
<<<<<<< HEAD
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
=======
            <h6>Autofocus vs. Fixed focus: Which Lens to Choose?</h6>
              <p>Understand how autofocus and fixed focus differentiate the dental imaging quality...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
            </div>
        </div>
        <div className="hubblog-card-row">
          <div className="hubblog-card">
            <img src={dented1} alt="Card Image 1" />
<<<<<<< HEAD
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
=======
            <h6>A Guide to Choosing the Right Dental Intraoral Camera</h6>
              <p>Read to learn about the key features that make a dental intraoral camera truly...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
            </div>
          <div className="hubblog-card">
            <img src={tee2} alt="Card Image 2" />
<<<<<<< HEAD
            <h6>Rapid and Scalable Using Raspberry Pi 4 Cameras</h6>
            <p>Embedded vision systems have been a tested and proven solution in mature technologies.</p>
=======
            <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
              <p>Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
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
    </div>
    <Hubblogcard/>
    </div>
  );
};

export default Hubpageblog;
