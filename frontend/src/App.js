import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import Home from './pages/Home';  
import Hospitality from './pages/hospitality'; 
import RetailPOS from './pages/RetailPOS';  
import Contact from './pages/contact';
import About from './pages/About';
import Services from './pages/services';
import Hardware from './pages/hardware';
import Location from './pages/location';



function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/RetailPOS" element={<RetailPOS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/location" element={<Location />} />

        </Routes>
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
