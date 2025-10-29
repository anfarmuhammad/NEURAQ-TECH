// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Innovation from './Pages/Innovation';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Legal from './Pages/Legal';
import Base from './Pages/Base';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/base" element={<Base />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;