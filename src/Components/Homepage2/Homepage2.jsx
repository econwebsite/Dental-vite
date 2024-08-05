import React from 'react';
import Carouselcomp from "./Carousel comp/Carouselcomp"
import Paragraph from "../Homepage2/Paragraph comp/Paragraph"
import Cardcomp from "../Homepage2/Card comp/Cardpage"
import Tabspage from "../Homepage2/Tabscomp/Tabspage"
import ContactUs from "../Homepage2/Contact Us comp/ContactUs"
import Dentalvideopg from "../Home Comp/4.Dental video Page/Dentalvideopg"
import CertificationQuality from "../../Components/Home Comp/9.CertificationQuality Page/CertificationQuality"

const Homepage2 = () => {
    return (
        <div style={{with:"100%"}}>
        <Carouselcomp/>
        <Paragraph/>
        <Cardcomp/>
        <Tabspage/>
        <div style={{marginTop:"20px"}}></div>
        {/* <RectangleBox/> */}
        <Dentalvideopg/>
        <CertificationQuality/>
        <div style={{marginTop:"30px"}}></div>
        <ContactUs/>
        </div>
    );
}

export default Homepage2;
