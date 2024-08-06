import React from 'react';
import './intraoral.css';
import Intraoral from "../../assets/Intraoral.jpg";
import Extraoral from "../../assets/extraoral.jpg";

function Intraoralpg() {
  return (
    <div>
      <div className="typecamera-Header">
        <div className="typecamera-underline"></div>
        <div className="typecamera-Total-cam-blog">
          <div className="typecamera-Oral-left">
            <img src={Intraoral} alt="Example" className="typecamera-Oral-image" data-aos="fade-right" data-aos-duration="1000"/>
          </div>
          <div className="typecamera-Oral-right">
            <h1 className="typecamera-oral-title1">IntraOral Camera</h1>
            <p className="typecamera-Oral-paragraph">Digital cameras allow instant images, easy storage, and integration with a variety of dental practice management software applications to document clinical situations, enhance insurance submissions, etc. High resolution and accurate color reproduction are some of the critical requirements across various diagnosis and treatment procedures.</p>
            <div className="typecamera-Oral-Butons1">
              <button className="typecamera-Down-tech-button">Download Tech Documents</button>
              <button className="typecamera-Get-Sample-button">Get Sample</button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="typecamera-Header">
        <div className="typecamera-underline"></div>
        <div className="typecamera-Total-cam-blog">
          <div className="typecamera-Oral-right">
            <h1 className="typecamera-oral-title2">ExtraOral Camera</h1>
            <p className="typecamera-Oral-paragraph">Digital cameras allow instant images, easy storage, and integration with a variety of dental practice management software applications to document clinical situations, enhance insurance submissions, etc. High resolution and accurate color reproduction are some of the critical requirements across various diagnosis and treatment procedures.</p>
            <div className="typecamera-Oral-Butons2">
              <button className="typecamera-Down-tech-button">Download Tech Documents</button>
              <button className="typecamera-Get-Sample-button">Get Sample</button>
            </div>
          </div>
          <div className="typecamera-Oral-left">
            <img src={Extraoral} alt="Example" className="typecamera-Oral-image" data-aos="fade-left" data-aos-duration="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intraoralpg;
