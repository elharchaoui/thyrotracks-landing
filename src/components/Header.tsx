import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-black/30 backdrop-blur-sm">
      <Link href="/" className="text-xl font-bold tracking-wider">
        Spore.Bio
      </Link>
      <nav className="flex items-center gap-6">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:contact@spore.bio" className="text-gray-400 hover:text-white transition-colors">
          <Mail size={20} />
        </a>
      </nav>
    </header>
  );
};

export default Header;