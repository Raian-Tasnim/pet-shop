import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-[#6F4E37] text-[#F5F5DC] py-16 px-6 text-center rounded-b-[3rem]">
        <h1 className="text-4xl font-bold mb-4">We're Here to Help</h1>
        <p className="text-lg text-slate-300 max-w-xl mx-auto">
          Have questions about shipping, returns, or just want to say hi? 
          Reach out to our team.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#6F4E37]">Get in Touch</h2>
            <p className="text-slate-600">
              We typically respond within 24 hours. Check our FAQ section for quick answers.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-[#F5F5DC] p-3 rounded-full text-[#6F4E37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone</h4>
                  <p className="text-slate-500">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-[#F5F5DC] p-3 rounded-full text-[#6F4E37]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-slate-500">support@happytales.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-[#F5F5DC] p-3 rounded-full text-[#6F4E37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Office</h4>
                  <p className="text-slate-500">123 Pet Street, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-[#6F4E37] mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#6F4E37]" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#6F4E37]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#6F4E37]" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-[#6F4E37] text-white font-bold py-3 rounded-xl hover:bg-[#5a3e2b] transition flex justify-center items-center gap-2">
                Send Message <MessageSquare size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};