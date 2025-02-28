import React from 'react';

interface QuickLinkProps {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
  imagePosition?: 'left' | 'right'; // Image placement option
  bgColor?: string; // Background color
}

const QuickLink: React.FC<QuickLinkProps> = ({ imageSrc, title, description, href, imagePosition = 'left', bgColor = 'bg-white' }) => {
  return (
    <div 
      className={`flex ${imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-8 min-h-[300px] ${bgColor}`}
    >
      {/* Image Section */}
      <img src={imageSrc} alt={title} className="w-1/3 h-56 object-cover rounded-lg" />

      {/* Text Section */}
      <div className="w-2/3 px-8">
        <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
        <p className="text-xl text-gray-700 mt-4">{description}</p>

        {/* Button */}
        <a 
          href={href} 
          className="mt-8 inline-block bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default QuickLink;
