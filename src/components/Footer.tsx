import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Logo and Tagline */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Spore.Bio</h3>
          <p>Lighting up microbiology</p>
        </div>

        {/* Column 2: Offices */}
        <div>
          <h4 className="font-semibold text-white mb-4">Offices</h4>
          <p>27 Rue du Fbg Saint-Jacques</p>
          <p>75014 Paris</p>
          <p>France</p>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact us</h4>
          <ul>
            <li className="mb-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </li>
            <li>
              <a href="mailto:contact@spore.bio" className="hover:text-white transition-colors">Mail</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;