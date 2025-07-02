
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  // Custom TikTok icon component since lucide-react doesn't have one
  const TikTokIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/nexibotuk' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/nexibot' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/nexibotuk' },
    { name: 'TikTok', icon: TikTokIcon, url: 'https://www.tiktok.com/@nexibotuk' },
    { name: 'Discord', icon: MessageSquare, url: 'https://discord.com/invite/nexibot' },
  ];

  return (
    <footer className="bg-black border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Link to="/">
                <img 
                  src="/lovable-uploads/e76a24f5-4bd9-4d5d-8f70-e1940b40a17c.png" 
                  alt="Nexi" 
                  className="h-24 w-auto bg-black px-6 py-3 rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-orange-300 mb-4 max-w-md">
              Your Server, Supercharged. Enhance your Discord server with powerful automation and management tools.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-medium">All Systems Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-orange-300 hover:text-orange-400 transition-colors duration-200">
                  Legal
                </Link>
              </li>
              <li>
                <a href="https://documentation.nexibot.uk" className="text-orange-300 hover:text-orange-400 transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://status.nexibot.uk" className="text-orange-300 hover:text-orange-400 transition-colors duration-200">
                  Status
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-orange-300 hover:text-orange-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <a href="https://billing.stripe.com/p/login/14keYK0nd3sk2SA144" className="text-orange-300 hover:text-orange-400 transition-colors duration-200">
                  Billing Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-orange-100 font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-orange-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-300 text-sm">
              © 2025 Nexi Bot Ltd. All rights reserved.
            </p>
            <p className="text-orange-300 text-sm mt-2 md:mt-0">
              80A Ruskin Avenue, Welling, London, DA16 3QQ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
