import React from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { MapPin, ArrowLeft, CheckCircle, PawPrint, Info } from 'lucide-react';
import { petsData } from '../Data/petsData';
import { useAuth } from '../Context/AuthContext'; // 1. Import Auth

export const PetDetails = () => {
  const { id } = useParams();
  const { user } = useAuth(); // 2. Get User
  const navigate = useNavigate();
  const location = useLocation();

  const pet = petsData.find(p => p.id === parseInt(id));

  // --- SECURE ADOPT ACTION ---
  const handleAdoptClick = () => {
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/login', { state: { from: location } });
    } else {
      // If logged in, proceed (For now, show an alert or navigate to an application form)
      alert(`Application started for ${pet.name}! Our team will contact you shortly.`);
    }
  };

  if (!pet) {
    return <div className="text-center py-20 text-2xl text-slate-500">Pet not found! 🐶</div>;
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* Image Header */}
      <div className="relative h-[50vh] bg-slate-200">
        <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
        <Link to="/adopt" className="absolute top-6 left-6 bg-white/90 p-3 rounded-full hover:bg-white transition shadow-lg text-slate-700">
          <ArrowLeft size={24} />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-2">{pet.name}</h1>
            <p className="text-xl opacity-90 flex items-center gap-2">
              <MapPin size={20} /> {pet.loc} &bull; {pet.breed}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-[#F5F5DC] p-4 rounded-2xl text-center">
              <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">Age</span>
              <span className="text-xl font-bold text-[#6F4E37]">{pet.age}</span>
            </div>
            <div className="bg-[#F5F5DC] p-4 rounded-2xl text-center">
              <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">Gender</span>
              <span className="text-xl font-bold text-[#6F4E37]">Male</span> 
            </div>
            <div className="bg-[#F5F5DC] p-4 rounded-2xl text-center">
              <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider">Weight</span>
              <span className="text-xl font-bold text-[#6F4E37]">12 kg</span> 
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#6F4E37] mb-4 flex items-center gap-2">
            <Info size={24} /> About {pet.name}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            {pet.name} is a wonderful {pet.breed} looking for a forever home. They are energetic, friendly, and love to play. 
            All our pets are vaccinated, microchipped, and health-checked before adoption.
          </p>

          <h3 className="text-lg font-bold text-[#6F4E37] mb-3">Health & Care</h3>
          <ul className="space-y-2 mb-8 text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Vaccinated</li>
            <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Microchipped</li>
            <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Dewormed</li>
          </ul>

          {/* ACTION BUTTON WITH AUTH CHECK */}
          <button 
            onClick={handleAdoptClick}
            className="w-full bg-[#bd4e0e] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#a0410b] transition shadow-lg flex items-center justify-center gap-2"
          >
            <PawPrint size={24} /> Adopt {pet.name}
          </button>

        </div>
      </div>
    </main>
  );
};