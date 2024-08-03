import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import Career from './pages/Career';


const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-r from-purple-200 via-yellow-50 to-purple-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

