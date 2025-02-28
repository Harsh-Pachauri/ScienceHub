import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  User, 
  BookOpen, 
  Award, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Link as LinkIcon, 
  Twitter, 
  Linkedin, 
  Users, 
  FileText, 
  Star, 
  Clock, 
  Edit, 
  Settings,
  ChevronDown,
  MessageSquare,
  Briefcase,
  CheckCircle,
  PlusCircle,
  School,
  Building
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('research');
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileType, setProfileType] = useState('student'); // 'student' or 'mentor'

  // Mock user data
  const studentData = {
    name: "Dr. Priya Sharma",
    title: "AI Researcher & Assistant Professor",
    institution: "Indian Institute of Science, Bangalore",
    location: "Bangalore, India",
    email: "priya.sharma@iisc.ac.in",
    website: "priyasharma.ai",
    twitter: "@priya_ai_research",
    linkedin: "priyasharma-ai",
    bio: "AI researcher focused on explainable AI for healthcare applications. Assistant Professor at IISc Bangalore with 8+ years of experience in machine learning and deep learning research.",
    followers: 1250,
    following: 345,
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
    coverImage: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=1500",
    badges: [
      { name: "Research Excellence", icon: Star, color: "bg-purple-100 text-purple-800" },
      { name: "Top Contributor", icon: Award, color: "bg-blue-100 text-blue-800" },
      { name: "AI Expert", icon: BookOpen, color: "bg-green-100 text-green-800" },
      { name: "Mentor", icon: Users, color: "bg-orange-100 text-orange-800" }
    ],
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "Indian Institute of Technology, Delhi",
        year: "2015-2019",
        description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Explainable AI Models for Medical Diagnosis'."
      },
      {
        degree: "M.Tech in Computer Science",
        institution: "Indian Institute of Technology, Bombay",
        year: "2013-2015",
        description: "Focused on Data Science and Algorithms."
      },
      {
        degree: "B.Tech in Computer Science",
        institution: "National Institute of Technology, Trichy",
        year: "2009-2013",
        description: "Graduated with distinction. Specialized in Software Engineering and Data Structures."
      }
    ],
    research: {
      published: [
        {
          title: "Explainable AI for Medical Diagnosis: A Deep Learning Approach",
          journal: "Nature Machine Intelligence",
          year: "2023",
          citations: 78,
          coAuthors: ["Dr. Rajesh Kumar", "Dr. Sarah Chen"],
          tags: ["Explainable AI", "Healthcare", "Deep Learning"]
        },
        {
          title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
          journal: "IEEE Transactions on Medical Imaging",
          year: "2022",
          citations: 45,
          coAuthors: ["Dr. Amit Shah", "Arjun Mehta"],
          tags: ["Federated Learning", "Privacy", "Healthcare"]
        },
        {
          title: "Transformer Models for Medical Image Classification",
          journal: "Medical Image Analysis",
          year: "2021",
          citations: 92,
          coAuthors: ["Neha Patel", "Dr. Vikram Singh"],
          tags: ["Transformers", "Medical Imaging", "Classification"]
        }
      ],
      ongoing: [
        {
          title: "Multimodal Learning for Rare Disease Diagnosis",
          description: "Developing AI models that combine imaging, genomic, and clinical data for improved diagnosis of rare diseases.",
          collaborators: ["IISc Bangalore", "AIIMS Delhi"],
          status: "Data collection phase",
          startDate: "2024-01"
        },
        {
          title: "Reinforcement Learning for Adaptive Treatment Strategies",
          description: "Using reinforcement learning to optimize treatment plans that adapt to patient responses over time.",
          collaborators: ["IISc Bangalore", "Microsoft Research"],
          status: "Algorithm development",
          startDate: "2023-09"
        }
      ]
    },
    events: [
      {
        name: "International Conference on Machine Learning (ICML)",
        role: "Speaker",
        location: "Vienna, Austria",
        date: "July 2024",
        description: "Presented research on explainable AI models for healthcare applications."
      },
      {
        name: "AI for Healthcare Summit",
        role: "Panel Moderator",
        location: "Bangalore, India",
        date: "March 2024",
        description: "Moderated a panel discussion on ethical considerations in healthcare AI."
      },
      {
        name: "Deep Learning Workshop",
        role: "Instructor",
        location: "IISc Bangalore",
        date: "January 2024",
        description: "Conducted a 3-day workshop on advanced deep learning techniques for graduate students."
      },
      {
        name: "National Science Congress",
        role: "Attendee",
        location: "Delhi, India",
        date: "December 2023",
        description: "Participated in discussions on the future of AI research in India."
      }
    ],
    achievements: [
      {
        title: "National Science Foundation Research Grant",
        year: "2024",
        description: "Awarded ₹25,00,000 for research on explainable AI in healthcare."
      },
      {
        title: "Young Scientist Award",
        year: "2023",
        description: "Recognized by the Indian Academy of Sciences for contributions to AI research."
      },
      {
        title: "Best Paper Award",
        year: "2022",
        description: "IEEE International Conference on Machine Learning and Applications."
      },
      {
        title: "Faculty Excellence Award",
        year: "2021",
        description: "Awarded by IISc Bangalore for outstanding research and teaching."
      }
    ]
  };

  // Mock mentor data
  const mentorData = {
    name: "Dr. Rajesh Kumar",
    title: "Professor of Computer Science & AI Research Lead",
    institution: "IIT Bombay",
    location: "Mumbai, India",
    email: "rajesh.kumar@iitb.ac.in",
    website: "rajeshkumar.ai",
    twitter: "@rajesh_ai_research",
    linkedin: "rajeshkumar-ai",
    bio: "Leading AI researcher with 15+ years of experience in machine learning, deep learning, and reinforcement learning. Passionate about mentoring the next generation of AI scientists and fostering innovation in the field.",
    followers: 3250,
    following: 420,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1500",
    badges: [
      { name: "Distinguished Mentor", icon: Users, color: "bg-purple-100 text-purple-800" },
      { name: "Research Pioneer", icon: Award, color: "bg-blue-100 text-blue-800" },
      { name: "AI Visionary", icon: BookOpen, color: "bg-green-100 text-green-800" },
      { name: "Top Educator", icon: GraduationCap, color: "bg-orange-100 text-orange-800" }
    ],
    expertise: ["Reinforcement Learning", "Computer Vision", "Natural Language Processing", "Autonomous Systems"],
    studentsMentored: 78,
    currentDesignation: "Professor and Head of AI Research Center",
    field: "Artificial Intelligence & Machine Learning",
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "Stanford University",
        year: "2005-2009",
        description: "Specialized in Machine Learning and Artificial Intelligence. Thesis on 'Reinforcement Learning for Autonomous Systems'."
      },
      {
        degree: "M.S. in Computer Science",
        institution: "Massachusetts Institute of Technology",
        year: "2003-2005",
        description: "Focused on Algorithms and Computational Theory."
      },
      {
        degree: "B.Tech in Computer Science",
        institution: "Indian Institute of Technology, Delhi",
        year: "1999-2003",
        description: "Graduated with honors. Specialized in Computer Systems and Networks."
      }
    ],
    openProjects: [
      {
        title: "Reinforcement Learning for Autonomous Vehicles",
        description: "Developing advanced reinforcement learning algorithms for improved decision-making in autonomous vehicles navigating complex urban environments.",
        requirements: "Strong background in reinforcement learning, computer vision, and Python programming.",
        positions: 3,
        duration: "1-2 years",
        applicationDeadline: "2025-05-30"
      },
      {
        title: "Multimodal Learning for Human-Robot Interaction",
        description: "Creating AI systems that can understand and respond to human gestures, speech, and facial expressions for more natural human-robot interaction.",
        requirements: "Experience with computer vision, natural language processing, and deep learning frameworks.",
        positions: 2,
        duration: "1 year",
        applicationDeadline: "2025-04-15"
      }
    ],
    ongoingProjects: [
      {
        title: "Explainable AI for Critical Decision Systems",
        description: "Developing methods to make AI systems more transparent and interpretable, especially for applications in healthcare and autonomous driving.",
        students: ["Neha Patel", "Arjun Mehta"],
        startDate: "2024-01",
        expectedCompletion: "2025-12"
      },
      {
        title: "Federated Learning for Privacy-Preserving AI",
        description: "Researching techniques for training AI models across distributed devices while preserving data privacy.",
        students: ["Dr. Priya Sharma", "Vikram Reddy"],
        startDate: "2023-06",
        expectedCompletion: "2025-06"
      }
    ],
    completedProjects: [
      {
        title: "Deep Reinforcement Learning for Game AI",
        description: "Developed advanced AI agents that can master complex games through reinforcement learning techniques.",
        students: ["Aditya Kumar", "Meera Iyer"],
        year: "2022-2023",
        outcomes: "Published in NeurIPS 2023, open-sourced framework used by 15+ research groups"
      },
      {
        title: "Computer Vision for Medical Diagnostics",
        description: "Created deep learning models for automated analysis of medical images to assist in disease diagnosis.",
        students: ["Anjali Patel", "Rahul Verma"],
        year: "2021-2022",
        outcomes: "Technology licensed to 2 healthcare companies, 3 journal publications"
      },
      {
        title: "Natural Language Understanding for Indian Languages",
        description: "Developed NLP models specifically optimized for Indian languages to improve accessibility of AI technologies.",
        students: ["Sanjay Gupta", "Priya Mehta"],
        year: "2020-2021",
        outcomes: "Created open-source library with 5000+ GitHub stars, deployed in 3 government applications"
      }
    ],
    personalResearch: [
      {
        title: "Towards General AI: Integrating Multiple Learning Paradigms",
        journal: "Nature Machine Intelligence",
        year: "2024",
        citations: 112,
        coAuthors: ["Dr. Sarah Chen", "Dr. Amit Shah"],
        tags: ["General AI", "Multi-paradigm Learning", "Neural Architectures"]
      },
      {
        title: "Reinforcement Learning with Human Feedback for Robotic Control",
        journal: "IEEE Transactions on Robotics",
        year: "2023",
        citations: 87,
        coAuthors: ["Dr. Vikram Singh", "Neha Patel"],
        tags: ["Reinforcement Learning", "Robotics", "Human-in-the-loop"]
      },
      {
        title: "Transformer Architectures for Multi-agent Coordination",
        journal: "ICML Proceedings",
        year: "2022",
        citations: 156,
        coAuthors: ["Arjun Mehta", "Dr. Priya Sharma"],
        tags: ["Transformers", "Multi-agent Systems", "Coordination"]
      }
    ],
    achievements: [
      {
        title: "IEEE Technical Achievement Award",
        year: "2024",
        description: "For pioneering contributions to reinforcement learning and autonomous systems."
      },
      {
        title: "National Academy of Sciences Fellowship",
        year: "2023",
        description: "Elected as a Fellow for outstanding contributions to AI research."
      },
      {
        title: "Outstanding Mentor Award",
        year: "2022",
        description: "Recognized by IIT Bombay for excellence in student mentorship and research guidance."
      },
      {
        title: "Best Paper Award",
        year: "2021",
        description: "NeurIPS Conference for work on multi-agent reinforcement learning."
      }
    ]
  };

  // Determine which profile to show based on ID
  useEffect(() => {
    if (id === 'mentor') {
      setProfileType('mentor');
      setActiveTab('research');
    } else {
      setProfileType('student');
      setActiveTab('research');
    }
  }, [id]);

  const user = profileType === 'mentor' ? mentorData : studentData;

  const handleMentorClick = (mentorName) => {
    // In a real app, you would navigate to the specific mentor's profile
    // For this demo, we'll just navigate to a generic mentor profile
    navigate('/profile/mentor');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Photo */}
      <div 
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${user.coverImage})` }}
      >
        
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Profile Image */}
            <div className="md:mr-8 mb-4 md:mb-0 flex-shrink-0">
              <img 
                src={user.profileImage} 
                alt={user.name} 
                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                  <p className="text-xl text-gray-600 mb-2">{user.title}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <GraduationCap className="h-5 w-5 mr-1" />
                    <span>{user.institution}</span>
                  </div>
                </div>
                
                {/* Connect Button */}
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Follow
                  </button>
                  <button className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-100 transition-colors flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Message
                  </button>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-gray-600 mb-4">{user.bio}</p>
              
              {/* Contact & Social */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <LinkIcon className="h-4 w-4 mr-2 text-gray-400" />
                  <a href={`https://${user.website}`} className="hover:text-indigo-600">{user.website}</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Twitter className="h-4 w-4 mr-2 text-gray-400" />
                  <a href={`https://twitter.com/${user.twitter.substring(1)}`} className="hover:text-indigo-600">{user.twitter}</a>
                </div>
              </div>
              
              {/* Followers & Following */}
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-1" />
                  <span className="font-medium text-gray-900">{user.followers}</span>
                  <span className="ml-1 text-gray-500">Followers</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-1" />
                  <span className="font-medium text-gray-900">{user.following}</span>
                  <span className="ml-1 text-gray-500">Following</span>
                </div>
                {profileType === 'mentor' && (
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-gray-400 mr-1" />
                    <span className="font-medium text-gray-900">{user.studentsMentored}</span>
                    <span className="ml-1 text-gray-500">Students Mentored</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Badges Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Badges & Achievements</h2>
          <div className="flex flex-wrap gap-4">
            {user.badges.map((badge, index) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={index} className={`flex items-center px-4 py-2 rounded-lg ${badge.color}`}>
                  <BadgeIcon className="h-5 w-5 mr-2" />
                  <span className="font-medium">{badge.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expertise Section - Only for Mentors */}
        {profileType === 'mentor' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Current Designation & Expertise</h2>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Building className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-800 font-medium">{user.currentDesignation}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-800 font-medium">Field: {user.field}</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {user.expertise.map((area, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-1 flex mb-8 overflow-x-auto">
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'research' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('research')}
          >
            {profileType === 'mentor' ? 'Research Projects' : 'Research & Publications'}
          </button>
          {profileType === 'mentor' && (
            <button 
              className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'openProjects' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
              onClick={() => setActiveTab('openProjects')}
            >
              Open Research Opportunities
            </button>
          )}
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'education' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('education')}
          >
            Education & Background
          </button>
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'events' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('events')}
          >
            {profileType === 'student' ? 'Events & Workshops' : 'Personal Research'}
          </button>
          <button 
            className={`px-4 py-2 rounded-md whitespace-nowrap ${activeTab === 'achievements' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>
        
        {/* Tab Content */}
        {/* Student Research Tab */}
        {activeTab === 'research' && profileType === 'student' && (
          <div className="space-y-8 mb-12">
            {/* Published Research */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Published Research</h2>
                </div>
                <Link to="/research" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  View All
                  <ChevronDown className="h-5 w-5 ml-1 rotate-270" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {studentData.research.published.map((paper, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                    <div className="flex flex-wrap items-center text-gray-600 mb-3">
                      <span className="mr-3">{paper.journal}</span>
                      <span className="mr-3">•</span>
                      <span className="mr-3">{paper.year}</span>
                      <span className="mr-3">•</span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {paper.citations} citations
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="font-medium mr-2">Co-authors:</span>
                      <span>
                        {paper.coAuthors.map((author, idx) => (
                          <span key={idx}>
                            <button 
                              className="text-indigo-600 hover:text-indigo-800"
                              onClick={() => handleMentorClick(author)}
                            >
                              {author}
                            </button>
                            {idx < paper.coAuthors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Ongoing Research */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Ongoing Research</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {studentData.research.ongoing.map((research, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{research.title}</h3>
                    <p className="text-gray-600 mb-4">{research.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Collaborating with: {research.collaborators.join(", ")}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Status: {research.status}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Started: {new Date(research.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                      </div>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mentor Research Projects Tab */}
        {activeTab === 'research' && profileType === 'mentor' && (
          <div className="space-y-8 mb-12">
            {/* Ongoing Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Ongoing Research Projects</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mentorData.ongoingProjects.map((project, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Students: </span>
                        <span className="ml-1">
                          {project.students.map((student, idx) => (
                            <span key={idx}>
                              <button 
                                className="text-indigo-600 hover:text-indigo-800"
                                onClick={() => navigate('/profile')}
                              >
                                {student}
                              </button>
                              {idx < project.students.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Started: {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Expected Completion: {new Date(project.expectedCompletion).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                      </div>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Completed Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Completed Research Projects</h2>
              </div>
              
              <div className="space-y-6">
                {mentorData.completedProjects.map((project, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap items-center text-gray-600 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Students: </span>
                        <span className="ml-1">
                          {project.students.map((student, idx) => (
                            <span key={idx}>
                              <button 
                                className="text-indigo-600 hover:text-indigo-800"
                                onClick={() => navigate('/profile')}
                              >
                                {student}
                              </button>
                              {idx < project.students.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 font-medium">Outcomes:</p>
                      <p className="text-green-700">{project.outcomes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Open Research Opportunities Tab - Only for Mentors */}
        {activeTab === 'openProjects' && profileType === 'mentor' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <PlusCircle className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Open Research Opportunities</h2>
            </div>
            
            <div className="space-y-8">
              {mentorData.openProjects.map((project, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {project.positions} Positions
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
                    <p className="text-gray-600">{project.requirements}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-y-2 mb-6">
                    <div className="flex items-center mr-6 text-gray-600">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      <span>Application Deadline: {new Date(project.applicationDeadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Education & Academic Background</h2>
            </div>
            
            <div className="space-y-8">
              {user.education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-indigo-200 last:border-l-0 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{edu.year}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Events Tab - Student */}
        {activeTab === 'events' && profileType === 'student' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Events & Workshops</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentData.events.map((event, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {event.role}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-y-2">
                    <div className="flex items-center mr-4 text-gray-600">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Personal Research Tab - Mentor */}
        {activeTab === 'events' && profileType === 'mentor' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Personal Research Contributions</h2>
            </div>
            
            <div className="space-y-6">
              {mentorData.personalResearch.map((paper, index) => (
                <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                  <div className="flex flex-wrap items-center text-gray-600 mb-3">
                    <span className="mr-3">{paper.journal}</span>
                    <span className="mr-3">•</span>
                    <span className="mr-3">{paper.year}</span>
                    <span className="mr-3">•</span>
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {paper.citations} citations
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="font-medium mr-2">Co-authors:</span>
                    <span>
                      {paper.coAuthors.map((author, idx) => (
                        <span key={idx}>
                          <button 
                            className="text-indigo-600 hover:text-indigo-800"
                            onClick={() => idx === 0 ? navigate('/profile') : handleMentorClick(author)}
                          >
                            {author}
                          </button>
                          {idx < paper.coAuthors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Achievements & Recognition</h2>
            </div>
            
            <div className="space-y-6">
              {user.achievements.map((achievement, index) => (
                <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Award className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-gray-500 mb-2">{achievement.year}</p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;