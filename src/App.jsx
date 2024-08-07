import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarpage from "./Components/NavBar Comp/Navbarpage";
import TotalHomepage from './Components/Homepage Comp/TotalHomepage';
import TotalBlog from "./Components/Blog Reading comp/TotalBlog";
import Product from "./Components/Product Comp/Product";
import ContactUs from "./Components/Homepage Comp/Contact Us comp/ContactUs";
import Footerpage from "./Components/Footer comp/Footerpage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hubpageblog from './Components/Hubpage Comp/Bloghubpages/Hubpageblog';
import Casehubpage from "./Components/Hubpage Comp/Casestudyhubpage/Casehubpage";
import AutofocusBlog from "./Components/Blog Reading comp/Autofocus-Blogs/AutofocusBlog"
import Threeimportant from './Components/Blog Reading comp/Threeimportant-Blogs/Threeimportant';
function App() {
  return (
    <BrowserRouter>
      <div className='fixed-container'>
        <Navbarpage />
        <Routes>
          <Route path="/" element={<TotalHomepage />} />
          <Route path="/blog" element={<TotalBlog />} />
          <Route path="/Autofocus-Blog-page" element={<AutofocusBlog/>}/>
          <Route path="/Three-Important-Blog" element={<Threeimportant/>}/>
          <Route path="/home" element={<TotalHomepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/bloghubpage" element={<Hubpageblog />} />
          <Route path="/casestudy" element={<Casehubpage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footerpage />
      </div>
    </BrowserRouter>
  );
}

export default App;
