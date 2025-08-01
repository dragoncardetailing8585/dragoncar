import React from 'react';
import CarBg from '../assets/car-bg.jpg'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${CarBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-2xl p-8">
        <h1 className="text-5xl font-bold mb-4">Design Your Dream Car</h1>
        <p className="text-xl mb-6">
          Explore a world of customization, creativity, and car aesthetics. Choose your model, color, rims, and more.
        </p>
        <Link to="/booking">
          <button className="bg-[#00d4ff] hover:bg-[#00bfe5] text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:shadow-[0_0_15px_#00d4ff]">
            Book Your Appointment
          </button>
        </Link>
      </div>
    </section>
  );
}
