import React, { useState } from 'react';
import { Newspaper, Bookmark, Share2, ExternalLink, Calendar, Briefcase, GraduationCap, Filter, ChevronDown, Bell, Tag, Search } from 'lucide-react';

const News = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const newsArticles = [
    {
      title: "Breakthrough in Quantum Computing Achieved by Indian Researchers",
      category: "Quantum Computing",
      date: "2025-03-15",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800",
      summary: "Team of researchers develops new quantum bit that maintains coherence 100 times longer than previous records.",
      source: "Science India Today",
      readTime: "5 min read"
    },
    {
      title: "AI Model Predicts Climate Change Impact with 95% Accuracy",
      category: "Artificial Intelligence",
      date: "2025-03-14",
      image: "https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&w=800",
      summary: "Revolutionary AI system helps forecast environmental changes and suggests mitigation strategies.",
      source: "Tech Innovations",
      readTime: "4 min read"
    },
    {
      title: "New Scholarship Program Launches for STEM Students",
      category: "Education",
      date: "2025-03-13",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800",
      summary: "₹50 Crore initiative to support promising students in science and technology fields.",
      source: "Education Times",
      readTime: "3 min read"
    },
    {
      title: "Indian Biotech Startup Develops Novel Cancer Treatment",
      category: "Biotechnology",
      date: "2025-03-12",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800",
      summary: "Innovative immunotherapy approach shows promising results in early clinical trials.",
      source: "Health Sciences Journal",
      readTime: "6 min read"
    },
    {
      title: "National Space Agency Announces Mars Mission for 2026",
      category: "Space Exploration",
      date: "2025-03-10",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800",
      summary: "Ambitious mission will study Martian atmosphere and search for signs of ancient microbial life.",
      source: "Space Frontiers",
      readTime: "7 min read"
    }
  ];

  const researchOpportunities = [
    {
      title: "ISRO Young Scientist Program",
      deadline: "2025-04-30",
      funding: "₹5,00,000",
      type: "Fellowship",
      organization: "Indian Space Research Organisation",
      location: "Bangalore",
      eligibility: "PhD in Aerospace Engineering, Physics or related fields",
      description: "Research opportunity for young scientists to contribute to India's space program through innovative projects."
    },
    {
      title: "DST Innovation Grant",
      deadline: "2025-05-15",
      funding: "₹10,00,000",
      type: "Research Grant",
      organization: "Department of Science & Technology",
      location: "Multiple Locations",
      eligibility: "Faculty members and researchers at recognized institutions",
      description: "Funding for cutting-edge research projects with potential for significant societal impact."
    },
    {
      title: "Indo-US Science Fellowship",
      deadline: "2025-04-20",
      funding: "₹15,00,000",
      type: "Fellowship",
      organization: "Indo-US Science and Technology Forum",
      location: "Various US Universities",
      eligibility: "Indian scientists with PhD and 3+ years experience",
      description: "Collaborative research opportunity with leading US institutions in priority areas of mutual interest."
    }
  ];

  const internships = [
    {
      title: "AI Research Intern",
      company: "Microsoft Research India",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹75,000/month",
      deadline: "2025-04-10",
      requirements: "Masters/PhD students in Computer Science, strong ML background"
    },
    {
      title: "Biotechnology Research Intern",
      company: "Biocon",
      location: "Hyderabad",
      duration: "3 months",
      stipend: "₹50,000/month",
      deadline: "2025-04-15",
      requirements: "Biotechnology or Biochemistry students with lab experience"
    },
    {
      title: "Renewable Energy Engineering Intern",
      company: "Suzlon Energy",
      location: "Pune",
      duration: "4 months",
      stipend: "₹45,000/month",
      deadline: "2025-04-25",
      requirements: "Engineering students with interest in renewable energy technologies"
    }
  ];

  const upcomingEvents = [
    {
      title: "National Science Congress 2025",
      date: "2025-05-10",
      location: "New Delhi",
      organizer: "Indian Science Congress Association",
      type: "Conference",
      registrationFee: "₹5,000",
      description: "Annual gathering of scientists, researchers and students to discuss advancements across scientific disciplines."
    },
    {
      title: "AI & Machine Learning Summit",
      date: "2025-04-25",
      location: "Bangalore",
      organizer: "AI Research Foundation",
      type: "Summit",
      registrationFee: "₹7,500",
      description: "Industry-leading conference on artificial intelligence innovations and applications."
    },
    {
      title: "Biotechnology Innovation Workshop",
      date: "2025-05-05",
      location: "Hyderabad",
      organizer: "Biotechnology Industry Research Assistance Council",
      type: "Workshop",
      registrationFee: "₹3,000",
      description: "Hands-on workshop on latest biotechnology techniques and entrepreneurship opportunities."
    },
    {
      title: "Space Technology Expo",
      date: "2025-06-15",
      location: "Mumbai",
      organizer: "Space Technology Association of India",
      type: "Exhibition",
      registrationFee: "₹2,000",
      description: "Exhibition showcasing cutting-edge space technologies and innovations from across the globe."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Science & Innovation News</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news and opportunities..."
                className="w-full md:w-64 px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <Bell className="h-5 w-5 mr-2" />
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-1 flex flex-wrap mb-8">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'trending' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('trending')}
          >
            Trending News
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'research' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('research')}
          >
            Research Opportunities
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'internships' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'events' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('events')}
          >
            Upcoming Events
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
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeTab === 'trending' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Categories</option>
                      <option>Artificial Intelligence</option>
                      <option>Quantum Computing</option>
                      <option>Biotechnology</option>
                      <option>Space Exploration</option>
                      <option>Education</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Last Week</option>
                      <option>Last Month</option>
                      <option>Last 3 Months</option>
                      <option>Last Year</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Sources</option>
                      <option>Science India Today</option>
                      <option>Tech Innovations</option>
                      <option>Education Times</option>
                      <option>Health Sciences Journal</option>
                    </select>
                  </div>
                </>
              )}
              
              {activeTab === 'research' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Opportunity Type</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Types</option>
                      <option>Fellowship</option>
                      <option>Research Grant</option>
                      <option>Scholarship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Funding Amount</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Any Amount</option>
                      <option>₹5,00,000+</option>
                      <option>₹10,00,000+</option>
                      <option>₹15,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Locations</option>
                      <option>India</option>
                      <option>International</option>
                      <option>Remote</option>
                    </select>
                  </div>
                </>
              )}
              
              {activeTab === 'internships' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Field</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Fields</option>
                      <option>Artificial Intelligence</option>
                      <option>Biotechnology</option>
                      <option>Renewable Energy</option>
                      <option>Space Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Any Duration</option>
                      <option>1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>6+ Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stipend</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Any Amount</option>
                      <option>₹30,000+/month</option>
                      <option>₹50,000+/month</option>
                      <option>₹70,000+/month</option>
                    </select>
                  </div>
                </>
              )}
              
              {activeTab === 'events' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Types</option>
                      <option>Conference</option>
                      <option>Workshop</option>
                      <option>Summit</option>
                      <option>Exhibition</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>All Locations</option>
                      <option>New Delhi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Next Month</option>
                      <option>Next 3 Months</option>
                      <option>Next 6 Months</option>
                      <option>This Year</option>
                    </select>
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Trending News Tab Content */}
        {activeTab === 'trending' && (
          <>
            {/* Featured Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
                    alt="Featured Article" 
                    className="h-48 w-full object-cover md:h-full md:w-80"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-2">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">March 16, 2025</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Indian Scientists Develop Revolutionary Carbon Capture Technology
                  </h2>
                  <p className="text-gray-600 mb-4">
                    A team of researchers from IIT Bombay has developed a groundbreaking technology that can capture carbon dioxide from the atmosphere at unprecedented efficiency levels, potentially transforming climate change mitigation efforts.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Science India Today</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">8 min read</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {newsArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-medium text-indigo-600">{article.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.summary}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">{article.source}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Bookmark className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Categories */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#" className="flex flex-col items-center p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                  <Tag className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-gray-800 font-medium">Artificial Intelligence</span>
                </a>
                <a href="#" className="flex flex-col items-center p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                  <Tag className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-gray-800 font-medium">Quantum Computing</span>
                </a>
                <a href="#" className="flex flex-col items-center p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                  <Tag className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-gray-800 font-medium">Biotechnology</span>
                </a>
                <a href="#" className="flex flex-col items-center p-4 border rounded-lg hover:bg-indigo-50 transition-colors">
                  <Tag className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-gray-800 font-medium">Space Exploration</span>
                </a>
              </div>
            </div>
          </>
        )}

        {/* Research Opportunities Tab Content */}
        {activeTab === 'research' && (
          <>
            {/* Featured Opportunity */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Featured Opportunity</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2">National Science Foundation Research Grant</h3>
              <p className="mb-4">
                Prestigious grant for groundbreaking research in priority areas including quantum technologies, 
                artificial intelligence, and sustainable energy solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <p className="text-sm font-medium">Funding Amount</p>
                  <p className="text-xl font-bold">₹25,00,000</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <p className="text-sm font-medium">Deadline</p>
                  <p className="text-xl font-bold">April 30, 2025</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3">
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-xl font-bold">3 Years</p>
                </div>
              </div>
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Research Opportunities List */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Fellowships & Grants</h2>
              <div className="space-y-6">
                {researchOpportunities.map((opportunity, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{opportunity.title}</h3>
                        <p className="text-gray-600 mb-3">{opportunity.description}</p>
                        <div className="flex flex-wrap gap-y-2">
                          <div className="flex items-center mr-4">
                            <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{opportunity.organization}</span>
                          </div>
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">
                              Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                          {opportunity.type}
                        </span>
                        <span className="text-lg font-semibold text-indigo-600 mb-2">{opportunity.funding}</span>
                        <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                          View Details
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
                  View All Opportunities
                </button>
              </div>
            </div>

            {/* Application Tips */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Grant Application Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Crafting a Compelling Research Proposal</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to structure your research proposal to maximize chances of success. Our experts share insights on 
                    highlighting innovation, methodology, and expected outcomes.
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Read More
                  </button>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Budget Planning for Research Grants</h3>
                  <p className="text-gray-600 mb-4">
                    Effective budget planning is crucial for grant applications. Discover best practices for creating 
                    realistic budgets that align with your research objectives.
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Internships Tab Content */}
        {activeTab === 'internships' && (
          <>
            {/* Internship Listings */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Internships</h2>
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{internship.title}</h3>
                        <div className="flex items-center mb-3">
                          <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600">{internship.company}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">{internship.location}</span>
                        </div>
                        <p className="text-gray-600 mb-3">
                          <span className="font-medium">Requirements:</span> {internship.requirements}
                        </p>
                        <div className="flex flex-wrap gap-y-2">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">
                              Duration: {internship.duration}
                            </span>
                          </div>
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">
                              Deadline: {new Date(internship.deadline).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-lg font-semibold text-indigo-600 mb-3">{internship.stipend}</span>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
                  View All Internships
                </button>
              </div>
            </div>

            {/* Industry Collaborations */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-12">
              <h2 className="text-2xl font-bold mb-6">Industry-Academia Collaborations</h2>
              <p className="text-lg mb-6">
                Explore opportunities for collaborative research projects between academic institutions and industry partners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Research Partnerships</h3>
                  <p className="text-indigo-100 mb-4">
                    Joint research initiatives between universities and companies to solve real-world challenges.
                  </p>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Technology Transfer</h3>
                  <p className="text-indigo-100 mb-4">
                    Programs to commercialize academic research and bring innovations to market.
                  </p>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Innovation Labs</h3>
                  <p className="text-indigo-100 mb-4">
                    Collaborative spaces where students and industry professionals work together on cutting-edge projects.
                  </p>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Career Development */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Development Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Resume Building for STEM Careers</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to craft a compelling resume that highlights your technical skills and research experience.
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    View Resource
                  </button>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Interview Preparation</h3>
                  <p className="text-gray-600 mb-4">
                    Strategies and practice questions to help you ace technical interviews in science and technology fields.
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    View Resource
                  </button>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Research to Industry Transition</h3>
                  <p className="text-gray-600 mb-4">
                    Guidance for researchers looking to transition from academia to industry roles.
                  </p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    View Resource
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <>
            {/* Featured Event */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800" 
                    alt="Featured Event" 
                    className="h-48 w-full object-cover md:h-full md:w-80"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-2">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured Event</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">Conference</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    International Conference on Quantum Technologies 2025
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Join leading researchers and industry experts for the premier conference on quantum computing, 
                    quantum communication, and quantum sensing technologies.
                  </p>
                  <div className="flex flex-wrap gap-y-2 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">July 15-18, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">IISc Bangalore</span>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Conferences & Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                          {event.type}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      </div>
                      <Calendar className="h-10 w-10 text-indigo-600" />
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">Organized by: {event.organizer}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">Registration Fee: {event.registrationFee}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                        View Details
                      </button>
                      <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
                  View All Events
                </button>
              </div>
            </div>

            {/* Call for Papers */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Call for Papers & Presentations</h2>
              <p className="text-lg mb-6">
                Submit your research papers and presentation proposals for upcoming conferences and symposiums.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">AI & Machine Learning Symposium</h3>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-indigo-100">Submission Deadline</p>
                    <p className="text-lg font-bold">May 15, 2025</p>
                  </div>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Submit Paper
                  </button>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Biotechnology Conference</h3>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-indigo-100">Submission Deadline</p>
                    <p className="text-lg font-bold">June 10, 2025</p>
                  </div>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Submit Paper
                  </button>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Renewable Energy Forum</h3>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-indigo-100">Submission Deadline</p>
                    <p className="text-lg font-bold">June 30, 2025</p>
                  </div>
                  <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Submit Paper
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default News;