const backgroundImage = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d";

export default function AboutUs() {
  return (
    <div className="pt-10 pb-10 px-2 sm:px-6 md:px-10 space-y-10 max-w-5xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6 text-center drop-shadow-lg animate-fade-in" data-aos="fade-up">About Us</h2>

      {[{
        title: 'Our Story',
        text: 'Dragon Car Detailing began with a passion for transforming ordinary cars into extraordinary ones. From humble beginnings to industry excellence, our journey has always been about pushing design boundaries.'
      }, {
        title: 'Our Mission',
        text: 'To provide unmatched automotive styling and protection services, using cutting-edge technology and premium materials to elevate the appearance and longevity of every vehicle we touch.'
      }, {
        title: 'Why Choose Us',
        text: 'Our expert team, attention to detail, and love for automobiles make us the trusted name for car enthusiasts. We don\'t just work on cars—we create experiences.'
      }].map((section, idx) => (
        <section
          key={section.title}
          className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-cover bg-center rounded-3xl mx-2 sm:mx-6 md:mx-10 flex items-center animate-fade-in"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
          data-aos-delay={idx * 200}
        >
          <div className="bg-black bg-opacity-70 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-10 py-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-lg">{section.title}</h3>
            <p className="text-gray-200 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in delay-100">{section.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
