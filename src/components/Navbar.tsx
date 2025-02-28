import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Brain, Trophy, Newspaper, MessageSquare, Users, User, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Microscope className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ScienceHub</span>
            </Link>
          </div>
          
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
          
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600">
              <User className="h-5 w-5 mr-1" />
              <span>Profile</span>
            </Link>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
