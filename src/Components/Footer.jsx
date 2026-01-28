import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#6F4E37] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Section: 4 Distinct Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* 1. Brand Identity */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={logo} 
                alt="Brand logo" 
                className="h-12 w-auto rounded-xl object-contain bg-white/5 p-1 group-hover:bg-white/10 transition" 
              />
              <span className="text-xl font-bold text-white tracking-wide">Happy Tales</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300/80 pr-4">
              More than just a pet shop. We are a community dedicated to finding homes for pets and giving used gear a second life.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F5F5DC] hover:text-[#6F4E37] transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F5F5DC] hover:text-[#6F4E37] transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F5F5DC] hover:text-[#6F4E37] transition duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* 2. Services (The 3 Main Pillars) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Our Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/adopt" className="flex items-center gap-2 hover:text-[#F5F5DC] hover:translate-x-1 transition duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4e0e]"></span> Adopt a Pet
                </Link>
              </li>
              <li>
                <Link to="/shop" className="flex items-center gap-2 hover:text-[#F5F5DC] hover:translate-x-1 transition duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4e0e]"></span> Premium Shop
                </Link>
              </li>
              <li>
                <Link to="/sell" className="flex items-center gap-2 hover:text-[#F5F5DC] hover:translate-x-1 transition duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4e0e]"></span> Sell Your Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company & Support (Consolidated) */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-[#F5F5DC] transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F5F5DC] transition">Contact & Support</Link>
              </li>
              {/* Removed redundant "Shipping/Returns" links. "Contact" covers all support needs. */}
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="bg-[#5a3e2b]/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Join the Family</h3>
            <p className="text-xs text-slate-400 mb-4">Get the latest adoption updates and shop discounts.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#6F4E37] border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F5F5DC] transition"
                />
              </div>
              <button className="bg-[#F5F5DC] hover:bg-white text-[#6F4E37] font-bold py-2.5 rounded-lg text-sm transition shadow-lg flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* --- Bottom Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Happy Tales. Made with love for pets.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#F5F5DC] cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-[#F5F5DC] cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};