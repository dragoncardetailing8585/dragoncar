import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-1">Dragon Car Detailing</h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Premium car detailing services that make your vehicle look brand new.
            Quality. Passion. Perfection.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 text-4xl">
          <a href="#" className="hover:text-cyan-400" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/dragoncardetailing/" className="hover:text-cyan-400" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-cyan-400" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Dragon Car Detailing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
