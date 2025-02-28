import React from 'react';

interface SuccessStoryProps {
  image: string;
  title: string;
  description: string;
  author: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ image, title, description, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500">By {author}</p>
      </div>
    </div>
  );
};

export default SuccessStory;