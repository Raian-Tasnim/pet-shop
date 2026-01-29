import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  
  // Calculate Total Price
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 120; // Fixed shipping cost in BDT
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header */}
      <div className="bg-[#6F4E37] text-white py-12 px-6 rounded-b-[3rem] shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-2">Your Shopping Cart</h1>
        <p className="text-white/90">Review your items before checkout.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Cart Items List */}
            <div className="flex-1 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-6 items-center">
                  
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-[#F5F5DC] rounded-xl overflow-hidden shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-[#6F4E37] text-lg">{item.name}</h3>
                    <p className="text-slate-500 text-sm mb-2">{item.category}</p>
                    <p className="font-bold text-[#bd4e0e]">৳{item.price.toLocaleString()}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      className="p-1 hover:bg-white rounded-md transition disabled:opacity-30"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-white rounded-md transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Right: Order Summary */}
            <div className="lg:w-96">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                <h3 className="text-2xl font-bold text-[#6F4E37] mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold">৳{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>৳{shipping}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-4 flex justify-between text-lg font-bold text-[#6F4E37]">
                    <span>Total</span>
                    <span>৳{total.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-[#bd4e0e] text-white py-4 rounded-xl font-bold hover:bg-[#a0410b] transition shadow-lg flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight size={20} />
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-600 mb-2">Your cart is empty</h2>
            <p className="text-slate-400 mb-8">Looks like you haven't added anything yet.</p>
            <Link to="/shop" className="bg-[#6F4E37] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5a3e2b] transition">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};