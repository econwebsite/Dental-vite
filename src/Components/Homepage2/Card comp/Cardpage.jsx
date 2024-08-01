import React from 'react';
import './Cardcomp.css';
import Cardimg1 from "../../assets/Cardimg1.png";
import Cardimg2 from "../../assets/Cardimg2.jpg";
import Cardimg3 from "../../assets/Cardimg3.png";

const cards = [
  {
    title: "Intraoral Camera",
    paragraph: "Ready to use Full HD intraoral USB camera specially designed to fulfill the needs of your dental imaging device.",
    imgSrc: Cardimg1
  },
  {
    title: "Extraoral Camera",
    paragraph: "Our 4K extraoral cameras can be mounted to any dental lights or dental chairs to capture every treatment.",
    imgSrc: Cardimg2
  },
  {
    title: "Loupe Camera",
    paragraph: "Our compact and lightweight loupe camera helps to bring our best quality images.",
    imgSrc: Cardimg3
  }
];
const Cardpage = () => {
  return (
    <div className="second-home-card-container">
      {cards.map((card, index) => (
        <div className="second-home-card" key={index}>
          <div className="second-home-card-inner">
            <img src={card.imgSrc} alt={card.title} className="second-home-card-img" />
            <h2 className="second-home-card-title">{card.title}</h2>
            <p className="second-home-card-paragraph">{card.paragraph}</p>
            <button className="second-home-card-button">Know More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardpage;
