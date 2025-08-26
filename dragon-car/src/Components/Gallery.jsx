import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Car from '../assets/car.jpeg';
import CarBack from '../assets/carback.jpeg';
import Car3 from '../assets/car3.jpeg';
import Car2 from '../assets/car2.jpeg';
import Car4 from '../assets/car4.jpeg';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="p-4 sm:p-8 md:p-12 space-y-12 max-w-6xl mx-auto">
      <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in" data-aos="zoom-in">
        <Slider {...settings}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[250px] sm:h-[350px] object-cover rounded-xl"
            />
          ))}
        </Slider>
      </div>

      <div className="text-center animate-fade-in" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-2 text-blue-400 drop-shadow-lg">Where Performance Meets Personality</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore a selection of our beautifully detailed cars showcasing our craftsmanship.
        </p>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
  {[Car, Car2, Car4].map((src, index) => (
    <div
      key={index}
      className="aspect-[9/14] rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-200"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <img
        src={src}
        alt={`Gallery car ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

    </div>
  );
}