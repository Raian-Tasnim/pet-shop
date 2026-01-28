import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Adopt } from './Components/Adopt';
import { Shop } from './Components/Shop';
import { Sell } from './Components/Sell';
import { Contact } from './Components/Contact'; // 1. Import Contact

import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;