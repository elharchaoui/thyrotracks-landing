import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-cyan to-brand-blue rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-display font-bold text-white">Thyrotracks</h3>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Revolutionizing thyroid health management with cutting-edge AI technology.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Augmented Healthcare</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Company</h4>
            <div className="space-y-3 mb-6">
              <p className="text-sm font-medium text-neutral-300">Headquarters</p>
              <div className="text-sm">
                <p>5 Parv. Alan Turing</p>
                <p>75013 Paris, France</p>
              </div>
            </div>
          </div>

          <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Our Partners</h5>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 inline-block">
                <Image
                  src="/Logo-IMT-Starter-V-Blanc_v2.png" 
                  alt="IMT Partner Logo" 
                  className="h-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                </div>
            </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Connect</h4>
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/company/thyrotracks/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-blue-400/10 hover:from-blue-600/20 hover:to-blue-400/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-xs text-neutral-400">Follow our journey</p>
                </div>
              </a>
              
              <a 
                href="mailto:contact@thyrotracks.com" 
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-brand-blue/10 hover:from-accent-cyan/20 hover:to-brand-blue/20 border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-accent-cyan to-brand-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-xs text-neutral-400">Get in touch</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm">
            <p className="text-neutral-500">
              © 2025 Thyrotracks.&apos; All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-accent-cyan transition-colors duration-300">Privacy</a>
              <a href="/terms" className="hover:text-accent-cyan transition-colors duration-300">Terms</a>
              <a href="/cookies" className="hover:text-accent-cyan transition-colors duration-300">Cookies</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span>Made with</span>
            <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            <span>in Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
