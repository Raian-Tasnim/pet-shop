import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider, useAuth } from './Context/AuthContext';

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
import { Privacy } from './Components/Privacy';
import { Terms } from './Components/Terms';
import ScrollToTop from './Components/ScrollToTop';
import { Toast } from './Components/Toast'; 

// Auth Components
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { AdminRoute } from './Components/AdminRoute';
import { AdminDashboard } from './Components/AdminDashboard';

function AppContent({ favorites, toggleFavorite, cartItems, addToCart, removeFromCart, updateQuantity, clearCart, toast, closeToast }) {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        
        <Header cartItems={cartItems} clearCart={clearCart} />
        
        <Toast message={toast.message} isVisible={toast.show} type={toast.type} onClose={closeToast} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<ProtectedRoute><Adopt favorites={favorites} toggleFavorite={toggleFavorite} /></ProtectedRoute>} />
          <Route path="/adopt/:id" element={<ProtectedRoute><PetDetails /></ProtectedRoute>} />
          <Route path="/shop" element={<ProtectedRoute><Shop addToCart={addToCart} /></ProtectedRoute>} />
          
          <Route 
            path="/cart" 
            element={
              <ProtectedRoute>
                <Cart 
                  cartItems={cartItems} 
                  removeFromCart={removeFromCart} 
                  updateQuantity={updateQuantity} 
                />
              </ProtectedRoute>
            } 
          />

          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/privacy" element={<ProtectedRoute><Privacy /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><Terms /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites favorites={favorites} toggleFavorite={toggleFavorite} /></ProtectedRoute>} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <Checkout cartItems={cartItems} clearCart={clearCart} />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/sell" 
            element={
              <ProtectedRoute>
                <Sell />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/admin" 
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } 
          />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

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

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      setToast({ show: true, message: `${product.name} is already in your cart!`, type: 'info' });
      return; 
    }
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    setToast({ show: true, message: `${product.name} added to cart!`, type: 'success' });
  };

  const removeFromCart = (id) => setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);
  const closeToast = () => setToast({ ...toast, show: false });

  return (
    <AuthProvider>
      <AppContent 
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        toast={toast}
        closeToast={closeToast}
      />
    </AuthProvider>
  );
}

export default App;