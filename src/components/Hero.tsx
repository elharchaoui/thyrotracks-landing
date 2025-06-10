// src/components/Hero.tsx
'use client'; 

const Hero = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // This is a full-screen section.
    // It's a relative container for its absolute children (video and overlay).
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content is on top with z-20 */}
      <div className="relative z-20 flex flex-col items-center justify-center p-4">
        <div className="w-80 h-80 md:w-[450px] md:h-[450px] border-2 border-gray-500 rounded-full flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Smarter thyroid care starts here.
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-300">
            Your health, upgraded with AI.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleScroll}
            className="px-8 py-3 border border-gray-400 rounded-sm hover:bg-brand-green hover:border-brand-green transition-colors duration-300"
          >
            GET NOTIFIED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;