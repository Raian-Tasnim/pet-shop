import React from 'react';
import { Heart, MapPin, PawPrint, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // 1. Import Router hooks
import { petsData } from '../Data/petsData';
import { useAuth } from '../Context/AuthContext'; // 2. Import Auth

export const Favorites = ({ favorites, toggleFavorite }) => {
  const { user } = useAuth(); // 3. Get User state
  const navigate = useNavigate();
  const location = useLocation();
  
  // Filter the data to find only the pets whose ID is in the favorites array
  const favoritePets = petsData.filter(pet => favorites.includes(pet.id));

  // 4. Secure Adopt Handler
  const handleAdoptClick = (pet) => {
    if (!user) {
      // If not logged in, redirect to login page (and remember to come back here)
      navigate('/login', { state: { from: location } });
    } else {
      // If logged in, show success message
      alert(`Application started for ${pet.name}! Our team will contact you shortly.`);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      
      {/* Header */}
      <div className="bg-[#bd4e0e] text-white py-12 px-6 rounded-b-[3rem] shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-2">My Loved Ones</h1>
        <p className="text-white/90">Pets you have saved to visit later.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {favoritePets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favoritePets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition duration-300 relative group">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img 
                    src={pet.image} 
                    alt={pet.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {/* Remove from favorites button */}
                  <button 
                    onClick={() => toggleFavorite(pet.id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition"
                  >
                    <Heart size={20} className="fill-red-500 text-red-500" />
                  </button>
                </div>
                
                {/* Content */}
                <div className="pt-6 px-2 pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-[#6F4E37]">{pet.name}</h3>
                    <span className="bg-[#F5F5DC] text-[#6F4E37] px-3 py-1 rounded-lg text-xs font-bold uppercase">{pet.age}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
                    <MapPin size={16} /> {pet.loc}
                  </div>
                  
                  {/* 5. Updated Button with onClick Handler */}
                  <button 
                    onClick={() => handleAdoptClick(pet)}
                    className="w-full mt-6 bg-[#6F4E37] text-white py-3 rounded-xl font-bold hover:bg-[#bd4e0e] transition flex justify-center items-center gap-2"
                  >
                    Adopt Me <PawPrint size={18} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Heart size={40} className="text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-[#6F4E37]">No Favorites Yet</h2>
            <p className="text-slate-500 mt-2 mb-8">Go explore and find a friend to love!</p>
            <Link to="/adopt" className="bg-[#6F4E37] text-white px-8 py-3 rounded-full font-bold hover:bg-[#bd4e0e] transition inline-flex items-center gap-2">
              Browse Pets <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};