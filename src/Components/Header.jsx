import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from "../assets/logo.png";
import { Heart, ShoppingCart, LogOut, User, Menu, X } from 'lucide-react'; 
import { useAuth } from '../Context/AuthContext'; 

// 1. Accept clearCart as a prop
export const Header = ({ cartItems, clearCart }) => {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // 2. Clear the cart and log out
    clearCart();
    logout();
    navigate('/');
  };

  return (
    <header className="w-full bg-[#6F4E37] text-slate-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold rounded-xl tracking-wide cursor-pointer flex items-center gap-2">
           <img src={logo} alt="Brand logo" className="h-12 w-auto rounded-xl object-contain" />
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Home</Link>
          <Link to="/adopt" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Adopt</Link>
          <Link to="/shop" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Shop</Link>
          <Link to="/sell" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Sell Gear</Link>
          {user?.role === 'admin' && (
            <Link to="/admin" className="text-purple-300 hover:text-purple-100 font-bold transition">Admin</Link>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-6">
            
            <Link to="/favorites" className="text-[#F5F5DC] hover:text-white transition relative">
              <Heart size={24} />
            </Link>

            {/* Cart Link (Will redirect to login if clicked due to ProtectedRoute) */}
            <Link to="/cart" className="text-[#F5F5DC] hover:text-white transition relative group">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && user && (
                <span className="absolute -top-2 -right-2 bg-[#bd4e0e] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#6F4E37]">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4 pl-4 border-l border-white/20">
                <span className="text-[#F5F5DC] text-sm font-bold flex items-center gap-2">
                  <User size={18} /> {user.name}
                </span>
                <button 
                  onClick={handleLogout}
                  className="bg-[#bd4e0e] hover:bg-[#a0410b] px-4 py-2 rounded-lg text-sm text-white font-bold transition shadow-sm flex items-center gap-2"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 pl-4 border-l border-white/20">
                <Link to="/login">
                  <button className="text-[#F5F5DC] hover:text-white font-bold text-sm transition">
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-[#F5F5DC] hover:bg-white px-5 py-2 rounded-lg text-sm text-[#6F4E37] font-bold transition shadow-sm">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-[#F5F5DC] hover:text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#5c402d] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#F5F5DC] font-medium py-2">Home</Link>
          <Link to="/adopt" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#F5F5DC] font-medium py-2">Adopt</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#F5F5DC] font-medium py-2">Shop</Link>
          <Link to="/sell" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-[#F5F5DC] font-medium py-2">Sell Gear</Link>
          {user?.role === 'admin' && (
            <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-purple-300 hover:text-purple-100 font-bold py-2">Admin</Link>
          )}
          
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <Link to="/favorites" onClick={() => setIsMenuOpen(false)} className="text-[#F5F5DC] hover:text-white flex items-center gap-2">
              <Heart size={20} /> Favorites
            </Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="text-[#F5F5DC] hover:text-white flex items-center gap-2 relative">
              <ShoppingCart size={20} /> Cart
              {cartItems.length > 0 && user && (
                <span className="bg-[#bd4e0e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          <div className="pt-2">
            {user ? (
              <div className="flex flex-col gap-3">
                <span className="text-[#F5F5DC] text-sm font-bold flex items-center gap-2">
                  <User size={18} /> {user.name}
                </span>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#bd4e0e] hover:bg-[#a0410b] py-3 rounded-lg text-sm text-white font-bold transition flex items-center justify-center gap-2"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center">
                  <button className="w-full text-[#F5F5DC] hover:text-white font-bold text-sm py-2">
                    Log In
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full">
                  <button className="w-full bg-[#F5F5DC] hover:bg-white py-3 rounded-lg text-sm text-[#6F4E37] font-bold transition">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}