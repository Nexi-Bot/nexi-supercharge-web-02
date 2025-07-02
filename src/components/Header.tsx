
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Careers', path: '/careers' },
    { name: 'Meet the Team', path: '/team' },
    { name: 'Legal', path: '/legal' },
  ];

  const externalLinks = [
    { name: 'Dashboard', url: 'https://billing.stripe.com/p/login/14keYK0nd3sk2SA144', icon: ExternalLink },
    { name: 'Documentation', url: 'https://documentation.nexibot.uk/', icon: ExternalLink },
  ];

  return (
    <header className="bg-black border-b border-orange-500/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center bg-black px-4 py-2 rounded">
              <img 
                src="/lovable-uploads/e76a24f5-4bd9-4d5d-8f70-e1940b40a17c.png" 
                alt="Nexi" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-orange-600 text-white'
                      : 'text-white hover:bg-orange-500/20 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-orange-500/20 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {link.name}
                  <link.icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 hover:bg-orange-500/20 px-2 py-2 rounded-md"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black rounded-lg mt-2 border border-orange-500/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-orange-600 text-white'
                      : 'text-white hover:bg-orange-500/20 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-orange-500/20 hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {link.name}
                  <link.icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
