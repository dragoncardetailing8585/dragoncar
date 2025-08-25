import React from 'react';
import CarBg from '../assets/car-bg.jpg';
import LocationImg from '../assets/location.jpg';
import { Link } from "react-scroll";

export default function Home() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${CarBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-6 md:px-12 text-center text-white gap-6">
        
        {/* Hero Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Design Your Dream Car
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Explore a world of customization, creativity, and car aesthetics. 
            Choose your model, color, rims, and more.
          </p>
        </div>

        {/* Location Image */}
        <div className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl">
          <img
            src={LocationImg}
            alt="Our Location"
            className="rounded-2xl shadow-lg border-4 border-white w-full h-auto object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
