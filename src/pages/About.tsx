import React from 'react';
import { Brain, Trophy, Users, Globe, Microscope, Lightbulb, GraduationCap, Rocket, Target, Award, Star, Mail, Github, Linkedin, ChevronRight, CheckCircle, BarChart, PieChart, TrendingUp } from 'lucide-react';

const About = () => {
    const teamMembers = [
        {
            name: "Kawaljeet Singh",
            role: "Gen AI Developer",
            bio: "B-Tech IT 4th Semester Student at USICT, specializing in generative AI and automation. Passionate about creating intelligent systems that can understand and generate human-like content for various applications.",
            skills: ["Python", "NLP", "LLMs", "Chatbots", "Deep Learning", "Prompt Engineering", "GPT Integration"],
            contribution: "Works on generative AI models, chatbot development, and AI-powered tools. Developed the mentorship matching algorithm and research content generator.",
            linkedin: "https://linkedin.com/in/kawaljeetsingh",
            github: "https://github.com/kawaljeetsingh",
            website: "https://kawaljeetsingh.ai",
            image: "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739715858/WhatsApp_Image_2025-02-16_at_19.53.52_6cce8004_vuqcmt.jpg?auto=format&fit=crop&w=400",
            education: "B.Tech in Information Technology, USICT (2023-2027)",
            projects: ["AI Content Generator", "Research Paper Summarizer", "Conversational AI Assistant"],
            achievements: ["Published paper on LLM applications", "Developed GPT-powered educational tool"]
        },
    {
        name: "Harsh Pachauri",
        role: "Web Developer",
        bio: "B-Tech IT 4th Semester Student at USICT, learning web development with a focus on React and modern JavaScript frameworks. Passionate about creating intuitive user interfaces and responsive web applications.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "MongoDB"],
        contribution: "Develops and maintains web applications, focusing on front-end technologies and user experience design. Lead developer for the Research Hub and Profile sections.",
        linkedin: "https://linkedin.com/in/harshpachauri",
        github: "https://github.com/harshpachauri",
        website: "https://harshpachauri.dev",
        image: "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739717984/WhatsApp_Image_2025-02-16_at_20.25.54_a8c21d6a_xcr5yl.jpg?auto=format&fit=crop&w=400",
        education: "B.Tech in Information Technology, USICT (2023-2027)",
        projects: ["E-commerce Platform", "Portfolio Website Generator", "Task Management App"],
        achievements: ["1st Place in College Hackathon 2023", "Open Source Contributor"]
    },
    {
        name: "Sanchit Bhardwaj",
        role: "Web Developer",
        bio: "B-Tech IT 4th Semester Student at USICT, passionate about full-stack development with expertise in both client and server-side technologies. Enjoys solving complex problems and optimizing application performance.",
        skills: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB", "React", "Redux", "Firebase"],
        contribution: "Works on both front-end and back-end development for web applications. Responsible for the Community and Competitions modules of the platform.",
        linkedin: "https://linkedin.com/in/sanchitbhardwaj",
        github: "https://github.com/sanchitbhardwaj",
        website: "https://sanchitbhardwaj.dev",
        image: "https://res.cloudinary.com/dzffxmfsu/image/upload/v1740730342/IMG_4650_nk0ydo.jpg?auto=format&fit=crop&w=400",
        education: "B.Tech in Information Technology, USICT (2023-2027)",
        projects: ["Social Media Dashboard", "Real-time Chat Application", "Event Management System"],
        achievements: ["Web Development Intern at TechStart", "Published article on Modern JavaScript Frameworks"]
    },
    {
        name: "Dushyant Kumar",
        role: "AI/ML Developer",
        bio: "B-Tech IT 4th Semester Student at USICT, exploring AI/ML applications in web technologies. Specializes in developing machine learning models and integrating them into web applications for enhanced functionality.",
        skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Data Science", "Natural Language Processing", "Computer Vision"],
        contribution: "Develops AI/ML models and integrates them into web applications. Created the AI-powered research recommendation system and content analysis tools.",
        linkedin: "https://linkedin.com/in/dushyantkumar",
        github: "https://github.com/dushyantkumar",
        website: "https://dushyantkumar.ai",
        image: "https://res.cloudinary.com/dzffxmfsu/image/upload/v1740730131/IMG_3641_yzrbcj.jpg?auto=format&fit=crop&w=400",
        education: "B.Tech in Information Technology, USICT (2023-2027)",
        projects: ["Sentiment Analysis Tool", "Image Recognition System", "Predictive Analytics Dashboard"],
        achievements: ["ML Research Intern at AI Solutions", "Winner of Data Science Competition 2023"]
    },
    {
        name: "Mayank Jangra",
        role: "Web Developer",
        bio: "B-Tech IT 4th Semester Student at USICT, enthusiastic about front-end and UI/UX design. Has a keen eye for aesthetics and user experience, creating visually appealing and intuitive interfaces for web applications.",
        skills: ["React", "Next.js", "Tailwind CSS", "Figma", "JavaScript", "UI/UX Design", "Animation"],
        contribution: "Designs and develops intuitive user interfaces and front-end applications. Lead designer for the platform's visual identity and responsive layouts.",
        linkedin: "https://linkedin.com/in/mayankjangra",
        github: "https://github.com/mayankjangra",
        website: "https://mayankjangra.dev",
        image: "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739719118/WhatsApp_Image_2025-02-16_at_20.44.31_48be4ab4_u1szp6.jpg?auto=format&fit=crop&w=400",
        education: "B.Tech in Information Technology, USICT (2023-2027)",
        projects: ["Design System Library", "Interactive Dashboard", "E-learning Platform UI"],
        achievements: ["UI/UX Design Competition Winner", "Featured on Behance Spotlight"]
    }
];

  const features = [
    {
      title: "Research Hub",
      description: "Access cutting-edge research papers, collaborate with peers, and contribute to ongoing scientific projects.",
      icon: Brain,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Innovation Competitions",
      description: "Participate in challenges designed to solve real-world problems and showcase your innovative solutions.",
      icon: Trophy,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Mentorship Network",
      description: "Connect with experienced scientists and industry experts who can guide your research journey.",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Scientific Community",
      description: "Join a vibrant community of researchers, students, and innovators passionate about advancing science.",
      icon: Globe,
      color: "bg-green-100 text-green-600"
    }
  ];

const impactMetrics = [
  {
    metric: "32%",
    description: "Increase in online education demand among students from Tier 2 and Tier 3 cities in 2023",
    source: "https://www.edtechreview.in/research/online-education-surges-32-in-tier-2-and-3-cities-set-to-escalate-by-20-in-2024/"
  },
  {
    metric: "1,74,000",
    description: "Number of students mentored under the 'Desh Ke Mentor' program as of January 2022",
    source: "https://en.wikipedia.org/wiki/Desh_Ke_Mentor"
  },
  {
    metric: "45%",
    description: "Increase in enrollments for online full-time courses over the last year",
    source: "https://www.edtechreview.in/research/online-education-surges-32-in-tier-2-and-3-cities-set-to-escalate-by-20-in-2024/"
  },
  {
    metric: "₹500Cr",
    description: "Estimated annual gap in research funding for young scientists in India",
    source: "https://www.outlookbusiness.com/sector/ed-tech/online-education-soars-32-in-tier-2-and-3-cities-expected-to-surge-by-20-in-2024"
  }
];

const marketStats = [
  {
    title: "Untapped Potential",
    value: "23%",
    description: "Percentage of women in Tier 2 and Tier 3 cities enrolling in online courses in 2023",
    source: "https://www.edtechreview.in/research/online-education-surges-32-in-tier-2-and-3-cities-set-to-escalate-by-20-in-2024/"
  },
  {
    title: "Growing Demand",
    value: "32%",
    description: "Percentage of working professionals from smaller towns enrolling in upskilling programs in the past year",
    source: "https://www.outlookbusiness.com/sector/ed-tech/online-education-soars-32-in-tier-2-and-3-cities-expected-to-surge-by-20-in-2024"
  },
  {
    title: "Top States",
    value: "4",
    description: "West Bengal, Bihar, Jharkhand, and Chhattisgarh leading in online education enrollments",
    source: "https://www.thehindubusinessline.com/news/education/online-education-up-32-in-tier-2-and-3-cities-survey/article67604302.ece"
  }
];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Slide 1: Hero/Intro */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1500')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">ScienceHub</h1>
            <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto font-light">
              Democratizing Scientific Research for India's Youth
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-xl font-semibold">Empowering</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-xl font-semibold">Connecting</span>
              </div>
              <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-xl font-semibold">Innovating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: The Problem */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's scientific potential remains largely untapped due to critical barriers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-red-50 rounded-xl p-8 text-center transform transition-transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Access</h3>
              <p className="text-gray-600">
                Only 12% of science students have access to proper research facilities and mentorship
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-8 text-center transform transition-transform hover:scale-105">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disconnected Ecosystem</h3>
              <p className="text-gray-600">
                Lack of collaboration between academia, industry, and student researchers
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 text-center transform transition-transform hover:scale-105">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Untapped Potential</h3>
              <p className="text-gray-600">
                1.5M+ talented young minds with limited opportunities to contribute to scientific advancement
              </p>
            </div>
          </div>
          
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
  {marketStats.map((stat, index) => (
    <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">{stat.title}</h4>
      <p className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</p>
      <p className="text-gray-600 mb-2">{stat.description}</p>
      <a 
        href={stat.source} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-indigo-500 hover:underline"
      >
        Source
      </a>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Slide 3: Our Solution */}
      <div className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ScienceHub: A comprehensive platform connecting young researchers with opportunities, mentors, and resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                  <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h3>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 mr-4">1</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Connect</h4>
                      <p className="text-gray-600">Students join our platform and create research profiles</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 mr-4">2</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Collaborate</h4>
                      <p className="text-gray-600">Match with mentors and peers based on research interests</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 mr-4">3</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Create</h4>
                      <p className="text-gray-600">Access resources, participate in competitions, and conduct research</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 mr-4">4</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Contribute</h4>
                      <p className="text-gray-600">Publish findings and innovations to advance scientific knowledge</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-indigo-600 flex items-center justify-center p-10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
                  alt="Platform visualization" 
                  className="rounded-lg shadow-xl max-h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4: Market Opportunity */}
<div className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Opportunity</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A growing demand for scientific innovation and research talent in India
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        {/* Target Audience */}
        <div className="bg-indigo-50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Target Audience</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">5M+ Science Students</span>
                <p className="text-gray-600">
                  Across universities and colleges in India 
                  <a href="https://www.ugc.ac.in/" target="_blank" className="text-indigo-500 underline ml-1">[UGC Report]</a>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">50,000+ Research Institutions</span>
                <p className="text-gray-600">
                  Looking to enhance research output and collaboration 
                  <a href="https://dst.gov.in/" target="_blank" className="text-indigo-500 underline ml-1">[DST Report]</a>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">10,000+ Industry Partners</span>
                <p className="text-gray-600">
                  Seeking research talent and innovative solutions 
                  <a href="https://www.startupindia.gov.in/" target="_blank" className="text-indigo-500 underline ml-1">[Startup India Report]</a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Growth Potential */}
        <div className="bg-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Potential</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <TrendingUp className="h-6 w-6 text-purple-600 mr-3 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">35% YoY Growth</span>
                <p className="text-gray-600">
                  In research funding allocation in India 
                  <a href="https://prsindia.org/budget/union-budget-2024" target="_blank" className="text-indigo-500 underline ml-1">[Union Budget 2024]</a>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <TrendingUp className="h-6 w-6 text-purple-600 mr-3 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">₹1,500 Cr Market</span>
                <p className="text-gray-600">
                  For research facilitation and scientific collaboration 
                  <a href="https://www.niti.gov.in/" target="_blank" className="text-indigo-500 underline ml-1">[NITI Aayog Report]</a>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <TrendingUp className="h-6 w-6 text-purple-600 mr-3 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">3x Increase</span>
                <p className="text-gray-600">
                  In demand for research-based skills by employers 
                  <a href="https://www.linkedin.com/pulse/linkedin-jobs-report-2024" target="_blank" className="text-indigo-500 underline ml-1">[LinkedIn Jobs Report 2024]</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Now? Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-10 text-white">
        <h3 className="text-2xl font-bold mb-6">Why Now?</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">National Education Policy 2020</h4>
              <p className="text-indigo-100">
                Emphasizes research-based learning and innovation
                <a href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf" target="_blank" className="text-indigo-300 underline ml-1">[NEP 2020]</a>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Digital Infrastructure Growth</h4>
              <p className="text-indigo-100">
                Widespread internet access enabling online collaboration
                <a href="https://www.meity.gov.in/" target="_blank" className="text-indigo-300 underline ml-1">[MeitY Report]</a>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Atmanirbhar Bharat Initiative</h4>
              <p className="text-indigo-100">
                Government push for self-reliance through innovation
                <a href="https://www.india.gov.in/spotlight/aatmanirbhar-bharat-self-reliant-india" target="_blank" className="text-indigo-300 underline ml-1">[Aatmanirbhar Bharat]</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Slide 5: Impact & Traction */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projected Impact</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Transforming India's scientific landscape through democratized research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {impactMetrics.map((item, index) => (
    <div key={index} className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm text-center">
      <p className="text-5xl font-bold mb-4">{item.metric}</p>
      <p className="text-lg text-indigo-100 mb-2">{item.description}</p>
      <a 
        href={item.source} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-indigo-300 hover:underline"
      >
        Source
      </a>
    </div>
  ))}
