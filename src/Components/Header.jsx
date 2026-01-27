import React from 'react'

export const Header = () => {
  return (
    <header className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Brand
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
        <button className="hidden md:block bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg text-sm font-medium transition">
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
