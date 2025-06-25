import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center group">
        <div className="relative">
          <Image
            src="/thyrotracks.png"
            alt="Thyrotracks Logo"
            width={60}
            height={18}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-brand-blue/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
        <span className="ml-3 text-white text-xl font-display font-semibold tracking-tight group-hover:text-accent-cyan transition-colors duration-300">
          Thyrotracks
        </span>
      </Link>
      
      <nav className="flex items-center gap-4">
        <a 
          href="https://www.linkedin.com/company/thyrotracks/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
        >
          <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </a>
        <a 
          href="mailto:contact@thyrotracks.com" 
          className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
        >
          <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
        </a>
        <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Beta Available</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
