import React from 'react'
import logo from "../assets/logo.png"
export const Header = () => {
  return (
    <header className="w-full bg-[#6F4E37] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold rounded-xl tracking-wide cursor-pointer ">
           <img
             src={logo} 
             alt="Brand logo" 
             className="h-15 w-auto  rounded-xl object-contain" 
           />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-slate-300 hover:text-white transition">
            Home
          </a>
          <a href="#products" className="text-slate-300 hover:text-white transition">
            Products
          </a>
          <a href="#about" className="text-slate-300 hover:text-white transition">
            About
          </a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-[#F5F5DC] hover:bg-[#bd4e0eb8] px-5 py-2 rounded-lg text-sm text-[#6f4a37b8] hover:text-[#F5F5DC] font-medium transition">
          Sign In
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </header>
  )
}
