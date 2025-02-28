import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Brain, Trophy, Newspaper, MessageSquare, Users, User, Info, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Microscope className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ScienceHub</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/research" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <Brain className="h-5 w-5 mr-1" />
              <span>Research Hub</span>
            </Link>
            <Link to="/competitions" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <Trophy className="h-5 w-5 mr-1" />
              <span>Competitions</span>
            </Link>
            <Link to="/news" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <Newspaper className="h-5 w-5 mr-1" />
              <span>News</span>
            </Link>
            <Link to="/mentorship" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <MessageSquare className="h-5 w-5 mr-1" />
              <span>Mentorship</span>
            </Link>
            <Link to="/community" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <Users className="h-5 w-5 mr-1" />
              <span>Community</span>
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <Info className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
          </div>
          
          {/* Desktop Profile and Sign In */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5 mr-1" />
              <span>Profile</span>
            </Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              to="/research" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Brain className="h-5 w-5 mr-3" />
              <span>Research Hub</span>
            </Link>
            <Link 
              to="/competitions" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy className="h-5 w-5 mr-3" />
              <span>Competitions</span>
            </Link>
            <Link 
              to="/news" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Newspaper className="h-5 w-5 mr-3" />
              <span>News</span>
            </Link>
            <Link 
              to="/mentorship" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 mr-3" />
              <span>Mentorship</span>
            </Link>
            <Link 
              to="/community" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="h-5 w-5 mr-3" />
              <span>Community</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-5 w-5 mr-3" />
              <span>About</span>
            </Link>
            <div className="border-t border-gray-200 my-3"></div>
            <Link 
              to="/profile" 
              className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              <span>Profile</span>
            </Link>
            <div className="px-3 py-2">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;