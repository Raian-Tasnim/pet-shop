import React from 'react';

export const Terms = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-bold text-[#6F4E37] mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using the Happy Tales website and services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">2. Pet Adoption & Sales</h2>
            <p>Happy Tales facilitates the adoption of pets and the sale of pet gear. We prioritize the well-being of all animals. We reserve the right to refuse adoption applications if we believe it is in the best interest of the animal.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">3. User Responsibilities</h2>
            <p>You agree not to use the service for any illegal or unauthorized purpose. You must not transmit any worms or viruses or any code of a destructive nature.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">4. Refunds and Returns</h2>
            <p>For shop items, returns are accepted within 30 days of purchase if the item is unused. Adoption fees are generally non-refundable, as they go towards the care of our animals.</p>
          </section>
        </div>
      </div>
    </main>
  );
};