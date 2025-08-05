import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("❌ Failed: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error");
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden animate-fade-in pb-24">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" style={{ filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" style={{ filter: 'blur(100px)' }} />

      {/* Hero Header */}
      <div className="w-full text-center py-12 mb-2" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 drop-shadow-lg mb-2 tracking-tight animate-fade-in">Contact Us</h2>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in delay-100">Have questions or ideas? Reach out to us for a personalized car design experience or any queries you may have.</p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 px-2 sm:px-6 md:px-10 animate-fade-in z-10 flex-1 items-center justify-center">
        {/* Contact Info */}
        <div className="space-y-6 self-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-blue-400 border-opacity-30 rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="text-xl font-semibold text-white">Contact Numbers</h4>
                <p className="text-gray-300">9990498585, 8510888585</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h4 className="text-xl font-semibold text-white">Email</h4>
                <p className="text-gray-300">
                  <a href="mailto:dragoncardetailing8585@gmail.com" className="text-blue-300 underline">
                    dragoncardetailing8585@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="text-xl font-semibold text-white">Address</h4>
                <p className="text-gray-300">
                  Rao Hukamchand Chowk Circle-2, Opposite Elan Mall, Sector 81A,<br />
                  Vatika India Next, Gurugram - 122004
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              <div>
                <h4 className="text-xl font-semibold text-white">Services</h4>
                <p className="text-gray-300">
                  PPF, Ceramic Coating, Wraps, Interior Customization, Accessories, Foam Wash
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphism Contact Form */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-blue-400 border-opacity-30 rounded-2xl shadow-2xl p-8 animate-fade-in self-center" data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block text-sm font-medium text-blue-200 mb-1">Your Name</label>
              <span className="absolute left-3 top-9 text-blue-400 text-xl">👤</span>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name" 
                className="w-full px-4 pl-10 py-3 rounded-lg bg-gray-900 bg-opacity-70 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400" 
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-blue-200 mb-1">Your Email</label>
              <span className="absolute left-3 top-9 text-blue-400 text-xl">📧</span>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 pl-10 py-3 rounded-lg bg-gray-900 bg-opacity-70 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-blue-200 mb-1">Your Message</label>
              <span className="absolute left-3 top-9 text-blue-400 text-xl">💬</span>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..." 
                rows={4} 
                className="w-full px-4 pl-10 py-3 rounded-lg bg-gray-900 bg-opacity-70 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 px-6 py-3 rounded-xl text-white font-semibold shadow-xl transition duration-300 tracking-wide mt-2 animate-bounce">
              📤 Send Message
            </button>
            {success && (
              <div className="text-green-400 text-center mt-4 animate-fade-in">
                ✅ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}