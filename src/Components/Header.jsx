import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="w-full bg-[#6F4E37] text-slate-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo - Use Link for Home */}
        <Link to="/" className="text-2xl font-bold rounded-xl tracking-wide cursor-pointer flex items-center gap-2">
           <img
             src={logo} 
             alt="Brand logo" 
             className="h-12 w-auto rounded-xl object-contain" 
           />
        </Link>

        {/* Navigation - Use Link instead of a href */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Home
          </Link>
          
          <Link to="/adopt" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Adopt
          </Link>
          
          <Link to="/shop" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Shop
          </Link>
          
          <Link to="/sell" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Sell Gear
          </Link>
        </nav>

        {/* Button Group */}
        <div className="hidden md:flex items-center gap-4">
            <button className="bg-[#F5F5DC] hover:bg-white px-5 py-2 rounded-lg text-sm text-[#6F4E37] font-bold transition shadow-sm">
              Sign In
            </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-[#F5F5DC] text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </header>
  )
}