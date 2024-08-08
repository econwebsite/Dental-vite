import React from 'react';
import Dentalhome from './Denatalpage comp/Dentalhome';
import Paragraph from './Paragraph comp/Paragraph';
import Homecard from "../Homepage Comp/Card comp/Homecard"
import HomeTabs from "../Homepage Comp/HomeTabscomp/HomeTabs"
import Homevideo from "../Homepage Comp/video comp/Homevideo"
import ContactUs from "../Homepage Comp/Contact Us comp/ContactUs"
const TotalHomepage = () => {
    return (
        <div style={{with:"100%"}}>
        <Dentalhome/>
        <Paragraph/>
        <Homecard/>
        <HomeTabs/>
        <div style={{marginTop:"20px"}}></div>
        <Homevideo/>
        <div style={{marginTop:"30px"}}></div>
        <ContactUs/>
        </div>
    );
}

export default TotalHomepage;
