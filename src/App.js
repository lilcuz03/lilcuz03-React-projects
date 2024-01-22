import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Navbar from './nav/Navbar';
import Footer from './nav/Footer';
import Home from './subfiles/Home';
import About from './subfiles/About';
function App() {
  return (
    <BrowserRouter>
    
    <Navbar />
    <Routes>
      
     
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      

      
    </Routes>
    <Footer />
    
    </BrowserRouter>
    
    
  );
}

export default App;
