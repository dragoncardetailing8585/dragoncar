import React from "react";
import { motion } from "framer-motion";

import ppfImage from "../assets/pfp.jpg";
import ceramic from "../assets/ceramic.jpg";
import wrap from "../assets/wrap.jpg";
import interior from "../assets/interior.jpg";
import access from "../assets/access.png";
import foam from "../assets/foam.png";

const servicesData = [
  {
    title: "PPF - Paint Protection Film",
    description:
      "Protect your vehicle's paint from scratches, chips, and sun damage with our premium PPF.",
    media: ppfImage,
  },
  {
    title: "Ceramic Coating",
    description:
      "Get a glossy, water-repellent finish that makes your car easier to clean and more resilient.",
    media: ceramic,
  },
  {
    title: "Wrap",
    description:
      "Customize your car's look with a wide variety of vinyl wraps and finishes.",
    media: wrap,
  },
  {
    title: "Interior Customization",
    description:
      "Upgrade your car’s interior with leather stitching, ambient lighting, and more.",
    media: interior,
  },
  {
    title: "Accessories",
    description:
      "Explore a wide range of premium car accessories to boost both performance and style.",
    media: access,
  },
  {
    title: "Foam Wash",
    description:
      "Enjoy a high-pressure foam wash that ensures every inch of your car is spotless and shiny.",
    media: foam,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10 px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      <div className="space-y-14 max-w-5xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400 transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {service.media.endsWith(".mp4") ? (
                <video
                  src={service.media}
                  autoPlay
                  loop
                  muted
                  className="w-full h-64 object-cover"
                />
              ) : (
                <img
                  src={service.media}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              )}
            </motion.div>

            <div className="w-full md:w-1/2 text-center md:text-left px-2">
              <motion.h3
                className="text-2xl md:text-3xl font-semibold mb-3 text-cyan-100"
                whileHover={{ scale: 1.05, color: "#22d3ee" }} // Tailwind's cyan-400
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
