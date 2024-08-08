import React from 'react';
import './Technical.css';
import Technical1 from "../../assets/techimg1.jpg";
import Technical2 from "../../assets/techimg2.jpg";
import Technical3 from "../../assets/Techimg3.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"

const Technical = () => {
  return (
    <div className="Technical-Total mt-2">
      <h1 className="Technical-title">Technical Blogs</h1>
      <div className="Total-cards">
        <div className="Technical-card">
          <img src={Technical1} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Tech-card-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

        </div>
        <div className="Technical-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Tech-card-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

        </div>
        <div className="Technical-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Tech-card-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

        </div>
        <div className="Technical-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <AnimatedButton className="Tech-card-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

        </div>
        
      </div>
    </div>
  );
};

export default Technical;
