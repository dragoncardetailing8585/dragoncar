import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Homepage";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Booking from "./Components/Booking";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex-grow pt-16 scroll-smooth">
        {/* Sections with IDs for scroll navigation */}
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="booking">
          <Booking />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
