import React from 'react';

export const Privacy = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-bold text-[#6F4E37] mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">1. Information We Collect</h2>
            <p>At Happy Tales, we collect information you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter. This includes your name, email address, shipping address, and payment information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Process your transactions and manage your orders.</li>
              <li>Communicate with you about products, services, and promotions.</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">3. Sharing of Information</h2>
            <p>We do not share your personal information with third parties, except as necessary to provide our services (e.g., shipping providers, payment processors) or as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">4. Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
          </section>
        </div>
      </div>
    </main>
  );
};