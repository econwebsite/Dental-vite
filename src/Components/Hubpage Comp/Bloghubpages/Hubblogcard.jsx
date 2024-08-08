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
<<<<<<< HEAD
          <h2 className="Hubblogcard-title">Building an AI-enabled point of care device</h2>
          <p className="Hubblogcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
=======
          <h2 className="Hubblogcard-title">How to Overcome Imaging-Related Manufacturing Challenges of Dental Loupes</h2>
          <p className="Hubblogcard-text">"The blog explores how overcoming issues like thermal dissipation, image stabilization...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
          <img src={Technical2} alt="AI-enabled point of care device" className="Hubblogcard-image" />
<<<<<<< HEAD
          <h2 className="Hubblogcard-title">Building an AI-enabled point of care device</h2>
          <p className="Hubblogcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
=======
          <h2 className="Hubblogcard-title">How ISPs Help Extraoral Cameras Significantly Improve Image Quality</h2>
          <p className="Hubblogcard-text">ISPs enhance extraoral camera images by fine-tuning white balance, exposure, and more...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
          <img src={Technical3} alt="AI-enabled point of care device" className="Hubblogcard-image" />
<<<<<<< HEAD
          <h2 className="Hubblogcard-title">Building an AI-enabled point of care device</h2>
          <p className="Hubblogcard-text">Learn how e-con helped a leading US medical device manufacturer</p>
=======
          <h2 className="Hubblogcard-title">Illumination vs. Image Quality: What Extraoral Cameras Really Need</h2>
          <p className="Hubblogcard-text">Read about features like High Dynamic Range (HDR) and Dynamic Tone Mapping (DTM)...</p>
>>>>>>> 7f1d65ba117768d7073045fbb1a2011ce53268c6
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Hubblogcard;
