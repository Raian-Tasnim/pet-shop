import React, { useState } from 'react';
import { Filter, Heart, MapPin, PawPrint } from 'lucide-react';

export const Adopt = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const pets = [
    { id: 1, name: 'Bella', breed: 'Golden Retriever', age: '2 Yrs', loc: 'Dhaka', tag: 'Dog' },
    { id: 2, name: 'Luna', breed: 'Siamese', age: '1 Yr', loc: 'Sylhet', tag: 'Cat' },
    { id: 3, name: 'Charlie', breed: 'Beagle', age: '3 Mos', loc: 'Chittagong', tag: 'Dog' },
    { id: 4, name: 'Max', breed: 'Parrot', age: '2 Yrs', loc: 'Dhaka', tag: 'Bird' },
    { id: 5, name: 'Rocky', breed: 'German Shepherd', age: '4 Yrs', loc: 'Rajshahi', tag: 'Dog' },
    { id: 6, name: 'Milo', breed: 'Tabby', age: '2 Mos', loc: 'Dhaka', tag: 'Cat' },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      
      {/* Page Header */}
      <div className="bg-[#6F4E37] text-[#F5F5DC] py-12 px-6 rounded-b-[3rem] shadow-lg">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Find Your Soulmate</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            These furry friends are looking for a forever home. 
            Open your heart and change a life today.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {['All', 'Dog', 'Cat', 'Bird', 'Rabbit'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-2 rounded-full font-bold transition duration-300 flex items-center gap-2 
                ${activeFilter === type 
                  ? 'bg-[#6F4E37] text-[#F5F5DC] shadow-md scale-105' 
                  : 'bg-white text-[#6F4E37] hover:bg-[#bd4e0e] hover:text-white'}`}
            >
              {type === 'All' ? <Filter size={16} /> : <PawPrint size={16} />}
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Pet Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition duration-300 group">
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <img 
                  src={`https://placehold.co/400x400?text=${pet.name}`} 
                  alt={pet.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-[#bd4e0e] hover:bg-[#bd4e0e] hover:text-white transition">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="pt-6 px-2 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#6F4E37]">{pet.name}</h3>
                    <p className="text-slate-500 text-sm font-medium">{pet.breed}</p>
                  </div>
                  <span className="bg-[#F5F5DC] text-[#6F4E37] px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    {pet.age}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                  <MapPin size={16} /> {pet.loc}
                </div>

                <button className="w-full mt-6 bg-[#6F4E37] text-white py-3 rounded-xl font-bold hover:bg-[#bd4e0e] transition flex justify-center items-center gap-2">
                  Adopt Me <PawPrint size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};