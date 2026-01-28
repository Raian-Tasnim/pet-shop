import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

export const Shop = () => {
  const products = [
    { id: 1, name: "Premium Dog Kibble", price: 45.00, rating: 5, img: "Food" },
    { id: 2, name: "Feather Wand Toy", price: 12.50, rating: 4, img: "Toy" },
    { id: 3, name: "Orthopedic Bed", price: 85.00, rating: 5, img: "Bed" },
    { id: 4, name: "Automatic Feeder", price: 120.00, rating: 4, img: "Tech" },
    { id: 5, name: "Natural Chews", price: 15.00, rating: 5, img: "Treats" },
    { id: 6, name: "Cat Scratch Post", price: 35.00, rating: 4, img: "Scratcher" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Slim Header */}
      <div className="bg-[#6F4E37] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">Shop Essentials</h1>
          <div className="flex gap-3">
             <button className="px-4 py-2 rounded-lg bg-[#5a3e2b] text-sm hover:bg-[#bd4e0e] transition">Latest</button>
             <button className="px-4 py-2 rounded-lg bg-[#5a3e2b] text-sm hover:bg-[#bd4e0e] transition">Popular</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8">
          <div>
            <h3 className="font-bold text-[#6F4E37] mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-slate-600">
              {['Food & Treats', 'Toys', 'Bedding', 'Health & Wellness', 'Accessories'].map(item => (
                <li key={item} className="hover:text-[#bd4e0e] cursor-pointer transition">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#6F4E37] mb-4 text-lg">Price Range</h3>
            <input type="range" className="w-full accent-[#6F4E37]" />
            <div className="flex justify-between text-sm text-slate-500 mt-2">
              <span>$0</span><span>$500</span>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="h-48 bg-[#F5F5DC] rounded-xl mb-4 flex items-center justify-center overflow-hidden relative group">
                <img src={`https://placehold.co/300x300?text=${item.img}`} alt={item.name} className="object-cover h-full w-full opacity-90 group-hover:opacity-100 transition" />
                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md text-[#6F4E37] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <ShoppingCart size={20} />
                </button>
              </div>
              
              <div className="space-y-1">
                <div className="flex text-yellow-400 text-xs">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{item.name}</h3>
                <p className="font-bold text-[#bd4e0e]">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};