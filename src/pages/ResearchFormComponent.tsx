import React, { useState } from 'react';
import { Search, FileText, AlertCircle, Loader } from 'lucide-react';

interface ApiResponse {
  title: string;
  content: string;
  author: string;
  date: string;
}

const ResearchFormComponent = () => {
  const [category, setCategory] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  // Categories and their corresponding topics
  const categories = [
    {
      name: 'AI/ML',
      topics: ['AI for Medical Imaging', 'Neural Networks', 'Natural Language Processing', 'Reinforcement Learning'],
    },
    {
      name: 'Quantum Computing',
      topics: ['Quantum Algorithms', 'Quantum Error Correction', 'Quantum Hardware'],
    },
    {
      name: 'Biotechnology',
      topics: ['Genetic Engineering', 'CRISPR Technology', 'Bioinformatics'],
    },
    {
      name: 'Renewable Energy',
      topics: ['Solar Energy', 'Wind Energy', 'Energy Storage'],
    },
  ];

  // Get topics based on selected category
  const getTopics = () => {
    const selectedCategory = categories.find((c) => c.name === category);
    return selectedCategory ? selectedCategory.topics : [];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category || !topic) {
      setError('Please select both a category and a topic');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      // Simulate API call with mock data
      setTimeout(() => {
        setResponse({
          title: `Research Papers on ${topic} in ${category}`,
          content: `Recent advancements in ${topic} have shown promising results in the field of ${category}. 
          
          Researchers at leading institutions have developed novel approaches that address key challenges in this domain. These include improved algorithms, more efficient methodologies, and innovative applications.
          
          Several studies published in the last year demonstrate significant progress in both theoretical foundations and practical implementations. For example, a team at IIT Bombay recently demonstrated a 40% improvement in efficiency for ${topic.toLowerCase()} systems, while researchers at IISc Bangalore have developed a new framework that reduces computational complexity by an order of magnitude.
          
          Future directions in this field include exploring hybrid approaches, scaling current solutions to real-world problems, and addressing ethical considerations that arise from widespread adoption of these technologies.`,
          author: 'ScienceHub Research Team',
          date: new Date().toISOString().split('T')[0],
        });
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to fetch research data. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Research Category*
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setTopic(''); // Reset topic when category changes
              }}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
              Research Topic*
            </label>
            <select
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              disabled={!category}
              required
            >
              <option value="">Select a Topic</option>
              {getTopics().map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="h-5 w-5 mr-2 animate-spin" />
                Fetching Data...
              </>
            ) : (
              <>
                <Search className="h-5 w-5 mr-2" />
                Get Research Content
              </>
            )}
          </button>
        </div>
      </form>

      {/* Results Section */}
      {response && (
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Research Findings</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{response.title}</h3>
            <div className="flex items-center text-gray-500 mb-4">
              <span>{response.author}</span>
              <span className="mx-2">•</span>
              <span>{response.date}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            {response.content.split('\n').map((line, index) => (
              <p key={index} className="mb-4 text-gray-700">{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchFormComponent;