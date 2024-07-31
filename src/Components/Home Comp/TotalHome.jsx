import React from 'react';
import Homepage from "./1.Home page/Homepage"
import Intraoralpg from './2.Camera Page/Intraoralpg';
import RectangleBox from './3.Rectangle Page/RectangleBox';
import Dentalvideopg from './4.Dental video Page/Dentalvideopg';
import Casestudy from './5.CaseStudy Page/Casestudy';
import Technical from './6.Technical Artical Page/Technical';
import Testimonials from './7.Testimonials comp/Testimonials';
import Whatsapart from './8.Whats apart Page/Whatsapart';
import CertificationQuality from './9.CertificationQuality Page/CertificationQuality';
import Footerpage from '../Footer comp/Footerpage';


const TotalHome = () => {
    return (
        <div>
          <Homepage/>
      <Intraoralpg/>
      <RectangleBox />
      <Dentalvideopg />
      <Casestudy />
      <Technical />
      < Testimonials/>
      <Whatsapart />
      <CertificationQuality />
      <Footerpage/>
        </div>
    );
}

export default TotalHome;
