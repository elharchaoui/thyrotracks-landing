'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScroll = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-neutral-900 via-black to-neutral-800 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/thyrotracks.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-transparent to-accent-cyan/10 z-10"></div>

      {/* Animated Content */}
      <div className={`relative z-20 flex flex-col items-center justify-center p-4 transition-all duration-1000 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* Main Content Circle */}
        <div className="relative group">
          {/* Glowing Ring Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/20 to-brand-purple/20 rounded-full blur-xl animate-glow"></div>
          
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] border border-white/20 backdrop-blur-sm bg-white/5 rounded-full flex flex-col items-center justify-center p-8 group-hover:border-accent-cyan/50 transition-all duration-500">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight bg-gradient-to-r from-white via-white to-accent-cyan bg-clip-text text-transparent">
              Smarter thyroid care starts here.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-300 font-light tracking-wide">
              Your health, <span className="text-accent-cyan font-medium">upgraded with AI</span>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center">
          <button
            onClick={handleScroll}
            className="group relative px-12 py-4 bg-gradient-to-r from-accent-cyan to-brand-blue text-white font-semibold text-sm tracking-wide uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-cyan/25"
          >
            <span className="relative z-10">Get Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-cyan to-brand-blue"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-green to-accent-cyan"></div>
            </div>
            <span>Join <strong className="text-white">500+</strong> early adopters</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
