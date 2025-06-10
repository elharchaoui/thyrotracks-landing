'use client'; // This is a client component

const Hero = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile browsers
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to darken the video for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center p-4">
        <div className="w-80 h-80 md:w-[450px] md:h-[450px] border-2 border-gray-500 rounded-full flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Microbiology, reinvented.
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300">
            The new AI-based instant microbiology technology
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleScroll}
            className="px-8 py-3 border border-gray-400 rounded-sm hover:bg-brand-green hover:border-brand-green transition-colors duration-300"
          >
            GET NOTIFIED
          </button>
          <button
            onClick={handleScroll} // Can point to a different page like /careers
            className="px-8 py-3 border border-gray-400 rounded-sm hover:bg-gray-700 hover:border-gray-700 transition-colors duration-300"
          >
            JOIN US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;