import React from 'react';
import "./Dentalhome.css";
import dentalimg from "../../assets/dentalbg.jpg";
import animationbg from "../../assets/animationbg.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
const Dentalhome = () => {
    return (
        <div className="oralcamera-Dental-header">
            <div className="oralcamera-left-Bg" style={{ backgroundImage: `url(${animationbg})` }}>
                <div className="oralcamera-total-text">
                    <p className="oralcamera-static-text">Sharper Insights. Brighter Smiles<br></br>Advanced Dental Camera Solutions</p>
                    {/* <h4 className="oralcamera-text-sticky">For Diagnosis & Treatment Procedures</h4> */}
                    <div className="oralcamera-buttons-inform">
                        <AnimatedButton className="oralcamera-contactus-Button" text="Contact us" backgroundColor="#69ba2f" animationColor="#344ea1" hoverColor="344ea1"></AnimatedButton>
                        <AnimatedButton className="oralcamera-getQuote-Button" text="Download Tech Document" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="344ea1"></AnimatedButton>
   
                    </div>
                </div>
            </div>
            <div className="oralcamera-Right-Dental">
                <img src={dentalimg} alt="Dental Home" className="oralcamera-Dental-Img" />
            </div>
        </div>
    );
};

export default Dentalhome;