</div>

          
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Roadmap & Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-indigo-300 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Phase 1: Launch</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Platform development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Initial university partnerships</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Beta testing with 500 students</span>
                  </li>
                </ul>
              </div>
              <div className="border border-indigo-300 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Phase 2: Growth</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Expand to 50+ universities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Onboard 100+ industry mentors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Launch research competitions</span>
                  </li>
                </ul>
              </div>
              <div className="border border-indigo-300 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Phase 3: Scale</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Nationwide presence</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>International partnerships</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                    <span>Research commercialization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 6: Team */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate group of innovators with expertise in technology, AI, and scientific research
            </p>
          </div>
          
          {/* Detailed Team Members Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white"
                  />
                </div>
                <div className="pt-20 p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1 text-center">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-4 text-center">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Education:</h4>
                    <p className="text-gray-600">{member.education}</p>
                  </div>
                  
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Contribution to ScienceHub:</h4>
                    <p className="text-gray-600">{member.contribution}</p>
                  </div>
                  
                  <div className="flex space-x-4 mt-6">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 7: Call to Action */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of a movement that's transforming India's scientific landscape and empowering the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors">
              Partner With Us
            </button>
            <button className="bg-indigo-500 bg-opacity-30 border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-opacity-40 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="mailto:info@sciencehub.org" className="flex items-center text-white hover:text-indigo-200">
                <Mail className="h-6 w-6 mr-2" />
                info@sciencehub.org
              </a>
              <a href="https://www.sciencehub.org" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-indigo-200">
                <Globe className="h-6 w-6 mr-2" />
                www.sciencehub.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;