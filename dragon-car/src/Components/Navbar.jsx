import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logos.png"; // Adjust path if different

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          {/* <span className="text-white text-2xl font-bold hidden sm:inline">Dragon Car Detailing</span> */}
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden text-white text-2xl" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 ${navOpen ? 'flex' : 'hidden'} md:block`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-white hover:text-cyan-400 ${
                  isActive ? 'font-bold underline' : ''
                }`
              }
              onClick={() => setNavOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/booking"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black px-4 py-2 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
            onClick={() => setNavOpen(false)}
          >
            Book Appointment
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
