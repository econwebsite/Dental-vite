import React from 'react';
import './CertificationQuality.css';
import Certification1 from "../../assets/CE ICON-01.png";
import Certification2 from "../../assets/FC ICON-01.png";
import Certification3 from "../../assets/RECYCLE ICO-01.png";
import Certification4 from "../../assets/ROHS ICON-01.png";

const CertificationQuality = () => {
  return (
    <div className="Certification-container">
      <h1 className="certification-heading">Certification & Quality Standards</h1>
      <div className="quality-container">
        <div className="certification-box">
          <div className="inner-box">
            <img src={Certification1} alt="Certification 1" />
          </div>
        </div>
        <div className="certification-box">
          <div className="inner-box">
            <img src={Certification2} alt="Certification 2" />
          </div>
        </div>
        <div className="certification-box">
          <div className="inner-box">
            <img src={Certification3} alt="Certification 3" />
          </div>
        </div>
        <div className="certification-box">
          <div className="inner-box">
            <img src={Certification4} alt="Certification 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationQuality;
