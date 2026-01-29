import React, { useEffect } from 'react';
import { PawPrint, X, Info } from 'lucide-react'; // Added Info icon

export const Toast = ({ message, isVisible, onClose, type = 'success' }) => {
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  // Dynamic Styles based on type
  const isSuccess = type === 'success';

  return (
    <div className="fixed top-24 right-6 z-50 animate-fade-in-down">
      <div className={`bg-white border-l-4 ${isSuccess ? 'border-[#bd4e0e]' : 'border-blue-500'} shadow-2xl rounded-lg p-4 flex items-center gap-4 min-w-[320px]`}>
        
        {/* Dynamic Icon Circle */}
        <div className={`p-2 rounded-full ${isSuccess ? 'bg-[#F5F5DC] text-[#bd4e0e]' : 'bg-blue-50 text-blue-500'}`}>
          {isSuccess ? <PawPrint size={20} className="fill-current" /> : <Info size={20} />}
        </div>

        {/* Dynamic Text */}
        <div className="flex-1">
          <h4 className={`font-bold text-sm ${isSuccess ? 'text-[#6F4E37]' : 'text-slate-700'}`}>
            {isSuccess ? 'Success!' : 'Just letting you know'}
          </h4>
          <p className="text-slate-500 text-sm">{message}</p>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};