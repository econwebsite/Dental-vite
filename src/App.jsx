import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import TotalBlog from './Components/Blog comp/TotalBlog';
import TotalHome from './Components/Home Comp/TotalHome';
import Navbarpage from './Components/NavBar Comp/Navbarpage';
import Homepage2 from './Components/Homepage2/Homepage2';
import Product from './Components/Product/Product';
import Footerpage from "./Components/Footer comp/Footerpage";
function App() {
  return (
    <>
  
    <BrowserRouter>
    
    <div className='fixed-container'>
    <Navbarpage/> 
      <Routes>
        
        <Route path="/" element={<TotalHome />} />
        <Route path="/blog" element={<TotalBlog />} />
        <Route path="/homepage2" element={<Homepage2/>} />
        <Route path="/product" element={<Product/>} />
    
      </Routes>
      </div>
      
    </BrowserRouter> 
    <Footerpage/>
    </>
  );
}

export default App;
