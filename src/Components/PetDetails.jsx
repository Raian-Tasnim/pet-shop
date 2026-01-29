import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, CheckCircle, PawPrint, Heart, Info } from 'lucide-react';
import { petsData } from '../Data/petsData';

export const PetDetails = () => {
  const { id } = useParams(); 
  const pet = petsData.find(p => p.id === parseInt(id)); 
  const [submitted, setSubmitted] = useState(false);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
  };

  
  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5DC] text-[#6F4E37]">
        <h2 className="text-3xl font-bold mb-4">Pet Not Found</h2>
        <Link to="/adopt" className="underline font-bold">Go back to Adoption List</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link to="/adopt" className="inline-flex items-center gap-2 text-[#6F4E37] font-bold hover:underline">
          <ArrowLeft size={20} /> Back to Pets
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT: Image Section */}
          <div className="relative h-96 lg:h-auto bg-[#F5F5DC]">
            <img 
              src={pet.image} 
              alt={pet.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#6F4E37] font-bold shadow-sm flex items-center gap-2">
              <PawPrint size={18} /> {pet.tag}
            </div>
          </div>

          {/* RIGHT: Details & Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            
            {/* Pet Info */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-4xl font-extrabold text-[#6F4E37]">{pet.name}</h1>
                <span className="bg-[#bd4e0e] text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                  Available
                </span>
              </div>
              
              <p className="text-xl text-slate-500 font-medium mb-4">{pet.breed} • {pet.age}</p>
              
              <div className="flex items-center gap-2 text-[#6f4a37] mb-6">
                <MapPin size={20} /> 
                <span className="font-semibold">{pet.loc}, Bangladesh</span>
              </div>

              <div className="bg-[#F5F5DC]/50 p-4 rounded-xl border border-[#6F4E37]/10 text-[#6f4a37b8] text-sm leading-relaxed mb-6">
                <div className="flex gap-2 mb-2 font-bold text-[#6F4E37]">
                   <Info size={16} /> About {pet.name}
                </div>
                {pet.name} is a sweet and energetic companion looking for a loving family. 
                Full of personality, loves to play, and ready to be your new best friend. 
                Vaccinated and potty trained.
              </div>
            </div>

            {/* Adoption Form */}
            {submitted ? (
              <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center border-2 border-[#6F4E37] animate-fade-in">
                <div className="w-16 h-16 bg-[#6F4E37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#6F4E37] mb-2">Request Received!</h3>
                <p className="text-[#6f4a37]">We will contact you shortly to schedule a meet-and-greet with {pet.name}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#6F4E37] mb-2">Adopt {pet.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                  <input required type="text" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                </div>
                
                <input required type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                <textarea required rows="3" placeholder="Why do you want to adopt?" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]"></textarea>
                
                <button type="submit" className="w-full bg-[#6F4E37] text-white font-bold py-4 rounded-xl hover:bg-[#5a3e2b] transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Submit Adoption Request
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </main>
  );
};