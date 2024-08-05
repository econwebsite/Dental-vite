import React from 'react'
import ProductCarousel from './ProductCarosel';
import './Product.css';
import ProductTabs from '../Product/ProductTabsComp/ProductTabs';
import Technical from './TechnicalArtical/Technical';
import Productrelvideos from './RelatedVideosComp/Productrelvideos';
const Product = () => {
  return (
    <div className='col-12 productSection' style={{backgroundColor:'#f1f2f2'}}>
 <div className='col-lg-12 col-sm-12 col-md-12 d-flex p-2 flex-wrap' >
    <div className='col-lg-4 col-sm-12 col-md-4 productLeftSide'>
        <ProductCarousel />
    </div>
    <div className='col-lg-8 col-sm-12 col-md-8 p-4 mb-0 productRightSide'>
    <div className="breadcrumb">Home {'>'} Products {'>'} Intraoral Cameras</div>
    <h1 className='primaryTitle'>Full HD Intraoral Camera</h1>
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
            <button className="buyNowButton">Contact Us</button>
        </div>
        <div className='col-lg-5 col-sm-12 col-md-6'>
            <p>Downloads</p>
            <button className="docDownloadButton">Downloads</button>
        </div>
    </div>
    </div>
    <ProductTabs />
 </div>
 
 <Technical />
 <Productrelvideos />
 </div>
  )
}

export default Product