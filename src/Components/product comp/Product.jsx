import React from 'react'
import ProductCarousel from './ProductCarosel';
import './Product.css';
import ProductTabs from '../Product Comp/ProductTabsComp/ProductTabs';
import CaseStudies from '../Product Comp/RelatedCaseStudiesComp/CaseStudies';
import Technical from './TechnicalArtical/Technical';
import Homevideo from '../Homepage Comp/video comp/Homevideo';
import AnimatedButton from "../Button comp/AnimatedButton"
const Product = () => {
    return (
        
        <div className='col-12 productSection' style={{ backgroundColor: '#f1f2f2' }}>
            <div className='mainContainer'>
            <div className='col-lg-12 col-sm-12 col-md-12 d-flex py-2 flex-wrap' >
                
                <div className='col-lg-4 col-sm-12 col-md-4 productLeftSide'>
                    <ProductCarousel />
                </div>
                <div className='col-lg-8 col-sm-12 col-md-8 p-4 mb-0 productRightSide'>
                    <div className="breadcrumb">Home {'>'} Products {'>'} IntraOral Cameras</div>
                    <h1 className='primaryTitle'>Full HD IntraOral Camera</h1>
                    <div className='productHighlights mb-4 ps-4'>
                        <h2 className='secondaryName my-1'>Highlights</h2>
                        <ul className='highlightList mt-2 ms-3'>
                            <li>5MP Resolution</li>
                            <li>5mm – 70mm Depth of Field</li>
                            <li>Working distance of 5mm</li>

                        </ul>
                    </div>
                    <div className='ProductPriceSection col-12 d-flex flex-wrap'>
                        <div className='col-lg-5 col-sm-12 col-md-6'>
                            <p>Sample Price</p>
                            <AnimatedButton className="buyNowButton" text="Contact Us" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

                        </div>
                        <div className='col-lg-5 col-sm-12 col-md-6'>
                            <p>Techinical Documents</p>
                            <AnimatedButton className="docDownloadButton" text="Downloads" backgroundColor="#00aeef" animationColor="#69ba2f" hoverColor="#69ba2f"></AnimatedButton>

                        </div>
                    </div>
                </div>
                <ProductTabs />
            </div>
            <Homevideo />
            <Technical />
            <CaseStudies />
            </div>
        </div>
    )
}

export default Product