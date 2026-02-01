import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Filter, Ban } from 'lucide-react';
import { productData } from '../Data/productData';
import { useAuth } from '../Context/AuthContext'; // 1. Import Auth
import { useNavigate, useLocation } from 'react-router-dom'; // 2. Import Router hooks

export const Shop = ({ addToCart }) => {
  const { user } = useAuth(); // 3. Get User
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [sortBy, setSortBy] = useState('default');

  const categories = ['All', 'Food & Treats', 'Toys', 'Bedding', 'Health & Wellness', 'Accessories'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory, sortBy]);

  // --- SECURE ADD TO CART ---
  const handleAddToCart = (product) => {
    if (!user) {
      // If not logged in, redirect to login page
      // state={{ from: location }} allows us to redirect back here after login
      navigate('/login', { state: { from: location } });
      return;
    }
    addToCart(product);
  };

  // Filter & Sort Logic
  const filteredProducts = productData.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'latest') return b.id - a.id;
    if (sortBy === 'popular') return b.sales - a.sales;
    return 0;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-[#6F4E37] text-white py-8 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">Shop Essentials</h1>
          <div className="flex gap-3">
             <button onClick={() => setSortBy('latest')} className={`px-4 py-2 rounded-lg text-sm transition font-medium ${sortBy === 'latest' ? 'bg-[#bd4e0e] text-white' : 'bg-[#5a3e2b] hover:bg-[#bd4e0e]'}`}>Latest</button>
             <button onClick={() => setSortBy('popular')} className={`px-4 py-2 rounded-lg text-sm transition font-medium ${sortBy === 'popular' ? 'bg-[#bd4e0e] text-white' : 'bg-[#5a3e2b] hover:bg-[#bd4e0e]'}`}>Popular</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-8 h-fit lg:sticky lg:top-24 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div>
            <h3 className="font-bold text-[#6F4E37] mb-4 text-lg flex items-center gap-2"><Filter size={18} /> Categories</h3>
            <ul className="space-y-2 text-slate-600">
              {categories.map(item => (
                <li key={item} onClick={() => setSelectedCategory(item)} className={`cursor-pointer transition px-3 py-2 rounded-lg ${selectedCategory === item ? 'bg-[#6F4E37] text-white font-bold' : 'hover:bg-[#F5F5DC] hover:text-[#6F4E37]'}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#6F4E37] mb-4 text-lg">Max Price: ৳{maxPrice.toLocaleString()}</h3>
            <input type="range" min="0" max="20000" step="500" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#6F4E37] cursor-pointer" />
            <div className="flex justify-between text-sm text-slate-500 mt-2"><span>৳0</span><span>৳20,000</span></div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group relative">
                  <div className="h-48 bg-[#F5F5DC] rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-white/30 z-10 flex items-center justify-center backdrop-blur-[0.5px]">
                        <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md"><Ban size={12} /> Out of Stock</span>
                      </div>
                    )}
                    <img src={item.img} alt={item.name} className={`object-cover h-full w-full transition duration-500 ${item.inStock ? 'opacity-90 group-hover:opacity-100 group-hover:scale-105' : 'grayscale opacity-50'}`} />
                    
                    {/* BUTTON WITH AUTH CHECK */}
                    {item.inStock && (
                      <button 
                        onClick={() => handleAddToCart(item)} 
                        className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md text-[#6F4E37] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300 hover:bg-[#6F4E37] hover:text-white cursor-pointer"
                      >
                        <ShoppingCart size={20} />
                      </button>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{item.category}</span>
                      <div className="flex text-yellow-400 text-xs gap-0.5">
                        {[...Array(5)].map((_, i) => (<Star key={i} size={12} fill={i < item.rating ? "currentColor" : "none"} className={i < item.rating ? "text-yellow-400" : "text-slate-300"}/>))}
                      </div>
                    </div>
                    <h3 className={`font-bold text-lg leading-tight ${item.inStock ? 'text-slate-800' : 'text-slate-400'}`}>{item.name}</h3>
                    <p className={`font-bold text-xl ${item.inStock ? 'text-[#bd4e0e]' : 'text-slate-400'}`}>৳{item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4"><ShoppingCart size={32} /></div>
               <h3 className="text-xl font-bold text-slate-600">No products found</h3>
               <button onClick={() => {setSelectedCategory('All'); setMaxPrice(20000); setSortBy('default');}} className="mt-4 text-[#bd4e0e] font-bold hover:underline">Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};