import React from 'react';
import './Releated.css'; // Ensure this file is named Releated.css

const Releatedvideo = () => {
  return (
    <div className='new-component-pg'>
      <div className="new-component-container">
        <div className="new-component-left-column" data-aos="fade-right" data-aos-duration="1000">
          <div className="new-component-box">
            <iframe className="new-component-iframe" src="https://www.youtube.com/embed/0N7yYPasRnU?si=97_D6O1wcerLY3t7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h6 className="new-component-title">Intraoral video</h6>
          </div>
          <div className="new-component-box">
            <iframe className="new-component-iframe" src="https://www.youtube.com/embed/tTpEv9rxdJQ?si=sunhSfEzVVu2u2SH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h6 className="new-component-title">Extraoral video</h6>
          </div>
        </div>

        <div className="new-component-right-column" data-aos="fade-left" data-aos-duration="1000">
          <div className="new-component-box">
            <iframe className="new-component-iframe" src="https://www.youtube.com/embed/7tk3NN3xc1k?si=c0mLZOJbham7QkAk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h6 className="new-component-title">Loupe camera video</h6>
          </div>
          <div className="new-component-box">
            <iframe className="new-component-iframe" src="https://www.youtube.com/embed/0Yb9zaAPlgQ?si=VFRu94gF5i5ASRLJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h6 className="new-component-title">Dental camera video</h6>
          </div>
          <div style={{ marginBottom: "20px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Releatedvideo;
