import React from 'react';
import './hubcasecard.css';
import Technical1 from "../../assets/techimg1.jpg";
import Technical2 from "../../assets/techimg2.jpg";
import Technical3 from "../../assets/Techimg3.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"

const Hubcasecard = () => {
  return (
    <div className="Hubcasecard-Total">
      <div className="Hubcasecard-Cards">
        <div className="Hubcasecard-Card">
          <img src={Technical1} alt="AI-enabled point of care device" className="Hubcasecard-Image" />
          <h2 className="Hubcasecard-Title">Building an AI-enabled point of care device</h2>
          <p className="Hubcasecard-Text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Hubcasecard-Button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
        <div className="Hubcasecard-Card">
          <img src={Technical2} alt="AI-enabled point of care device" className="Hubcasecard-Image" />
          <h2 className="Hubcasecard-Title">Building an AI-enabled point of care device</h2>
          <p className="Hubcasecard-Text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Hubcasecard-Button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
        <div className="Hubcasecard-Card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Hubcasecard-Image" />
          <h2 className="Hubcasecard-Title">Building an AI-enabled point of care device</h2>
          <p className="Hubcasecard-Text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Hubcasecard-Button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Hubcasecard;
