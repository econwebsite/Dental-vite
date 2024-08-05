import React from 'react';
import Carouselcomp from "./Carousel comp/Carouselcomp"
import Paragraph from "../Homepage2/Paragraph comp/Paragraph"
import Cardcomp from "../Homepage2/Card comp/Cardpage"
import Tabspage from "../Homepage2/Tabscomp/Tabspage"
import ContactUs from "../Homepage2/Contact Us comp/ContactUs"
import RectangleBox from "../Home Comp/3.Rectangle Page/RectangleBox"
import Dentalvideopg from "../Home Comp/4.Dental video Page/Dentalvideopg"
import Testimonials from "../Home Comp/7.Testimonials comp/Testimonials"
import Footer from "../Footer comp/Footerpage"
const Homepage2 = () => {
    return (
        <div style={{with:"100%"}}>
        <Carouselcomp/>
        <Paragraph/>
        <Cardcomp/>
        <Tabspage/>
        <div style={{marginTop:"20px"}}></div>
        <RectangleBox/>
        <Dentalvideopg/>
        <Testimonials/>
        <div style={{marginTop:"90px"}}></div>
        <ContactUs/>
        </div>
    );
}

export default Homepage2;
