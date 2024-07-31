import React from 'react';
import './Dentalvideo.css';

function Dentalvideopg() {
  return (
    <div className="Dental-Video-total">
      <div className="dental-video-left">
        <div className="dental-videos-content">
          <h1>Dental Camera <br /> Videos</h1>
          <p>We deployed a high-quality camera with iHDR for<br />dentistry to help them motivate and educate<br /> dental patients and students.</p>
          <button className="know-more-button">Know More</button>
        </div>
      </div>
      <div className="dental-video-right">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/P6ky60BBwCk?si=PoqfPNqgWKdEZwPg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Dentalvideopg;
