import React from 'react';
import './Blogspage.css'; // Ensure this is the correct CSS file path
import Dentalimg from "../../assets/des.jpg";
import rightimg1 from "../../assets/rightimg 1.png";
import rightimg2 from "../../assets/rightimg 2.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
import { Link } from 'react-router-dom';

const Blogspage = () => {
  return (
    <div className='homeblog-pg'>
      <div className="homeblog-component-container">
        <div className="homeblog-left-column">
          <div className="homeblog-merged-box" data-aos="zoom-in-right" data-aos-duration="1300">
            <img src={Dentalimg} alt="Full Image" className="homeblog-full-image" />
            <div className="homeblog-box-content">
              <h4>Capturing the Dentists' POV with Dental Loupe Cameras</h4>
              <p>Dental loupe cameras are an everyday tool in dentistry. This blog explores features that enable loupe cameras for precise diagnoses, enhanced patient communication, and seamless documentation. Find out why size, color accuracy, and stability are the deciding factors of the loupe camera performance index.</p>
             <br></br>
             <p>In this blog, we explore the five critical factors in depth: ultra-lightweight design, precise color reproduction, effective heat management, advanced image stabilization, and adaptability to variable lighting conditions. Read on to get a comprehensive view of how these features come together to create a state-of-the-art dental loupe camera that improves dentists' and patient experience.</p>
            <br></br>
           
             <AnimatedButton className="homeblog-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" to="/Autofocus-Blog-page"></AnimatedButton>
             </div>
            
          </div>
        </div>

        <div className="homeblog-right-column" data-aos="zoom-in-left" data-aos-duration="1200">
          <div className="homeblog-box">
            <img src={rightimg1} alt="Box 1" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Autofocus vs. Fixed focus: Which Lens to Choose for Intraoral Cameras?</h6>
              <p>Understand how autofocus and fixed focus differentiate the dental imaging quality, device usability, and overall...</p>
           <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 2" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>A Guide to Choosing the Right Dental Intraoral Camera</h6>
              <p>Read to learn about the key features that make a dental intraoral camera ...</p>
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
            </div>
          </div>
          <div className="homeblog-box">
            <img src={rightimg2} alt="Box 3" className="homeblog-box-image" />
            <div className="homeblog-box-content">
              <h6>Three Important Parameters in Intra Oral Camera Technology</h6>
              <p>Learn how three important parameters—Depth of Field, Field of View, and Image Quality...</p>
              <AnimatedButton className="homeblog-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogspage;
