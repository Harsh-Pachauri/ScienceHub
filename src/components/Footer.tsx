import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Microscope className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">ScienceHub</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering India's youth to lead the next wave of scientific innovation and discovery.
            </p>
            <Link to="/about" className="text-indigo-400 hover:text-indigo-300 flex items-center">
              Learn more about us
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/research" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Research Hub
                </Link>
              </li>
              <li>
                <Link to="/competitions" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Competitions
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:info@sciencehub.org" className="hover:text-indigo-400 transition-colors">
                  info@sciencehub.org
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+919876543210" className="hover:text-indigo-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-indigo-400 mt-1" />
                <span>
                  GGSIPU,<br />
                  Dwaka Sector-14,<br />
                  India
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/company/sciencehub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/sciencehub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/sciencehub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/sciencehub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ScienceHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;