import React, { useState } from 'react';
import { Trophy, Clock, Users, Award, Plus, Building, Briefcase, Star, Filter, ChevronDown, X, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Competitions = () => {
  const [activeTab, setActiveTab] = useState('participate');
  const [showFilters, setShowFilters] = useState(false);
  const [showHostForm, setShowHostForm] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: 'AI & Machine Learning',
    deadline: '',
    prize: '',
    description: '',
    eligibility: 'Open to All',
    teamSize: 'both'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      teamSize: e.target.id
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log('Form submitted:', formData);
    alert('Competition created successfully!');
    setShowHostForm(false);
    // Reset form
    setFormData({
      title: '',
      category: 'AI & Machine Learning',
      deadline: '',
      prize: '',
      description: '',
      eligibility: 'Open to All',
      teamSize: 'both'
    });
  };

  const activeCompetitions = [
    {
      title: "AI for Healthcare Innovation",
      deadline: "2025-04-15",
      participants: 234,
      prize: "₹5,00,000",
      description: "Develop AI solutions for early disease detection and diagnosis",
      organizer: "HealthTech India",
      organizerType: "Company"
    },
    {
      title: "Clean Energy Challenge",
      deadline: "2025-05-01",
      participants: 189,
      prize: "₹3,50,000",
      description: "Create innovative solutions for renewable energy storage",
      organizer: "IIT Delhi",
      organizerType: "Institution"
    },
    {
      title: "Smart Cities Hackathon",
      deadline: "2025-04-30",
      participants: 312,
      prize: "₹4,00,000",
      description: "Build IoT solutions for urban infrastructure management",
      organizer: "Ministry of Urban Development",
      organizerType: "Government"
    }
  ];

  const topOrganizers = [
    {
      name: "TechInnovate India",
      type: "Company",
      competitions: 12,
      participants: 3500,
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300"
    },
    {
      name: "IIT Bombay",
      type: "Institution",
      competitions: 15,
      participants: 4200,
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300"
    },
    {
      name: "NITI Aayog",
      type: "Government",
      competitions: 8,
      participants: 5800,
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300"
    }
  ];

  const handleViewProfile = () => {
    // Navigate to the mentor profile page
    navigate('/profile/mentor');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Innovation Competitions</h1>
          <div className="bg-white rounded-lg shadow-sm p-1 flex">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'participate' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              onClick={() => setActiveTab('participate')}
            >
              Participate
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'host' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              onClick={() => setActiveTab('host')}
            >
              Host Competition
            </button>
          </div>
        </div>

        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Showcase Your Innovation</h2>
              <p className="text-indigo-100 text-lg mb-6 max-w-2xl">
                Join India's premier platform for science and technology competitions. 
                Connect with industry leaders, win exciting prizes, and turn your ideas into reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Browse Competitions
                </button>
                <button 
                  className="bg-indigo-500 bg-opacity-30 text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-40 transition-colors"
                  onClick={() => {
                    setActiveTab('host');
                    setShowHostForm(true);
                  }}
                >
                  Host a Competition
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Trophy className="h-32 w-32 text-white opacity-80" />
            </div>
          </div>
        </div>

        {activeTab === 'participate' ? (
          <>
            {/* Participate Tab Content */}
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600">Showcase your ideas and compete with innovators across India</p>
            </div>

            {/* Filter Section */}
            <div className="flex justify-end mb-6">
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
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Categories</option>
                      <option>AI & Machine Learning</option>
                      <option>Clean Energy</option>
                      <option>Healthcare</option>
                      <option>Smart Cities</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organizer Type</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Types</option>
                      <option>Company</option>
                      <option>Institution</option>
                      <option>Government</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prize Amount</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Any Amount</option>
                      <option>₹1,00,000+</option>
                      <option>₹3,00,000+</option>
                      <option>₹5,00,000+</option>
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

            {/* Active Competitions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {activeCompetitions.map((competition, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
                    <h3 className="text-xl font-semibold text-white">{competition.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{competition.description}</p>
                    <div className="flex items-center mb-4">
                      {competition.organizerType === 'Company' ? (
                        <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                      ) : competition.organizerType === 'Institution' ? (
                        <Building className="h-4 w-4 text-gray-400 mr-2" />
                      ) : (
                        <Building className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <span className="text-sm text-gray-600">
                        Organized by {competition.organizer}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          Deadline: {new Date(competition.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {competition.participants} Participants
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-indigo-500 mr-2" />
                        <span className="text-lg font-semibold text-indigo-600">{competition.prize}</span>
                      </div>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Formation */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Form a Team</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Looking for teammates? Create or join a team to participate in competitions together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Create a Team</h3>
                  <p className="text-gray-600 mb-4">
                    Start your own team and invite others to join your innovation journey.
                  </p>
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Create Team
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Find a Team</h3>
                  <p className="text-gray-600 mb-4">
                    Browse teams looking for members with your skills and interests.
                  </p>
                  <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                    Browse Teams
                  </button>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Top Innovators</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Rank</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Innovator</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Competitions Won</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Total Prize Money</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Achievements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm text-gray-800">1</td>
                      <td className="px-6 py-4 text-sm text-gray-800">Arjun Mehta</td>
                      <td className="px-6 py-4 text-sm text-gray-800">5</td>
                      <td className="px-6 py-4 text-sm text-gray-800">₹12,50,000</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                            <Trophy className="h-3 w-3 mr-1" />
                            Champion
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                            <Star className="h-3 w-3 mr-1" />
                            Innovator
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 text-sm text-gray-800">2</td>
                      <td className="px-6 py-4 text-sm text-gray-800">Priya Sharma</td>
                      <td className="px-6 py-4 text-sm text-gray-800">4</td>
                      <td className="px-6 py-4 text-sm text-gray-800">₹9,00,000</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            <Star className="h-3 w-3 mr-1" />
                            Rising Star
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-800">3</td>
                      <td className="px-6 py-4 text-sm text-gray-800">Rahul Kumar</td>
                      <td className="px-6 py-4 text-sm text-gray-800">3</td>
                      <td className="px-6 py-4 text-sm text-gray-800">₹7,50,000</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            <Award className="h-3 w-3 mr-1" />
                            Tech Wizard
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Host Competition Tab Content */}
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600">Create and manage innovation challenges for your organization</p>
            </div>

            {/* Host Competition Form Modal */}
            {showHostForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-900">Host a Competition</h2>
                    <button 
                      onClick={() => setShowHostForm(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Competition Title*</label>
                        <input 
                          type="text" 
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="e.g., AI Solutions for Climate Change"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                        >
                          <option>AI & Machine Learning</option>
                          <option>Clean Energy</option>
                          <option>Healthcare</option>
                          <option>Smart Cities</option>
                          <option>Biotechnology</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Submission Deadline*</label>
                        <input 
                          type="date" 
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleInputChange}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prize Amount (₹)*</label>
                        <input 
                          type="number" 
                          name="prize"
                          value={formData.prize}
                          onChange={handleInputChange}
                          placeholder="e.g., 500000"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                        <textarea 
                          rows={4}
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Describe the challenge, requirements, and evaluation criteria..."
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Eligibility</label>
                        <select 
                          name="eligibility"
                          value={formData.eligibility}
                          onChange={handleInputChange}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                          <option>Open to All</option>
                          <option>Students Only</option>
                          <option>Professionals Only</option>
                          <option>Startups Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                        <div className="flex space-x-4">
                          <div className="flex items-center">
                            <input 
                              type="radio" 
                              id="individual" 
                              name="teamSize" 
                              checked={formData.teamSize === 'individual'}
                              onChange={handleRadioChange}
                              className="mr-2" 
                            />
                            <label htmlFor="individual">Individual</label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="radio" 
                              id="team" 
                              name="teamSize" 
                              checked={formData.teamSize === 'team'}
                              onChange={handleRadioChange}
                              className="mr-2" 
                            />
                            <label htmlFor="team">Team</label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="radio" 
                              id="both" 
                              name="teamSize" 
                              checked={formData.teamSize === 'both'}
                              onChange={handleRadioChange}
                              className="mr-2" 
                            />
                            <label htmlFor="both">Both</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 flex justify-end space-x-4">
                      <button 
                        type="button"
                        onClick={() => setShowHostForm(false)}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        Create Competition
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Host a Competition */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <Plus className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Host a Competition</h2>
              </div>
              <p className="text-gray-600 mb-8">
                Create a competition to discover innovative solutions, identify talent, and drive innovation in your field.
              </p>
              
              <div className="text-center">
                <button 
                  onClick={() => setShowHostForm(true)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Create Competition
                </button>
              </div>
            </div>

            {/* Top Organizers */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Top Organizers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topOrganizers.map((organizer, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <img 
                      src={organizer.logo} 
                      alt={organizer.name} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{organizer.name}</h3>
                      <div className="flex items-center mb-3">
                        {organizer.type === 'Company' ? (
                          <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                        ) : organizer.type === 'Institution' ? (
                          <Building className="h-4 w-4 text-gray-400 mr-2" />
                        ) : (
                          <Building className="h-4 w-4 text-gray-400 mr-2" />
                        )}
                        <span className="text-sm text-gray-600">{organizer.type}</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Competitions Hosted:</span> {organizer.competitions}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Total Participants:</span> {organizer.participants}
                        </p>
                      </div>
                      <button 
                        className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                        onClick={handleViewProfile}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizer Benefits */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Benefits of Hosting Competitions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Talent Discovery</h3>
                  </div>
                  <p className="text-indigo-100">
                    Identify promising talent and potential recruits for your organization.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Innovation</h3>
                  </div>
                  <p className="text-indigo-100">
                    Discover novel solutions to complex problems from diverse perspectives.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 mr-3" />
                    <h3 className="text-xl font-semibold">Brand Recognition</h3>
                  </div>
                  <p className="text-indigo-100">
                    Enhance your organization's visibility in the innovation ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Competitions;