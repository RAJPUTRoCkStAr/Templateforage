import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, ShoppingCart } from 'lucide-react';
import { templates, Template } from '../data/templates';

const TemplatesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  
  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'Business', label: 'Business' },
    { value: 'Personal', label: 'Personal' },
    { value: 'Blog', label: 'Blog' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Education', label: 'Education' },
    { value: 'Food & Dining', label: 'Food & Dining' },
    { value: 'Health & Wellness', label: 'Health & Wellness' },
  ];

  // Update filtered templates when search or category changes
  useEffect(() => {
    const filtered = templates.filter((template) => {
      const matchesSearch = 
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || template.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredTemplates(filtered);
  }, [searchQuery, selectedCategory]);
  
  useEffect(() => {
    // Update page title
    document.title = 'Browse Templates - TemplateForge';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Browse Our Premium Templates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover professionally designed website templates for various industries and use cases.
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category filter */}
            <div className="relative md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Templates grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <motion.div 
                key={template.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                variants={itemVariants}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Link 
                      to={`/templates/${template.id}`} 
                      className="bg-white hover:bg-gray-100 text-gray-900 rounded-full p-2 flex items-center"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </Link>
                    <button 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 flex items-center"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-white text-lg">{template.name}</h3>
                    <span className="text-indigo-400 font-bold">${template.price}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{template.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {template.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {template.tags.length > 2 && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          +{template.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      to={`/templates/${template.id}`}
                      className="text-sm text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center">
              <Search size={36} className="mx-auto text-gray-500 mb-3" />
              <h3 className="text-xl font-medium text-white mb-2">No templates found</h3>
              <p className="text-gray-400 mb-4">
                We couldn't find any templates matching your search criteria. Try adjusting your filters or search query.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TemplatesPage;