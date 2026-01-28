import React from 'react';
import { 
  ArrowRight, 
  Heart, 
  ShoppingBag, 
  RefreshCw, 
  PawPrint, 
  Camera, 
  Search, 
  Wallet 
} from 'lucide-react';

export const Home = () => {
  return (
    <main className="w-full bg-slate-50 min-h-[calc(100vh-80px)]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#F5F5DC] text-[#6F4E37] rounded-b-[3rem] overflow-hidden shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Shop, Adopt, & <br/>
              <span className="text-[#bd4e0e]">Give Back Love</span>
            </h1>
            <p className="text-lg text-[#6f4a37]/90 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              The ultimate community for pet lovers. Buy premium goods, find a new family member, or give your old gear a second life.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start pt-6">
              <a href="/adopt" className="bg-[#6F4E37] text-[#F5F5DC] px-8 py-3 rounded-xl font-bold hover:bg-[#5a3e2b] hover:scale-105 transition shadow-lg flex items-center gap-2">
                Adopt a Pet <PawPrint size={20} />
              </a>
              <a href="/sell" className="border-2 border-[#6F4E37]/20 text-[#6F4E37] px-8 py-3 rounded-xl font-bold hover:bg-[#6F4E37]/10 transition">
                Sell Gear
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md md:max-w-full relative">
            <div className="absolute inset-0 bg-[#6F4E37] rounded-full filter blur-3xl opacity-10 transform scale-90"></div>
            <img 
              src="https://placehold.co/600x500/6F4E37/F5F5DC?text=Pets+Community" 
              alt="Happy Pets" 
              className="relative z-10 w-full h-auto object-cover rounded-3xl transform -rotate-2 hover:rotate-0 transition duration-500 shadow-xl border-4 border-white" 
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES TRIO --- */}
      <section className="w-full bg-[#6F4E37] py-24 -mt-10 pt-32 pb-32 relative z-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#F5F5DC]">Everything Your Pet Needs</h2>
            <p className="text-slate-300 mt-2">More than just a store, we are a family.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Cards ... (kept same as previous version) */}
            <div className="bg-[#F5F5DC] p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300 border border-slate-100 text-center group flex flex-col items-center">
              <div className="w-16 h-16 bg-[#6F4E37] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#bd4e0e] transition duration-300">
                <Heart className="text-[#F5F5DC]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">Adopt & Rehome</h3>
              <p className="text-[#6f4a37b8] leading-relaxed mb-6 grow">
                Looking for a new friend? We connect loving hearts together.
              </p>
              <a href="/adopt" className="text-[#bd4e0e] font-bold hover:underline flex items-center gap-1">Find a Friend <ArrowRight size={16}/></a>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300 border border-slate-100 text-center group flex flex-col items-center">
              <div className="w-16 h-16 bg-[#6F4E37] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#bd4e0e] transition duration-300">
                <ShoppingBag className="text-[#F5F5DC]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">Premium Shop</h3>
              <p className="text-[#6f4a37b8] leading-relaxed mb-6 grow">
                Buy brand new, high-quality food, toys, and essentials.
              </p>
              <a href="/shop" className="text-[#bd4e0e] font-bold hover:underline flex items-center gap-1">Shop New <ArrowRight size={16}/></a>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300 border border-slate-100 text-center group flex flex-col items-center">
              <div className="w-16 h-16 bg-[#6F4E37] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#bd4e0e] transition duration-300">
                <RefreshCw className="text-[#F5F5DC]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-3">Resell & Thrift</h3>
              <p className="text-[#6f4a37b8] leading-relaxed mb-6 grow">
                Sell used toys or buy pre-loved gear at a discount.
              </p>
              <a href="/sell" className="text-[#bd4e0e] font-bold hover:underline flex items-center gap-1">Start Selling <ArrowRight size={16}/></a>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Redesigned Fancier Look) --- */}
      <section className="bg-[#F5F5DC] py-24 relative z-10 rounded-t-[3rem] -mt-10 overflow-hidden">
        
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6F4E37] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bd4e0e] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#bd4e0e] font-extrabold tracking-widest uppercase text-sm">Sustainable & Kind</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#6F4E37] mt-3">
              Give Your Gear <span className="italic text-[#bd4e0e]">A Second Life</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Timeline Steps */}
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-[#6F4E37]/10 rounded-full hidden md:block"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-[#6F4E37]/10 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 group-hover:bg-[#6F4E37] group-hover:text-[#F5F5DC] transition duration-300 cursor-default">
                   <Camera size={28} className="text-[#6F4E37] group-hover:text-[#F5F5DC] transition" />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#6F4E37]/5 flex-1 group-hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-[#6F4E37] mb-2">1. Snap & Upload</h4>
                  <p className="text-[#6f4a37b8]">Take clear photos of your used accessories or toys and upload them to our marketplace.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-[#6F4E37]/10 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 group-hover:bg-[#6F4E37] group-hover:text-[#F5F5DC] transition duration-300 cursor-default">
                   <Search size={28} className="text-[#6F4E37] group-hover:text-[#F5F5DC] transition" />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#6F4E37]/5 flex-1 group-hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-[#6F4E37] mb-2">2. We Verify Quality</h4>
                  <p className="text-[#6f4a37b8]">Our team reviews every listing to ensure hygiene and safety standards are met.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-[#6F4E37]/10 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 group-hover:bg-[#6F4E37] group-hover:text-[#F5F5DC] transition duration-300 cursor-default">
                   <Wallet size={28} className="text-[#6F4E37] group-hover:text-[#F5F5DC] transition" />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#6F4E37]/5 flex-1 group-hover:shadow-md transition">
                  <h4 className="text-xl font-bold text-[#6F4E37] mb-2">3. Get Paid Instantly</h4>
                  <p className="text-[#6f4a37b8]">Once approved, you receive cash or store credit to buy something new!</p>
                </div>
              </div>

            </div>

            {/* Right: Fancy Image Composition */}
            <div className="relative flex flex-col items-center md:items-start">
               {/* Abstract Background Layers */}
               <div className="absolute inset-0 bg-[#bd4e0e] rounded-[2.5rem] rotate-6 opacity-10 scale-95 z-0"></div>
               <div className="absolute inset-0 bg-[#6F4E37] rounded-[2.5rem] -rotate-3 opacity-10 scale-95 z-0"></div>
               
               {/* Main Image */}
               <div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl transform transition hover:scale-[1.01] w-full">
                  <img 
                    src="https://placehold.co/600x600/6F4E37/F5F5DC?text=Happy+Seller" 
                    alt="Reselling is easy" 
                    className="rounded-4xl w-full h-auto object-cover"
                  />
                  
                  {/* Floating Testimonial Badge */}
                  <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[#6F4E37] text-[#F5F5DC] p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                    <p className="font-bold text-lg italic">"I sold my puppy's old crate in 2 days!"</p>
                    <div className="flex items-center gap-2 mt-2 opacity-80">
                      <div className="w-6 h-6 bg-[#F5F5DC] rounded-full"></div>
                      <span className="text-sm font-medium">- Sarah J.</span>
                    </div>
                  </div>
               </div>
               
               <div className="mt-12 w-full md:w-auto z-20">
                  <button className="w-full bg-[#bd4e0e] text-white px-10 py-4 rounded-full font-bold hover:bg-[#a0410b] transition shadow-lg hover:shadow-orange-900/20 flex items-center justify-center gap-2">
                    Start Selling Today <ArrowRight size={20} />
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}