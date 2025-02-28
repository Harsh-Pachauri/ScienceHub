import React, { useState } from 'react';
import { Search, BookOpen, Users, Brain, FileText, Download, MessageSquare, Star, ChevronRight, Cpu, Settings, Shield, Grid, Activity, Rocket, Cloud, Link } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import ResearchFormComponent from './ResearchForm';

const Research = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [selectedResearch, setSelectedResearch] = useState<any | null>(null);
  const navigate = useNavigate();

  const researchFields = [
    {
      id: "ml",
      title: "Machine Learning",
      description: "Explore cutting-edge ML algorithms and applications",
      papers: 1250,
      researchers: 450,
      icon: Brain
    },
    {
      id: "quantum",
      title: "Quantum Computing",
      description: "Research in quantum algorithms and hardware",
      papers: 820,
      researchers: 280,
      icon: FileText
    },
    {
      id: "biotech",
      title: "Biotechnology",
      description: "Advanced research in genetic engineering and synthetic biology",
      papers: 1100,
      researchers: 380,
      icon: BookOpen
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Advancements in deep learning, NLP, and AI ethics",
      papers: 1600,
      researchers: 500,
      icon: Cpu
    },
    {
      id: "robotics",
      title: "Robotics",
      description: "Innovations in autonomous systems and humanoid robots",
      papers: 970,
      researchers: 320,
      icon: Settings
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Cutting-edge research in encryption and threat detection",
      papers: 890,
      researchers: 270,
      icon: Shield
    },
    {
      id: "nanotech",
      title: "Nanotechnology",
      description: "Exploring nanoscale materials and their applications",
      papers: 1020,
      researchers: 340,
      icon: Grid
    },
    {
      id: "neuroscience",
      title: "Neuroscience",
      description: "Investigating the human brain and cognitive functions",
      papers: 1150,
      researchers: 410,
      icon: Activity
    },
    {
      id: "aerospace",
      title: "Aerospace Engineering",
      description: "Research in aerodynamics, propulsion, and space exploration",
      papers: 780,
      researchers: 290,
      icon: Rocket
    },
    {
      id: "climate",
      title: "Climate Science",
      description: "Studies on climate change and sustainability solutions",
      papers: 950,
      researchers: 360,
      icon: Cloud
    },
    {
      id: "blockchain",
      title: "Blockchain Technology",
      description: "Developments in decentralized networks and smart contracts",
      papers: 740,
      researchers: 250,
      icon: Link
    }

  ];

  const researchPapers = {
    ml: {
      ongoing: [
        {
          id: "ml-ongoing-1",
          title: "Explainable AI for Medical Diagnosis",
          authors: ["Dr. Priya Sharma", "Arjun Mehta"],
          institution: "Indian Institute of Science",
          date: "2025-01-15",
          abstract: "This research focuses on developing explainable AI models for medical diagnosis that provide transparency in decision-making processes.",
          tags: ["Explainable AI", "Healthcare", "Deep Learning"],
          mentors: [
            {
              name: "Dr. Priya Sharma",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
              designation: "Associate Professor, AI Research",
              institution: "Indian Institute of Science"
            }
          ],
          researchers: [
            {
              name: "Arjun Mehta",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
              designation: "PhD Candidate",
              institution: "Indian Institute of Science"
            }
          ]
        },
        {
          id: "ml-ongoing-2",
          title: "Reinforcement Learning for Autonomous Vehicles",
          authors: ["Dr. Rajesh Kumar", "Neha Patel"],
          institution: "IIT Bombay",
          date: "2025-02-10",
          abstract: "Developing advanced reinforcement learning algorithms for improved decision-making in autonomous vehicles navigating complex urban environments.",
          tags: ["Reinforcement Learning", "Autonomous Vehicles", "Computer Vision"],
          mentors: [
            {
              name: "Dr. Rajesh Kumar",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
              designation: "Professor, Computer Science",
              institution: "IIT Bombay"
            }
          ],
          researchers: [
            {
              name: "Neha Patel",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
              designation: "Research Scholar",
              institution: "IIT Bombay"
            }
          ]
        }
      ],
      published: [
        {
          id: "ml-pub-1",
          title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
          authors: ["Dr. Amit Shah", "Priya Mehta"],
          institution: "AIIMS Delhi",
          date: "2024-11-05",
          abstract: "This paper presents a novel federated learning approach that enables collaborative model training across healthcare institutions while preserving patient privacy.",
          tags: ["Federated Learning", "Privacy", "Healthcare"],
          mentors: [
            {
              name: "Dr. Amit Shah",
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400",
              designation: "Head of AI Research",
              institution: "AIIMS Delhi"
            }
          ],
          researchers: [
            {
              name: "Priya Mehta",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400",
              designation: "Postdoctoral Researcher",
              institution: "AIIMS Delhi"
            }
          ],
          citations: 45,
          downloads: 1250
        }
      ]
    },
    quantum: {
      ongoing: [
        {
          id: "quantum-ongoing-1",
          title: "Quantum Error Correction for Superconducting Qubits",
          authors: ["Dr. Vikram Singh", "Ananya Desai"],
          institution: "TIFR Mumbai",
          date: "2025-01-20",
          abstract: "Developing novel quantum error correction codes for superconducting qubit architectures to improve quantum computation reliability.",
          tags: ["Quantum Error Correction", "Superconducting Qubits", "Quantum Computing"],
          mentors: [
            {
              name: "Dr. Vikram Singh",
              image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400",
              designation: "Principal Investigator, Quantum Computing",
              institution: "TIFR Mumbai"
            }
          ],
          researchers: [
            {
              name: "Ananya Desai",
              image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400",
              designation: "PhD Candidate",
              institution: "TIFR Mumbai"
            }
          ]
        }
      ],
      published: [
        {
          id: "quantum-pub-1",
          title: "Quantum Advantage in Optimization Problems",
          authors: ["Dr. Sanjay Gupta", "Rahul Verma"],
          institution: "IISc Bangalore",
          date: "2024-10-15",
          abstract: "This paper demonstrates quantum advantage in solving specific classes of optimization problems, showing exponential speedup compared to classical algorithms.",
          tags: ["Quantum Algorithms", "Optimization", "Quantum Advantage"],
          mentors: [
            {
              name: "Dr. Sanjay Gupta",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
              designation: "Professor, Quantum Information",
              institution: "IISc Bangalore"
            }
          ],
          researchers: [
            {
              name: "Rahul Verma",
              image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400",
              designation: "Research Associate",
              institution: "IISc Bangalore"
            }
          ],
          citations: 78,
          downloads: 2100
        }
      ]
    },
    biotech: {
      ongoing: [
        {
          id: "biotech-ongoing-1",
          title: "CRISPR-Based Therapeutics for Genetic Disorders",
          authors: ["Dr. Anjali Patel", "Vikram Reddy"],
          institution: "NCBS Bangalore",
          date: "2025-02-05",
          abstract: "Investigating novel CRISPR-Cas9 delivery methods for targeted gene therapy applications in treating genetic disorders.",
          tags: ["CRISPR", "Gene Therapy", "Genetic Disorders"],
          mentors: [
            {
              name: "Dr. Anjali Patel",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
              designation: "Head of Genetic Engineering Lab",
              institution: "NCBS Bangalore"
            }
          ],
          researchers: [
            {
              name: "Vikram Reddy",
              image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400",
              designation: "Senior Research Fellow",
              institution: "NCBS Bangalore"
            }
          ]
        }
      ],
      published: [
        {
          id: "biotech-pub-1",
          title: "Synthetic Biology Approaches for Sustainable Biofuel Production",
          authors: ["Dr. Meera Iyer", "Aditya Kumar"],
          institution: "IIT Madras",
          date: "2024-09-20",
          abstract: "This research presents engineered microorganisms with enhanced capabilities for converting agricultural waste into sustainable biofuels.",
          tags: ["Synthetic Biology", "Biofuels", "Sustainability"],
          mentors: [
            {
              name: "Dr. Meera Iyer",
              image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=400",
              designation: "Associate Professor, Biotechnology",
              institution: "IIT Madras"
            }
          ],
          researchers: [
            {
              name: "Aditya Kumar",
              image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400",
              designation: "Postgraduate Researcher",
              institution: "IIT Madras"
            }
          ],
          citations: 56,
          downloads: 1850
        }
      ]
    }
  };

  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId);
    setSelectedResearch(null);
  };

  const handleResearchClick = (research: any) => {
    setSelectedResearch(research);
  };

  const handleBackToFields = () => {
    setSelectedField(null);
    setSelectedResearch(null);
  };

  const handleBackToResearches = () => {
    setSelectedResearch(null);
  };

  const handleMentorClick = (mentorName: string) => {
    // Navigate to the mentor profile page
    navigate('/profile/mentor');
  };

  const handleResearcherClick = (researcherName: string) => {
    // Navigate to the student profile page
    navigate('/profile');
  };

  const renderResearchList = (fieldId: string) => {
    const field = researchFields.find(f => f.id === fieldId);
    const fieldData = researchPapers[fieldId as keyof typeof researchPapers];
    
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <button 
            onClick={handleBackToFields}
            className="mr-4 text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
            Back to Fields
          </button>
          <h2 className="text-3xl font-bold text-gray-900">{field?.title} Research</h2>
        </div>
        
        {/* Ongoing Research */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Research</h3>
          <div className="grid grid-cols-1 gap-6">
            {fieldData.ongoing.map((research) => (
              <div 
                key={research.id} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleResearchClick(research)}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{research.title}</h4>
                <p className="text-gray-600 mb-4">{research.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {research.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {research.mentors.concat(research.researchers).slice(0, 3).map((person, index) => (
                        <img 
                          key={index}
                          src={person.image} 
                          alt={person.name} 
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-gray-600">
                      {research.authors.map((author: string, idx: number) => (
                        <span key={idx}>
                          {idx > 0 && ", "}
                          <span 
                            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Check if author is a mentor or researcher
                              const isMentor = research.mentors.some((m: any) => m.name === author);
                              if (isMentor) {
                                handleMentorClick(author);
                              } else {
                                handleResearcherClick(author);
                              }
                            }}
                          >
                            {author}
                          </span>
                        </span>
                      ))}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(research.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Published Research */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Published Research</h3>
          <div className="grid grid-cols-1 gap-6">
            {fieldData.published.map((research) => (
              <div 
                key={research.id} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleResearchClick(research)}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{research.title}</h4>
                <p className="text-gray-600 mb-4">{research.abstract}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {research.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {research.mentors.concat(research.researchers).slice(0, 3).map((person, index) => (
                        <img 
                          key={index}
                          src={person.image} 
                          alt={person.name} 
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-gray-600">
                      {research.authors.map((author: string, idx: number) => (
                        <span key={idx}>
                          {idx > 0 && ", "}
                          <span 
                            className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                            onClick={(e) => {
                              e.stopPropagation();
                              // Check if author is a mentor or researcher
                              const isMentor = research.mentors.some((m: any) => m.name === author);
                              if (isMentor) {
                                handleMentorClick(author);
                              } else {
                                handleResearcherClick(author);
                              }
                            }}
                          >
                            {author}
                          </span>
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {research.citations} citations
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      {research.downloads} downloads
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResearchDetail = (research: any) => {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <button 
            onClick={handleBackToResearches}
            className="mr-4 text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
            Back to Research List
          </button>
          <h2 className="text-3xl font-bold text-gray-900">Research Details</h2>
        </div>
        
        {/* Mentors & Researchers Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Mentors & Researchers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Mentors</h4>
              {research.mentors.map((mentor: any, index: number) => (
                <div key={index} className="flex items-start mb-6">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h5 className="text-md font-semibold text-gray-900">{mentor.name}</h5>
                    <p className="text-sm text-gray-600">{mentor.designation}</p>
                    <p className="text-sm text-gray-500">{mentor.institution}</p>
                    <button 
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-800"
                      onClick={() => handleMentorClick(mentor.name)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Researchers</h4>
              {research.researchers.map((researcher: any, index: number) => (
                <div key={index} className="flex items-start mb-6">
                  <img 
                    src={researcher.image} 
                    alt={researcher.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h5 className="text-md font-semibold text-gray-900">{researcher.name}</h5>
                    <p className="text-sm text-gray-600">{researcher.designation}</p>
                    <p className="text-sm text-gray-500">{researcher.institution}</p>
                    <button 
                      className="mt-2 text-sm text-indigo-600 hover:text-indigo-800"
                      onClick={() => handleResearcherClick(researcher.name)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Research Document */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{research.title}</h3>
            <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </button>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
              {research.institution} • {new Date(research.date).toLocaleDateString()}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {research.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* AI Summary */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <Brain className="h-6 w-6 text-indigo-600 mr-2" />
              <h4 className="text-lg font-semibold text-indigo-900">AI-Generated Summary</h4>
            </div>
            <p className="text-gray-700">
              This research explores {research.tags.join(", ")} with a focus on innovative approaches to 
              {research.title.toLowerCase().includes("ai") ? " artificial intelligence applications" : 
                research.title.toLowerCase().includes("quantum") ? " quantum computing challenges" : 
                " biotechnology advancements"}. The work demonstrates significant potential for real-world impact in 
              {research.abstract.toLowerCase().includes("medical") || research.abstract.toLowerCase().includes("healthcare") ? " healthcare and medicine" : 
                research.abstract.toLowerCase().includes("environment") || research.abstract.toLowerCase().includes("sustainable") ? " environmental sustainability" : 
                " technological advancement"}. Key contributions include novel methodologies and promising experimental results.
            </p>
          </div>
          
          {/* Full Research Content */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Abstract</h4>
            <p className="text-gray-700 mb-6">{research.abstract}</p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h4>
            <p className="text-gray-700 mb-6">
              The field of {research.tags[0].toLowerCase()} has seen significant advancements in recent years, 
              yet several challenges remain unaddressed. This research aims to bridge critical gaps by introducing 
              novel approaches to {research.title.split(" ").slice(1).join(" ").toLowerCase()}. Our work builds upon 
              previous research while introducing innovative methodologies that advance the state of the art.
            </p>
            
            <div className="text-center text-gray-500 my-8">
              [Full research document continues...]
            </div>
          </div>
        </div>
        
        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Discussion</h3>
          
          {/* Comment Form */}
          <div className="mb-8">
            <textarea 
              placeholder="Add your thoughts or questions about this research..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
              rows={3}
            ></textarea>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
              Post Comment
            </button>
          </div>
          
          {/* Comments */}
          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-start mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400" 
                  alt="User" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h5 className="text-md font-semibold text-gray-900">Dr. Vikram Reddy</h5>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
              </div>
              <p className="text-gray-700">
                Fascinating research! I'm particularly interested in how you addressed the {research.tags[0]} challenges. 
                Have you considered applying this approach to related problems in {research.tags[1]}?
              </p>
              <div className="flex items-center mt-3">
                <button className="text-sm text-gray-500 hover:text-indigo-600 mr-4">Reply</button>
                <button className="text-sm text-gray-500 hover:text-indigo-600">Like</button>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400" 
                  alt="User" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h5 className="text-md font-semibold text-gray-900">Dr. Priya Sharma</h5>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
              <p className="text-gray-700">
                Great work! The methodology is robust and the results are promising. I'd be interested in collaborating 
                on extending this to {research.title.includes("AI") ? "healthcare applications" : 
                  research.title.includes("Quantum") ? "optimization problems" : "sustainable energy solutions"}.
              </p>
              <div className="flex items-center mt-3">
                <button className="text-sm text-gray-500 hover:text-indigo-600 mr-4">Reply</button>
                <button className="text-sm text-gray-500 hover:text-indigo-600">Like</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section - Always visible */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-3xl mx-auto ">
            <h2 className="text-3xl font-bold text-white mb-6">Research Hub</h2>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for research topics, papers, or collaborators..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Conditional Content */}
        {!selectedField && !selectedResearch && (
          <>
            {/* Research Fields */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Fields</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {researchFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div 
                    key={field.id} 
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleFieldClick(field.id)}
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-indigo-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{field.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{field.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {field.papers} Papers
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {field.researchers} Researchers
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Research Form Component */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="max-w-5xl mx-auto ">
                
                <div className="bg-gray-50 p-6 rounded-lg ">
                  <ResearchFormComponent />
                </div>
              </div>
            </div>
          </>
        )}

        {selectedField && !selectedResearch && renderResearchList(selectedField)}
        
        {selectedResearch && renderResearchDetail(selectedResearch)}
      </div>
    </div>
  );
};

export default Research;