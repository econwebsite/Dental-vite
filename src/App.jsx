import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TotalBlog from './Components/Blog comp/TotalBlog';
import TotalHome from './Components/Home Comp/TotalHome';
import Navbarpage from './Components/NavBar Comp/Navbarpage';

function App() {
  return (
    <>
  {/* high */}
  {/* mlml */}
    <BrowserRouter>
    <Navbarpage /> 
      <Routes>
        <Route path="/" element={<TotalHome />} />
        <Route path="/blog" element={<TotalBlog />} />
    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
