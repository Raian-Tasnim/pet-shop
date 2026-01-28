import React from 'react';
import { Camera, CheckCircle, DollarSign, UploadCloud } from 'lucide-react';

export const Sell = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Intro Hero */}
      <div className="bg-[#F5F5DC] py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-[#6F4E37] mb-4">Turn Clutter into Cash</h1>
        <p className="text-[#6f4a37b8] max-w-xl mx-auto text-lg">
          Got unused toys, crates, or accessories? List them on our marketplace and help another pet parent save money.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Left: Instructions (Light) */}
          <div className="bg-white p-10 flex flex-col justify-center space-y-8">
            <h2 className="text-2xl font-bold text-[#6F4E37]">How to Sell</h2>
            
            {[ 
              { icon: <Camera />, title: "Take Photos", text: "Snap clear pictures of your item from multiple angles." },
              { icon: <UploadCloud />, title: "Add Details", text: "Describe the condition honestly (New, Like New, Used)." },
              { icon: <CheckCircle />, title: "We Verify", text: "Our team approves listing within 24 hours." },
              { icon: <DollarSign />, title: "Get Paid", text: "Receive payment directly to your wallet once sold." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="bg-[#F5F5DC] text-[#6F4E37] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{step.title}</h4>
                  <p className="text-slate-500 text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Submission Form (Dark Theme) */}
          <div className="bg-[#6F4E37] p-10 text-white">
            <h2 className="text-2xl font-bold mb-6">List Your Item</h2>
            <form className="space-y-5">
              
              <div>
                <label className="block text-sm font-medium mb-1 opacity-90">Item Name</label>
                <input type="text" placeholder="e.g. Large Dog Crate" className="w-full bg-[#5a3e2b] border border-[#8B6E57] rounded-lg p-3 text-white focus:outline-none focus:border-[#F5F5DC]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 opacity-90">Category</label>
                  <select className="w-full bg-[#5a3e2b] border border-[#8B6E57] rounded-lg p-3 text-white focus:outline-none focus:border-[#F5F5DC]">
                    <option>Toys</option>
                    <option>Bedding</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 opacity-90">Price ($)</label>
                  <input type="number" placeholder="0.00" className="w-full bg-[#5a3e2b] border border-[#8B6E57] rounded-lg p-3 text-white focus:outline-none focus:border-[#F5F5DC]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 opacity-90">Description</label>
                <textarea rows="3" placeholder="Tell us about the condition..." className="w-full bg-[#5a3e2b] border border-[#8B6E57] rounded-lg p-3 text-white focus:outline-none focus:border-[#F5F5DC]"></textarea>
              </div>

              <div className="border-2 border-dashed border-[#8B6E57] rounded-lg p-6 text-center cursor-pointer hover:bg-[#5a3e2b] transition">
                <UploadCloud className="mx-auto mb-2 opacity-70" />
                <span className="text-sm opacity-80">Click to upload photos</span>
              </div>

              <button className="w-full bg-[#bd4e0e] hover:bg-[#a0410b] text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1">
                Submit Listing
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
};