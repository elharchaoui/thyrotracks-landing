import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    // Add z-50 to ensure it's on top of all other content
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-black/30 backdrop-blur-sm">
      <Link href="/" className="flex items-center">
        <Image
          src="/thyrotracks.png"       // The path to your logo in the public folder
          alt="Thyrotracks Logo"  // IMPORTANT for accessibility
          width={60}           // The desired width of the logo in pixels
          height={18}           // The desired height of the logo in pixels
          priority              // Tells Next.js to load this image first (good for logos)
        />
        <span className="ml-2 text-white text-xl font-semibold">Thyrotracks</span>
      </Link>
      <nav className="flex items-center gap-6">
        <a href="https://www.linkedin.com/company/thyrotracks/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:contact@thyrotracks.com" className="text-gray-400 hover:text-white transition-colors">
          <Mail size={20} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
