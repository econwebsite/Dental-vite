import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TotalBlog from './Components/Blog comp/TotalBlog';
import TotalHome from './Components/Home Comp/TotalHome';
import Navbarpage from './Components/NavBar Comp/Navbarpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbarpage /> 
    <div className='fixed-container'>
      <Routes>
        <Route path="/" element={<TotalHome />} />
        <Route path="/blog" element={<TotalBlog />} />
    
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
