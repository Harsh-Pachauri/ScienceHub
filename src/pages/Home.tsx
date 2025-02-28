import React from 'react';
import { Brain, Trophy, Newspaper, Users } from 'lucide-react';
import QuickLink from '../components/QuickLink';
import SuccessStory from '../components/SuccessStory';

const Home = () => {
  const successStories = [
    {
      image: "https://static4.arrow.com/-/media/arrow/images/820-x-410/0522-utilization-of-ai-image-sensing-in-disease-detection-and-prevention-header-image-820x410.jpg",
      title: "AI-Powered Disease Detection",
      description: "Developed an AI model that can detect early signs of diseases through medical imaging with 95% accuracy.",
      author: "Dr. Priya Sharma"
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800",
      title: "Sustainable Energy Innovation",
      description: "Created a new solar cell technology that increases efficiency by 40% while reducing costs.",
      author: "Rahul Verma"
    },
    {
      image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800",
      title: "Smart Agriculture Solution",
      description: "Innovative IoT system helping farmers increase crop yields while conserving water resources.",
      author: "Anjali Patel"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('https://img.pikbest.com/backgrounds/20190819/research-medical-gene-cell-background_2754714.jpg!bw700')] bg-cover bg-center opacity-40"
        ></div>

        {/* Content Section */}
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering India's Youth for Global Leadership in Science & Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join a community of innovators, researchers, and changemakers
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Join us?</h2>

        <div className="flex flex-col gap-6">
          <QuickLink
            imageSrc="https://static.vecteezy.com/system/resources/previews/022/006/638/non_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg"
            title="AI Research Hub"
            description="Explore cutting-edge AI research and collaborate with experts"
            href="/research"
            imagePosition="left"
            bgColor="bg-purple-300"
          />
          <QuickLink
            imageSrc="https://static.vecteezy.com/system/resources/previews/022/006/638/non_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg"
            title="Competitions"
            description="Participate in challenges and showcase your innovations"
            href="/competitions"
            imagePosition="right"
            bgColor="bg-blue-300"
          />
          <QuickLink
            imageSrc="https://static.vecteezy.com/system/resources/previews/022/006/638/non_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg"
            title="Latest News"
            description="Stay updated with breakthrough discoveries and opportunities"
            href="/news"
            imagePosition="left"
            bgColor="bg-purple-300"
          />
          <QuickLink
            imageSrc="https://static.vecteezy.com/system/resources/previews/022/006/638/non_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg"
            title="Community"
            description="Connect with fellow researchers and innovators"
            href="/community"
            imagePosition="right"
            bgColor="bg-blue-300"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Home;