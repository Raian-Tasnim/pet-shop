import React, { useState, useRef } from 'react';
import { Camera, CheckCircle, DollarSign, UploadCloud, X, Image as ImageIcon } from 'lucide-react';

export const Sell = () => {
  // 1. State for managing the uploaded image and drag status
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // 2. Handle File Selection (Click)
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // 3. Handle Drag Over (Visual Cue)
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // 4. Handle Drag Leave (Reset Visual Cue)
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // 5. Handle Drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // 6. Remove Image
  const removeImage = (e) => {
    e.stopPropagation(); // Prevent triggering file select again
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input value
    }
  };

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
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
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

              {/* --- UPDATED UPLOAD SECTION --- */}
              <div>
                <label className="block text-sm font-medium mb-1 opacity-90">Product Image</label>
                
                {/* Hidden Input */}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="hidden" 
                  accept="image/*"
                />

                <div 
                  onClick={() => fileInputRef.current.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg h-48 flex flex-col items-center justify-center cursor-pointer transition relative overflow-hidden
                    ${isDragging 
                      ? 'border-[#F5F5DC] bg-[#5a3e2b] scale-[1.02]' 
                      : 'border-[#8B6E57] hover:bg-[#5a3e2b]'}`
                  }
                >
                  {preview ? (
                    // Preview State
                    <div className="w-full h-full relative group">
                      <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                      {/* Remove Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                         <button 
                           onClick={removeImage}
                           className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition transform hover:scale-110"
                         >
                           <X size={20} />
                         </button>
                      </div>
                    </div>
                  ) : (
                    // Default State
                    <>
                      <UploadCloud 
                        className={`mx-auto mb-2 transition duration-300 ${isDragging ? 'scale-110 text-[#F5F5DC]' : 'opacity-70'}`} 
                        size={32} 
                      />
                      <span className="font-bold text-sm">
                        {isDragging ? "Drop image here" : "Click to upload photos"}
                      </span>
                      <span className="text-xs opacity-60 mt-1">or drag and drop</span>
                    </>
                  )}
                </div>
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