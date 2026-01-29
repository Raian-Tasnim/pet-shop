import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../assets/logo.png";
import { Heart, ShoppingCart } from 'lucide-react'; // Import ShoppingCart

// 1. Receive cartItems as a prop
export const Header = ({ cartItems }) => {
  return (
    <header className="w-full bg-[#6F4E37] text-slate-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold rounded-xl tracking-wide cursor-pointer flex items-center gap-2">
           <img src={logo} alt="Brand logo" className="h-12 w-auto rounded-xl object-contain" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Home</Link>
          <Link to="/adopt" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Adopt</Link>
          <Link to="/shop" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Shop</Link>
          <Link to="/sell" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">Sell Gear</Link>
        </nav>

        {/* Button Group */}
        <div className="hidden md:flex items-center gap-6">
            
            {/* Favorites */}
            <Link to="/favorites" className="text-[#F5F5DC] hover:text-white transition relative">
              <Heart size={24} />
            </Link>

            {/* 2. NEW: Cart Icon with Badge */}
            <Link to="/cart" className="text-[#F5F5DC] hover:text-white transition relative group">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#bd4e0e] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#6F4E37]">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button className="bg-[#F5F5DC] hover:bg-white px-5 py-2 rounded-lg text-sm text-[#6F4E37] font-bold transition shadow-sm">
              Sign In
            </button>
        </div>

        <div className="md:hidden text-[#F5F5DC] text-2xl cursor-pointer">☰</div>
      </div>
    </header>
  )
}