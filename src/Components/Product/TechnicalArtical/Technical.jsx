import React from 'react';
import './Technical.css';
import Technical1 from "../../assets/techimg1.jpg";
import Technical2 from "../../assets/techimg2.jpg";
import Technical3 from "../../assets/Techimg3.jpg";

const Technical = () => {
  return (
    <div className="Technical-Total mt-4">
      <h1 className="Technical-title">Technical Articles</h1>
      <div className="Total-cards">
        <div className="Technical-card">
          <img src={Technical1} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <button className="Tech-card-button1">Read More</button>
        </div>
        <div className="Technical-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <button className="Tech-card-button2">Read More</button>
        </div>
        <div className="Technical-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <button className="Tech-card-button3">Read More</button>
        </div>
        <div className="Technical-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Tech-card-image" />
          <h2 className="Tech-card-title">Building an AI-enabled point of care device</h2>
          <p className="Techcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
          <button className="Tech-card-button3">Read More</button>
        </div>
        
      </div>
    </div>
  );
};

export default Technical;
