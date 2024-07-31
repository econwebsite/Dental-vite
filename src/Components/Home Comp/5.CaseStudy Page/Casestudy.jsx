import React from 'react';
import './Casestudy.css'; // Make sure to import the CSS file
import Casestudy1 from "../../assets/Casestudy1.jpg"
import Casestudy2 from "../../assets/Casestudy2.jpg"

const Casestudy = () => {
  return (
    <div className="Total-case-study">
      <div className="case-underline"></div>
      <h1 className="Case-title">Case Study</h1>
      <div className="Casestudy-border-box">
        <img src={Casestudy1} alt="Description" className="Case-images"/>
        <div className="Cse-para-cont">
          <p className='Case-Heading'>Enabling smarter documentation with an iHDR camera for densitry</p>
          <p className='Class-para'>How e-con System helped a top European imaging solution provider build a 4k loupe camera</p>
          <button className="read-morebtn">Read More</button>
        </div>
      </div>
      <br></br>
      <div className="Casestudy-border-box">
        <img src={Casestudy2} alt="Description" className="Case-images"/>
        <div className="Cse-para-cont">
          <p className='Case-Heading'>Building an AI-embeded point of care device with a custom liquid lens camera</p>
          <p className='Class-para'>Learn how e-con helped a leading US medical device manufacturer build an AI-enabled small form factor point of care devices with an autofocus camera</p>
          <button className="read-morebtn">Read More</button>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
