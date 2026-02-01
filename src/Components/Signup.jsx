import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Lock, Mail, User } from 'lucide-react';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold text-[#6F4E37] mb-2 text-center">Create Account</h2>
        <p className="text-slate-400 text-center mb-8">Join the Happy Tales family</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#6F4E37]"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#6F4E37]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#6F4E37]"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#bd4e0e] text-white py-4 rounded-xl font-bold hover:bg-[#a0410b] transition shadow-lg mt-4">
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-slate-500 text-sm">
          Already have an account? <Link to="/login" className="text-[#6F4E37] font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};