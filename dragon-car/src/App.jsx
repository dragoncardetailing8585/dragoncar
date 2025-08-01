import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; // ✅ Make sure this file exists

import Home from "./Components/Homepage";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Booking from "./Components/Booking";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
