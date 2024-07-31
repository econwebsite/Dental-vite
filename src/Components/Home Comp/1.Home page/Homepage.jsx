import React from 'react';
import "./homepg.css";
import dentalimg from "../../assets/dentalbg.jpg";
import animationbg from "../../assets/animationbg.jpg";

const Homepage = () => {
    return (
        <div className="Dental-header">
            <div className="left-Bg" style={{ backgroundImage: `url(${animationbg})` }}>
                <div className="total-text">
                    <p className="static-text">Customized<br></br>Dental<br></br>Camera Solutions.</p>
                    <h4 className="text-sticky">to Perform Diagnosis & Treatment Procedures</h4>
                    <div className="buttons-inform">
                        <button className="contactus-Button">Contact us</button>
                        <button className="getQuote-Button">Get a Quote</button>
                    </div>
                </div>
            </div>
            <div className="Right-Dental">
                <img src={dentalimg} alt="Dental Home" className="Dental-Img" />
            </div>
        </div>
    );
};

export default Homepage;
