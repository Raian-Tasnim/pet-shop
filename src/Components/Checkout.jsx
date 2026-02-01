import React, { useState } from 'react';
import { CreditCard, Landmark, Smartphone, CheckCircle, ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout = ({ cartItems, clearCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  
  const [mobileType, setMobileType] = useState(''); 
  
  const [isPaid, setIsPaid] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 120;
  const total = subtotal + shipping;

  const handlePayment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsPaid(true);
      clearCart(); 
    }, 1500);
  };

  if (isPaid) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-bold text-[#6F4E37] mb-2">Payment Successful!</h2>
        <p className="text-slate-500 mb-8 max-w-md">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Link to="/" className="bg-[#6F4E37] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#5a3e2b] transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header */}
      <div className="bg-[#6F4E37] text-white py-8 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link to="/cart" className="hover:bg-white/20 p-2 rounded-full transition">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold">Secure Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: Payment Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#6F4E37] mb-6">Choose Payment Method</h2>
          
          {/* Payment Tabs */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button 
              onClick={() => setPaymentMethod('card')}
              className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition ${paymentMethod === 'card' ? 'border-[#bd4e0e] bg-orange-50 text-[#bd4e0e]' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <CreditCard size={24} />
              <span className="font-bold text-sm">Card</span>
            </button>
            
            <button 
              onClick={() => setPaymentMethod('bank')}
              className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition ${paymentMethod === 'bank' ? 'border-[#bd4e0e] bg-orange-50 text-[#bd4e0e]' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <Landmark size={24} />
              <span className="font-bold text-sm">Bank</span>
            </button>
            
            <button 
              onClick={() => setPaymentMethod('mobile')}
              className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition ${paymentMethod === 'mobile' ? 'border-[#bd4e0e] bg-orange-50 text-[#bd4e0e]' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <Smartphone size={24} />
              <span className="font-bold text-sm">Mobile</span>
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            
            {/* CARD FORM */}
            {paymentMethod === 'card' && (
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Card Number</label>
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Expiry Date</label>
                    <input required type="text" placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">CVC</label>
                    <input required type="text" placeholder="123" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                  </div>
                </div>
                <div className="pt-4">
                   <button type="submit" className="w-full bg-[#6F4E37] text-white py-4 rounded-xl font-bold hover:bg-[#5a3e2b] transition flex justify-center items-center gap-2">
                     <Lock size={18} /> Pay ৳{total.toLocaleString()}
                   </button>
                </div>
              </form>
            )}

            {/* BANK TRANSFER */}
            {paymentMethod === 'bank' && (
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-[#6F4E37] mb-2">Merchant Bank Details</h4>
                  <p className="text-sm text-slate-600">Bank: <span className="font-bold">City Bank</span></p>
                  <p className="text-sm text-slate-600">Account: <span className="font-bold">1234-5678-9012</span></p>
                  <p className="text-xs text-slate-400 mt-2">*Please send money to this account and enter TrxID below.</p>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Transaction ID</label>
                  <input required type="text" placeholder="Enter Transaction ID" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                </div>
                <button type="submit" className="w-full bg-[#6F4E37] text-white py-4 rounded-xl font-bold hover:bg-[#5a3e2b] transition">
                   Confirm Transfer
                </button>
              </form>
            )}

            {/* MOBILE BANKING */}
            {paymentMethod === 'mobile' && (
              <form onSubmit={handlePayment} className="space-y-6">
                
                {/* SELECTION BUTTONS */}
                <div className="flex gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setMobileType('bkash')}
                    className={`flex-1 py-3 rounded-xl font-bold border-2 transition ${
                      mobileType === 'bkash' 
                        ? 'border-pink-500 bg-pink-50 text-pink-600' 
                        : 'border-slate-200 text-slate-400 hover:border-pink-200'
                    }`}
                  >
                    bKash
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileType('nagad')}
                    className={`flex-1 py-3 rounded-xl font-bold border-2 transition ${
                      mobileType === 'nagad' 
                        ? 'border-orange-500 bg-orange-50 text-orange-600' 
                        : 'border-slate-200 text-slate-400 hover:border-orange-200'
                    }`}
                  >
                    Nagad
                  </button>
                </div>

                
                {mobileType ? (
                  <>
                    {/* INSTRUCTIONS */}
                    <div className={`p-4 rounded-xl border ${
                      mobileType === 'bkash' ? 'bg-pink-50 border-pink-200' : 'bg-orange-50 border-orange-200'
                    }`}>
                      <h4 className={`font-bold mb-1 ${
                        mobileType === 'bkash' ? 'text-pink-600' : 'text-orange-600'
                      }`}>
                        {mobileType === 'bkash' ? 'bKash Payment' : 'Nagad Payment'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        Send Money to: <span className="font-bold text-lg">01700-000000</span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Use "Send Money" option from your app.</p>
                    </div>

                    {/* INPUTS */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Mobile Number</label>
                      <input required type="text" placeholder="017..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Transaction ID</label>
                      <input required type="text" placeholder="TrxID..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-[#6F4E37]" />
                    </div>

                    <button 
                      type="submit" 
                      className={`w-full text-white py-4 rounded-xl font-bold transition shadow-lg ${
                        mobileType === 'bkash' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-orange-500 hover:bg-orange-600'
                      }`}
                    >
                      Verify {mobileType === 'bkash' ? 'bKash' : 'Nagad'} Payment
                    </button>
                  </>
                ) : (
                  // 3. EMPTY STATE MESSAGE
                  <div className="text-center py-8 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                    <p>Please select a provider to see payment details.</p>
                  </div>
                )}

              </form>
            )}

          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="lg:w-80 h-fit sticky top-24">
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
             <h3 className="font-bold text-[#6F4E37] mb-4 text-lg">Order Summary</h3>
             <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
               {cartItems.map(item => (
                 <div key={item.id} className="flex justify-between text-sm text-slate-600">
                   <span>{item.quantity}x {item.name}</span>
                   <span className="font-bold">৳{(item.price * item.quantity).toLocaleString()}</span>
                 </div>
               ))}
             </div>
             <div className="border-t border-slate-200 pt-4 mt-4">
               <div className="flex justify-between font-bold text-xl text-[#6F4E37]">
                 <span>Total</span>
                 <span>৳{total.toLocaleString()}</span>
               </div>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
};