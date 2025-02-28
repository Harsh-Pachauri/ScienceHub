import React, { useState } from 'react';
import { MessageSquare, Send, User, Star, Award, BookOpen, Users, Filter, ChevronDown } from 'lucide-react';

const Mentorship = () => {
  const [question, setQuestion] = useState('');
  const [activeTab, setActiveTab] = useState('find');
  const [showFilters, setShowFilters] = useState(false);

  const mentors = [
    {
      name: "Dr. Aisha Patel",
      expertise: "AI & Machine Learning",
      rating: 4.9,
      reviews: 156,
      students: 42,
      institution: "Indian Institute of Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
      badges: ["Top Contributor", "AI Expert"]
    },
    {
      name: "Prof. Rajesh Kumar",
      expertise: "Quantum Computing",
      rating: 4.8,
      reviews: 142,
      students: 38,
      institution: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      badges: ["Research Excellence"]
    },
    {
      name: "Dr. Sarah Chen",
      expertise: "Biotechnology",
      rating: 4.9,
      reviews: 189,
      students: 51,
      institution: "NCBS Bangalore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
      badges: ["Top Mentor", "Industry Expert"]
    },
    {
      name: "Dr. Vikram Singh",
      expertise: "Quantum Physics",
      rating: 4.7,
      reviews: 128,
      students: 35,
      institution: "TIFR Mumbai",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400",
      badges: ["Research Pioneer"]
    }
  ];

  const recommendedMentors = [
    {
      name: "Dr. Meera Iyer",
      expertise: "Biotechnology",
      match: "98% Match",
      institution: "IIT Madras",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=400",
      reason: "Based on your interest in synthetic biology and sustainable biofuels"
    },
    {
      name: "Dr. Amit Shah",
      expertise: "Healthcare AI",
      match: "95% Match",
      institution: "AIIMS Delhi",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400",
      reason: "Based on your recent research in medical imaging and diagnostics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Mentorship Hub</h1>
          <div className="bg-white rounded-lg shadow-sm p-1 flex">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'find' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              onClick={() => setActiveTab('find')}
            >
              Find a Mentor
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'become' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              onClick={() => setActiveTab('become')}
            >
              Become a Mentor
            </button>
          </div>
        </div>

        

        {/* Mentor Match AI */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 mb-12 text-white">
          <div className="flex items-center mb-6">
            <User className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold">Mentor Match AI</h2>
          </div>
          <p className="text-lg mb-6">
            Our AI has analyzed your profile and research interests to recommend the perfect mentors for your journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {recommendedMentors.map((mentor, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-white">{mentor.name}</h3>
                    <p className="text-indigo-100 text-sm">{mentor.expertise}</p>
                  </div>
                </div>
                <div className="bg-indigo-600 bg-opacity-30 rounded px-2 py-1 inline-block mb-2">
                  <span className="text-sm font-medium">{mentor.match}</span>
                </div>
                <p className="text-sm text-indigo-100">{mentor.reason}</p>
                <button className="mt-3 w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            View All Recommendations
          </button>
        </div>

        {/* Top Mentors Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Top Mentors</h2>
            <button 
              className="flex items-center text-indigo-600 hover:text-indigo-800"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filter
              <ChevronDown className={`h-5 w-5 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {showFilters && (
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expertise</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>All Fields</option>
                    <option>AI & Machine Learning</option>
                    <option>Quantum Computing</option>
                    <option>Biotechnology</option>
                    <option>Renewable Energy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>All Institutions</option>
                    <option>IISc Bangalore</option>
                    <option>IIT Bombay</option>
                    <option>TIFR Mumbai</option>
                    <option>AIIMS Delhi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Any Rating</option>
                    <option>4.5 & Above</option>
                    <option>4.0 & Above</option>
                    <option>3.5 & Above</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.expertise}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{mentor.rating}</span>
                    <span className="ml-2 text-gray-400">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-gray-400 mr-1" />
                    <span className="text-gray-600">{mentor.students} students mentored</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.badges.map((badge, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        <Award className="h-3 w-3 mr-1" />
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{mentor.institution}</p>
                  <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Guidance */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Personalized Career Guidance</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Get AI-powered career recommendations based on your interests, skills, and research experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Assessment</h3>
              <p className="text-gray-600 mb-4">Evaluate your research skills and identify areas for improvement</p>
              <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                Start Assessment
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Pathways</h3>
              <p className="text-gray-600 mb-4">Explore potential career paths based on your research interests</p>
              <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                Explore Pathways
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600 mb-4">Personalized recommendations for courses and workshops</p>
              <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                Get Recommendations
              </button>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Create Career Development Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;