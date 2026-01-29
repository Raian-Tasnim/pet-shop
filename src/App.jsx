import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Adopt } from './Components/Adopt';
import { Shop } from './Components/Shop';
import { Sell } from './Components/Sell';
import { Contact } from './Components/Contact';
import { Favorites } from './Components/Favorites'; // Import new component
import ScrollToTop from './Components/ScrollToTop';

function App() {
  // 1. STATE IS HERE NOW
  const [favorites, setFavorites] = useState([]);

  // 2. TOGGLE FUNCTION IS HERE NOW
  const toggleFavorite = (petId) => {
    if (favorites.includes(petId)) {
      setFavorites(favorites.filter(id => id !== petId));
    } else {
      setFavorites([...favorites, petId]);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        
        {/* Pass favorites count to Header if you want to show a badge later */}
        <Header /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* PASS PROPS TO ADOPT */}
          <Route 
            path="/adopt" 
            element={<Adopt favorites={favorites} toggleFavorite={toggleFavorite} />} 
          />
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;