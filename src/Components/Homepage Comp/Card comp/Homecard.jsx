import React from 'react';
import './Homecard.css';
import Cardimg1 from "../../assets/Cardimg1.png";
import Cardimg2 from "../../assets/Cardimg2.jpg";
import Cardimg3 from "../../assets/Cardimg3.png";
import AnimatedButton from "../../Button comp/AnimatedButton"
const cards = [
  {
    title: "IntraOral Camera",
    paragraph: "Ready to use Full HD intraoral USB camera specially designed to fulfill the needs of your dental imaging device.",
    imgSrc: Cardimg1
  },
  {
    title: "ExtraOral Camera",
    paragraph: "Our 4K extraoral cameras can be mounted to any dental lights or dental chairs to capture every treatment.",
    imgSrc: Cardimg2
  },
  {
    title: "Loupe Camera",
    paragraph: "Our compact and lightweight loupe camera helps to bring our best quality images.",
    imgSrc: Cardimg3
  }
];
const Homecard = () => {
  return (
    
    <div className="mainContainer">
    <div className="second-home-card-container">
      {cards.map((card, index) => (
        <div className="second-home-card" key={index}>
          <div className="second-home-card-inner">
            <img src={card.imgSrc} alt={card.title} className="second-home-card-img" />
            <h2 className="second-home-card-title">{card.title}</h2>
            <p className="second-home-card-paragraph">{card.paragraph}</p>
            <AnimatedButton className="second-home-button" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"></AnimatedButton>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Homecard;
