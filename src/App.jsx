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
import { Favorites } from './Components/Favorites'; 
import { PetDetails } from './Components/PetDetails';
import { Cart } from './Components/Cart'; 
import { Checkout } from './Components/Checkout'; 
import ScrollToTop from './Components/ScrollToTop';
import { Toast } from './Components/Toast'; 

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
 
  const toggleFavorite = (petId) => {
    if (favorites.includes(petId)) {
      setFavorites(favorites.filter(id => id !== petId));
    } else {
      setFavorites([...favorites, petId]);
    }
  };

  // --- ADD TO CART LOGIC ---
  const addToCart = (product) => {
   
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
     
      setToast({ 
        show: true, 
        message: `${product.name} is already in your cart!`,
        type: 'info' 
      });
      return; 
    }

    
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    
    setToast({ 
      show: true, 
      message: `${product.name} added to cart!`,
      type: 'success'
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Function to clear the cart 
  const clearCart = () => {
    setCartItems([]);
  };

  const closeToast = () => setToast({ ...toast, show: false });

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        
        <Header cartItems={cartItems} /> 
        
        {/* Toast Notification */}
        <Toast 
          message={toast.message} 
          isVisible={toast.show} 
          type={toast.type} 
          onClose={closeToast} 
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/adopt/:id" element={<PetDetails />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            } 
          />

          {/* Checkout Route with props */}
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                cartItems={cartItems} 
                clearCart={clearCart} 
              />
            } 
          />

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