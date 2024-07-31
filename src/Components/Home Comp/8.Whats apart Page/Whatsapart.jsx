import React from 'react';
import "./whatsappart.css";
import Whatsapart1 from "../../assets/Whatsapart1.png"
import Whatsapart2 from "../../assets/Whatsapart2.png"
import Whatsapart3 from "../../assets/Whatsapart3.png"
import Whatsapart4 from "../../assets/Whatsapart4.png"
import Whatsapart5 from "../../assets/Whatsapart5.png"
import Whatsapart6 from "../../assets/Whatsapart6.png"

const Whatsapart = () => {
  return (
    <div className="Totla-whatapart">
      <h2 className="whats-heading" >What Sets Us Apart?</h2>
      <div className="columns-Total">
        <div className="inside-Column" data-aos="zoom-in-right" data-aos-duration="1500">
          <div className="what-row">
            <img src={Whatsapart1} alt="Image 1" className="what-image" />
            <p className="What-paragraph">Blazing-fast prototyping<br />for accelerating<br />time-to-market</p>
          </div>
          <div className="what-row">
            <img src={Whatsapart2} alt="Image 2" className="what-image" />
            <p className="What-paragraph">Custom hardware /software-<br />AI algorithms, form factor,<br />ISP turning,lens,etc.</p>
          </div>
          <div className="what-row">
            <img src={Whatsapart3} alt="Image 3" className="what-image" />
            <p className="What-paragraph">Compliance adherence-<br />ISO 9001:2015 certified</p>
          </div>
        </div>
        <div className="what-divider"></div>
        <div className="inside-Column" data-aos="zoom-in-left" data-aos-duration="1500">
          <div className="what-row">
            <img src={Whatsapart4} alt="Image 4" className="what-image" />
            <p className="What-paragraph">Latest camera technologies<br />like GMSL2, RGB-IR,<br />TIme-of-Flight, etc.</p>
          </div>
          <div className="what-row">
            <img src={Whatsapart5} alt="Image 5" className="what-image" />
            <p className="What-paragraph">3-years warranty period on all<br />camera products</p>
          </div>
          <div className="what-row">
            <img src={Whatsapart6} alt="Image 6" className="what-image" />
            <p className="What-paragraph">A  team  of  of 300 extreamely<br />skilled core engineers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsapart;
