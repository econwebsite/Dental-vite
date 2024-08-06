import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import TotalBlog from './Components/Blog comp/TotalBlog';
// import TotalHome from './Components/Home Comp/TotalHome';
import Navbarpage from './Components/NavBar Comp/Navbarpage';
import Homepage2 from './Components/Homepage2/Homepage2';
import Product from './Components/Product/Product';
import Footerpage from "./Components/Footer comp/Footerpage";
import ContactUs from './Components/Homepage2/Contact Us comp/ContactUs';
import Totalhubblog from "./Components/Hubpages/Bloghubpages/Totalhubblog"
import Casehubpage from "./Components/Hubpages/Casestudyhubpage/Casehubpage"
import AboutUs from './Components/AboutUs/AboutUs';
function App() {
  return (
    <>
  
    <BrowserRouter>
    
    <div className='fixed-container'>
    <Navbarpage/> 
      <Routes>
    
        <Route path="/" element={<Homepage2 />} />
        <Route path="/blog" element={<TotalBlog />} />
        <Route path="/home" element={<Homepage2/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/bloghub" element={<Totalhubblog/> } />
        <Route path="/casehub" element={<Totalhubblog/> } />
        <Route path="/casehub" element={<Casehubpage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
    
      </Routes>
      </div>
      
    </BrowserRouter> 
    <Footerpage/>
    </>
  );
}

export default App;
