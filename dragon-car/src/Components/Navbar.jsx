import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // 👈 for smooth scrolling
import logo from "../assets/logos.png"; // adjust path

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div
          className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 ${
            navOpen ? "flex" : "hidden"
          } md:block`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-64} // adjust if navbar overlaps
              className="text-white hover:text-cyan-400 cursor-pointer"
              activeClass="font-bold underline text-cyan-400"
              onClick={() => setNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Special Booking Button */}
          <Link
            to="booking"
            smooth={true}
            duration={500}
            spy={true}
            offset={-64}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black px-4 py-2 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            onClick={() => setNavOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
