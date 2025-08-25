import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden animate-fade-in pb-24">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" style={{ filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" style={{ filter: 'blur(100px)' }} />

      {/* Hero Header */}
      <div className="w-full text-center py-12 mb-2" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-400 drop-shadow-lg mb-2 tracking-tight animate-fade-in">Contact Us</h2>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in delay-100">
          Have questions or ideas? Reach out to us for a personalized car design experience or any queries you may have.
        </p>
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

        {/* Google Map instead of form */}
        <div
          className="bg-white bg-opacity-10 backdrop-blur-lg border border-blue-400 border-opacity-30 rounded-2xl shadow-2xl p-2 animate-fade-in self-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <iframe
            title="Dragon Car Detailing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.0876013508905!2d76.95334127527954!3d28.386421975800065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d443693712d%3A0x8064f2cf5704b9df!2sDragon%20Car%20Detailing!5e0!3m2!1sen!2sin!4v1756088834152!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
