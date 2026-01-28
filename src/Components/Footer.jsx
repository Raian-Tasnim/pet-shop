import React from 'react';
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#6F4E37] text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Brand logo" 
                className="h-12 w-auto rounded-xl object-contain" 
              />
              <span className="text-xl font-bold text-white">Pet Heaven</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300/90">
              Providing the best care, food, and toys for your furry friends. 
              Because they aren't just pets, they are family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#dogs" className="hover:text-white transition">Dog Food & Toys</a></li>
              <li><a href="#cats" className="hover:text-white transition">Cat Essentials</a></li>
              <li><a href="#birds" className="hover:text-white transition">Bird Care</a></li>
              <li><a href="#accessories" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#returns" className="hover:text-white transition">Returns & Refunds</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4 text-slate-300/90">Subscribe for exclusive pet tips and discounts.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-lg bg-[#5a3e2b] border border-[#8B6E57] text-white placeholder-slate-400 focus:outline-none focus:border-[#F5F5DC]"
              />
              <button className="bg-[#F5F5DC] hover:bg-[#bd4e0eb8] px-5 py-2 rounded-lg text-sm text-[#6f4a37b8] hover:text-[#F5F5DC] font-medium transition w-full md:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#8B6E57] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pet Shop Name. All rights reserved.</p>
          
          {/* Social Icons (Placeholders) */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};