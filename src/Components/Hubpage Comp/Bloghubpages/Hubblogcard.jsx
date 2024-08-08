import React from 'react';
import './Hubblogcard.css';
import Technical1 from "../../assets/techimg1.jpg";
import Technical2 from "../../assets/techimg2.jpg";
import Technical3 from "../../assets/Techimg3.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";

const Hubblogcard = () => {
  return (
    <div className="Hubblogcard-Total">
      {/* <h1 className="Hubblogcard-title">Technical Articles</h1> */}
      <div className="Hubblogcard-cards">
        <div className="Hubblogcard-card">
          <img src={Technical1} alt="AI-enabled point of care device" className="Hubblogcard-image" />
          <h2 className="Hubblogcard-title">Building an AI-enabled point of care device</h2>
          <p className="Hubblogcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="Hubblogcard-image" />
          <h2 className="Hubblogcard-title">Building an AI-enabled point of care device</h2>
          <p className="Hubblogcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Hubblogcard-image" />
          <h2 className="Hubblogcard-title">Building an AI-enabled point of care device</h2>
          <p className="Hubblogcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Hubblogcard;
