import React from 'react';
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="w-full bg-[#6F4E37] text-slate-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold rounded-xl tracking-wide cursor-pointer flex items-center gap-2">
           <img
             src={logo} 
             alt="Brand logo" 
             className="h-12 w-auto rounded-xl object-contain" 
           />
           {/* Optional: Add text if logo is small */}
           {/* <span className="text-[#F5F5DC] hidden sm:block">Pet Heaven</span> */}
        </a>

        {/* Navigation - Updated to match your new Business Model */}
        <nav className="hidden md:flex gap-8">
          <a href="/" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Home
          </a>
          {/* Highlight: Adopt */}
          <a href="/adopt" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Adopt
          </a>
          {/* Highlight: Shop */}
          <a href="/shop" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Shop
          </a>
          {/* Highlight: Sell/Thrift */}
          <a href="/sell" className="text-slate-300 hover:text-[#F5F5DC] font-medium transition">
            Sell Gear
          </a>
        </nav>

        {/* Button Group */}
        <div className="hidden md:flex items-center gap-4">
            {/* Optional: Search Icon could go here */}
            
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