import React from 'react';
import './Casestudy.css'; // Ensure this is the correct CSS file path
import Dentalimg from "../../assets/des.jpg";
import rightimg1 from "../../assets/rightimg 1.png";
import rightimg2 from "../../assets/rightimg 2.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
const Casestudy = () => {
  return (
    <div className='seccasestudy-pg'>
      <div className="seccasestudy-component-container">
        <div className="seccasestudy-left-column">
          <div className="seccasestudy-merged-box"data-aos="zoom-in-right" data-aos-duration="1300">
            <img src={Dentalimg} alt="Full Image" className="seccasestudy-full-image" />
            <div className="seccasestudy-box-content">
              <h4>The Roadmap of Dual Ethernet Camera Integration in Dental Operatory Lights</h4>
              <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer. In this case study, we discuss the challenges we faced during the prototyping phase. Read how we customized the camera architecture and implemented other enhanced modifications, such as reduced latency and lens shading correction, to achieve superior image quality in brightly illuminated dental environments.</p>
            <br></br>
            <AnimatedButton className="seccasestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
            </div>
         
          </div>
        </div>

        <div className="seccasestudy-right-column" data-aos="zoom-in-left" data-aos-duration="1300">
          {/* <div className="seccasestudy-box">
            <img src={rightimg1} alt="Box 1" className="seccasestudy-box-image" />
            <div className="seccasestudy-box-content">
              <h6>The Roadmap of Dual Ethernet Camera Integration in Dental Operatory Lights</h6>
              <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights...</p>
              <AnimatedButton className="seccasestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
              </div>
          </div> */}
          <div className="seccasestudy-box">
            <img src={rightimg2} alt="Box 2" className="seccasestudy-box-image" />
            <div className="seccasestudy-box-content">
              <h6>AI-driven and Portable Point-Of-Care Device for Pre-Cancer Screening for a US Medical Device Manufacturer</h6>
              <p>Read to know how e-con Systems developed a custom camera solution for an AI-driven, portable point-of-care device for pre-cancer screening.</p>
              <AnimatedButton className="seccasestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
              </div>
          </div>
          <div className="seccasestudy-box">
            <img src={rightimg2} alt="Box 3" className="seccasestudy-box-image" />
            <div className="seccasestudy-box-content">
              <h6>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h6>
              <p>This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p>
              <AnimatedButton className="seccasestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
