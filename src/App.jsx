import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TotalBlog from './Components/Blog comp/TotalBlog';
import TotalHome from './Components/Home Comp/TotalHome';
import Navbarpage from './Components/NavBar Comp/Navbarpage';
import Homepage2 from './Components/Homepage2/Homepage2';
import Totalproducts from './Components/product comp/Totalproducts';

function App() {
  return (
    <>
   
    <BrowserRouter>
     <Navbarpage/> 
    <div className='fixed-container'>
      <Routes>
        <Route path="/" element={<TotalHome />} />
        <Route path="/blog" element={<TotalBlog />} />
        <Route path="/homepage2" element={<Homepage2/>} />
        <Route path="/product" element={<Totalproducts/>} />
    
      </Routes>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
