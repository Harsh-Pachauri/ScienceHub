import React, { useState } from 'react';
import { Search, FileText, AlertCircle, Loader } from 'lucide-react';

interface ApiResponse {
  title: string;
  content: string;
  author: string;
  date: string;
}

const ResearchForm = () => {
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
      const apiUrl = 'https://researchapi-zy6v.onrender.com/get_research';

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, topic }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch research papers. Please try again later.');
      }

      const data = await res.json();

      setResponse({
        title: `Research Papers on ${topic} in ${category}`,
        content: data.research_papers,
        author: 'Multiple Researchers',
        date: new Date().toISOString().split('T')[0],
      });
    } catch (err) {
      setError('Failed to fetch research data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Research Content Explorer</h1>
          <p className="text-xl text-gray-600">
            Select a research category and topic to access the latest findings and insights
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Search className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Find Research Content</h2>
          </div>

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
        </div>

        {/* Results Section */}
        {response && (
          <div className="bg-white rounded-xl shadow-lg p-8">
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
    </div>
  );
};

export default ResearchForm;
