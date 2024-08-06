import React from 'react';
import "./homepg.css";
import dentalimg from "../../assets/dentalbg.jpg";
import animationbg from "../../assets/animationbg.jpg";

const Homepage = () => {
    return (
        <div className="oralcamera-Dental-header">
            <div className="oralcamera-left-Bg" style={{ backgroundImage: `url(${animationbg})` }}>
                <div className="oralcamera-total-text">
                    <p className="oralcamera-static-text">Customized<br></br>Dental<br></br>Camera Solutions</p>
                    <h4 className="oralcamera-text-sticky">For Diagnosis & Treatment Procedures</h4>
                    <div className="oralcamera-buttons-inform">
                        <button className="oralcamera-contactus-Button">Contact us</button>
                        <button className="oralcamera-getQuote-Button">Download Tech Document</button>
                    </div>
                </div>
            </div>
            <div className="oralcamera-Right-Dental">
                <img src={dentalimg} alt="Dental Home" className="oralcamera-Dental-Img" />
            </div>
        </div>
    );
};

export default Homepage;
