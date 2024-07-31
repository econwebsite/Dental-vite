import React from 'react';
import './intraoral.css';
import Intraoral from "../../assets/Intraoral.jpg";
import Extraoral from "../../assets/extraoral.jpg";

function Intraoralpg() {
  return (
    <div>
      <div className="Camera-Header">
        <div className="underline"></div>
        <div className="Total-cam-blog">
          <div className="Oral-left">
            <img src={Intraoral} alt="Example" className="Oral-image"  data-aos="fade-right" data-aos-duration="1000"/>
          </div>
          <div className="Oral-right">
            <h1 className="oral-title1">Intraoral Camera</h1>
            <p className="Oral-paragraph">Digital cameras allow instant images, easy storage, and integration with a variety of dental practice management software applications to document clinical situations, enhance insurance submissions, etc. High resolution and accurate color reproduction are some of the critical requirements across various diagnosis and treatment procedures.</p>
            <div className="Oral-Butons1">
              <button className="Down-tech-button">Download Tech Documents</button>
              <button className="Get-Sample-button">Get Sample</button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="Camera-Header">
        <div className="underline"></div>
        <div className="Total-cam-blog">
          <div className="Oral-right">
            <h1 className="oral-title2">Extraoral Camera</h1>
            <p className="Oral-paragraph">Digital cameras allow instant images, easy storage, and integration with a variety of dental practice management software applications to document clinical situations, enhance insurance submissions, etc. High resolution and accurate color reproduction are some of the critical requirements across various diagnosis and treatment procedures.</p>
            <div className="Oral-Butons2">
              <button className="Down-tech-button">Download Tech Documents</button>
              <button className="Get-Sample-button">Get Sample</button>
            </div>
          </div>
          <div className="Oral-left">
            <img src={Extraoral} alt="Example" className="Oral-image" data-aos="fade-left" data-aos-duration="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intraoralpg;
