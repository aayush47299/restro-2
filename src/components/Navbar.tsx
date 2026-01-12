import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-amber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <UtensilsCrossed className="h-8 w-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
            <span className="text-2xl font-bold text-white">La Maison Dorée</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-500'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#reserve"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Reserve Table
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-amber-600/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-500'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#reserve"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Reserve Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
