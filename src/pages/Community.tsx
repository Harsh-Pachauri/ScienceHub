import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Video, MapPin, Clock, Star, Award, ChevronRight, Globe, Bookmark, Heart, Share2, Filter, ChevronDown } from 'lucide-react';

const Community = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      title: "Future of Quantum Computing in India",
      author: "Dr. Amit Shah",
      replies: 45,
      views: 1200,
      category: "Quantum Computing"
    },
    {
      title: "ML Models for Climate Change Prediction",
      author: "Priya Mehta",
      replies: 32,
      views: 890,
      category: "Machine Learning"
    },
    {
      title: "Biotech Startups: Challenges & Opportunities",
      author: "Dr. Sarah Chen",
      replies: 28,
      views: 750,
      category: "Biotechnology"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Research Symposium 2025",
      date: "2025-04-15",
      time: "10:00 AM IST",
      type: "Virtual",
      speakers: ["Dr. Rajesh Kumar", "Prof. Lisa Chen"]
    },
    {
      title: "Quantum Computing Workshop",
      date: "2025-04-20",
      time: "2:00 PM IST",
      type: "Hybrid",
      speakers: ["Dr. Amit Shah", "Dr. Maria Garcia"]
    }
  ];

  const topCommunities = [
    {
      name: "AI Researchers Network",
      members: 15420,
      topics: ["Machine Learning", "Neural Networks", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800",
      description: "A community of AI researchers sharing cutting-edge research, methodologies, and collaboration opportunities."
    },
    {
      name: "Quantum Computing Enthusiasts",
      members: 8750,
      topics: ["Quantum Algorithms", "Quantum Hardware", "Quantum Information"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800",
      description: "Explore the fascinating world of quantum computing with researchers and industry professionals."
    },
    {
      name: "Biotechnology Innovators",
      members: 12300,
      topics: ["Genetic Engineering", "Synthetic Biology", "Bioinformatics"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800",
      description: "Connect with biotechnology experts working on groundbreaking solutions for healthcare and sustainability."
    },
    {
      name: "Space Technology Alliance",
      members: 9650,
      topics: ["Aerospace Engineering", "Satellite Technology", "Space Exploration"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
      description: "A community dedicated to advancing space technology and exploration through collaboration and innovation."
    }
  ];

  const upcomingMeetups = [
    {
      title: "AI Ethics Roundtable",
      date: "2025-04-10",
      time: "6:00 PM - 8:00 PM",
      location: "Tech Hub, Bangalore",
      organizer: "AI Researchers Network",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800"
    },
    {
      title: "Quantum Computing Hackathon",
      date: "2025-04-18",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Center, Mumbai",
      organizer: "Quantum Computing Enthusiasts",
      attendees: 78,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
    },
    {
      title: "Biotech Startup Networking",
      date: "2025-04-25",
      time: "5:30 PM - 8:30 PM",
      location: "Life Sciences Park, Hyderabad",
      organizer: "Biotechnology Innovators",
      attendees: 62,
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800"
    }
  ];

  const communityEvents = [
    {
      title: "National Science Hackathon 2025",
      date: "2025-05-15 - 2025-05-17",
      location: "Multiple Cities",
      organizer: "Science Innovation Foundation",
      category: "Competition",
      registrationDeadline: "2025-04-30",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
      description: "A nationwide hackathon bringing together innovators to solve pressing scientific challenges."
    },
    {
      title: "Women in STEM Conference",
      date: "2025-06-10 - 2025-06-12",
      location: "Delhi Convention Center",
      organizer: "Women Scientists Association",
      category: "Conference",
      registrationDeadline: "2025-05-25",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800",
      description: "Celebrating and empowering women in science, technology, engineering, and mathematics."
    },
    {
      title: "Climate Tech Innovation Summit",
      date: "2025-05-28 - 2025-05-29",
      location: "Green Energy Campus, Chennai",
      organizer: "Climate Action Network",
      category: "Summit",
      registrationDeadline: "2025-05-10",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800",
      description: "Bringing together researchers, entrepreneurs, and policymakers to accelerate climate solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect with India's Scientific Community</h2>
              <p className="text-indigo-100 text-lg mb-6 max-w-2xl">
                Join specialized communities, participate in discussions, attend meetups, and collaborate with 
                researchers and innovators across the country.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join a Community
                </button>
                <button className="bg-indigo-500 bg-opacity-30 text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-40 transition-colors">
                  Create a Community
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Users className="h-32 w-32 text-white opacity-80" />
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Active Members</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">Coming Soon...</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Daily Discussions</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">Coming Soon...</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Monthly Events</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">Coming Soon...</p>
          </div>
        </div>

        {/* Top Communities Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Top Communities</h2>
            <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
              View All Communities
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCommunities.map((community, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={community.image} 
                    alt={community.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{community.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{community.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{community.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {community.topics.slice(0, 2).map((topic, idx) => (
                      <span key={idx} className="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">
                        {topic}
                      </span>
                    ))}
                    {community.topics.length > 2 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        +{community.topics.length - 2} more
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Join Community
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-1 flex mb-8 overflow-x-auto">
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'discussions' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('discussions')}
          >
            Discussions
          </button>
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'meetups' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('meetups')}
          >
            Upcoming Meetups
          </button>
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'events' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('events')}
          >
            Community Events
          </button>
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
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>All Categories</option>
                  <option>AI & Machine Learning</option>
                  <option>Quantum Computing</option>
                  <option>Biotechnology</option>
                  <option>Space Technology</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>All Locations</option>
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Next 30 days</option>
                  <option>Next 60 days</option>
                  <option>Next 90 days</option>
                  <option>All upcoming</option>
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

        {/* Discussion Forums - Active when discussions tab is selected */}
        {activeTab === 'discussions' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Trending Discussions</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Start Discussion
              </button>
            </div>
            <div className="space-y-6">
              {discussions.map((discussion, index) => (
                <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm mb-2">
                        {discussion.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{discussion.title}</h3>
                      <p className="text-gray-600">Started by {discussion.author}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{discussion.replies} replies</p>
                      <p className="text-gray-400">{discussion.views} views</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Meetups - Active when meetups tab is selected */}
        {activeTab === 'meetups' && (
          <div className="space-y-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingMeetups.map((meetup, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={meetup.image} 
                      alt={meetup.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{meetup.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{new Date(meetup.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{meetup.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{meetup.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{meetup.attendees} attending</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Globe className="h-4 w-4 text-gray-400 mr-2" />
                      <span>Organized by {meetup.organizer}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        RSVP
                      </button>
                      <button className="p-2 text-gray-400 hover:text-indigo-600 border border-gray-200 rounded-lg">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 border border-gray-200 rounded-lg">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-indigo-600 border border-gray-200 rounded-lg">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
                View All Meetups
              </button>
            </div>
          </div>
        )}

        {/* Community Events - Active when events tab is selected */}
        {activeTab === 'events' && (
          <div className="space-y-8 mb-12">
            {communityEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-48 w-full object-cover md:h-full md:w-80"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Globe className="h-4 w-4 text-gray-400 mr-2" />
                          <span>Organized by {event.organizer}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 text-gray-400 mr-2" />
                          <span>Registration Deadline: {new Date(event.registrationDeadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        Register Now
                      </button>
                      <button className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-100 transition-colors flex items-center">
                        <Bookmark className="h-4 w-4 mr-2" />
                        Save
                      </button>
                      <button className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-100 transition-colors flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <button className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
                View All Events
              </button>
            </div>
          </div>
        )}

        {/* Upcoming Events - Always visible at the bottom */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Video className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-indigo-600">{event.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    Date: {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">Time: {event.time}</p>
                  <p className="text-gray-600">
                    Speakers: {event.speakers.join(", ")}
                  </p>
                </div>
                <button className="w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;