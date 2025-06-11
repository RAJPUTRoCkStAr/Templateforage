import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { templates } from '../data/templates';
import { ArrowLeft, Check, Monitor, Tablet, Smartphone, ShoppingCart, Heart } from 'lucide-react';

const TemplateSinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the template with the matching ID
  const template = templates.find((t) => t.id === Number(id));
  
  useEffect(() => {
    // Update page title
    document.title = template ? `${template.name} - TemplateForge` : 'Template Not Found';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [template]);
  
  // If template not found
  if (!template) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-white mb-4">Template Not Found</h1>
          <p className="text-gray-300 mb-6">The template you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/templates')}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors"
          >
            Browse Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <button 
          onClick={() => navigate('/templates')}
          className="flex items-center text-gray-300 hover:text-indigo-400 mb-6 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Templates
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Template image */}
          <motion.div 
            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={template.image} 
              alt={template.name} 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* Template info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold text-white mb-3">{template.name}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {template.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-300 text-lg mb-6">{template.description}</p>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-white">${template.price}</span>
              <span className="ml-2 text-gray-400">One-time payment</span>
            </div>
            
            <div className="flex gap-3 mb-8">
              <button className="flex-grow px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <Heart size={18} />
              </button>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3">Template Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {template.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Tabs */}
        <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden mb-8">
          <div className="flex border-b border-gray-700">
            <button 
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'overview' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'technical' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Details
            </button>
            <button 
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'customization' 
                  ? 'text-indigo-400 border-b-2 border-indigo-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('customization')}
            >
              Customization
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Template Overview</h2>
                <p className="text-gray-300 mb-4">
                  {template.name} is a professionally designed website template perfect for {template.category.toLowerCase()} websites. 
                  With its modern design and comprehensive features, it provides everything you need to create a stunning online presence.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Responsive Design</h3>
                  <div className="flex items-center space-x-8">
                    <div className="flex flex-col items-center">
                      <Monitor size={32} className="text-indigo-400 mb-2" />
                      <span className="text-gray-300">Desktop</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Tablet size={32} className="text-indigo-400 mb-2" />
                      <span className="text-gray-300">Tablet</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Smartphone size={32} className="text-indigo-400 mb-2" />
                      <span className="text-gray-300">Mobile</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-3">Included Pages</h3>
                  <p className="text-gray-300 mb-2">This template includes {template.details.pages} fully designed pages:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Home Page
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      About Us
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Services/Products
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Contact Page
                    </li>
                    {template.category === "E-commerce" && (
                      <>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          Product Listing
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          Product Detail
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          Shopping Cart
                        </li>
                        <li className="flex items-center">
                          <Check size={16} className="text-green-500 mr-2" />
                          Checkout
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'technical' && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Technical Details</h2>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {template.details.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Browser Compatibility</h3>
                  <p className="text-gray-300 mb-2">This template is tested and works perfectly on:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                    {template.details.supportedBrowsers.map((browser, index) => (
                      <li key={index} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        {browser}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-3">Performance Optimized</h3>
                  <p className="text-gray-300">
                    This template is optimized for performance with:
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Optimized assets and images
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Efficient code structure
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      Fast loading times
                    </li>
                    <li className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      SEO-friendly markup
                    </li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'customization' && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Customization Options</h2>
                
                <p className="text-gray-300 mb-4">
                  We offer various customization services to adapt this template to your specific needs.
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Available Customizations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Branding Customization</p>
                        <p className="text-sm text-gray-400">
                          We can adapt the template to match your brand colors, logo, and identity.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Functionality Extensions</p>
                        <p className="text-sm text-gray-400">
                          We can add custom features and functionality to meet your specific requirements.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Content Integration</p>
                        <p className="text-sm text-gray-400">
                          We can populate the template with your content, images, and data.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Third-party Integrations</p>
                        <p className="text-sm text-gray-400">
                          We can integrate with APIs, payment gateways, and other third-party services.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-900/30 rounded-lg p-6 border border-indigo-800/50">
                  <h3 className="text-xl font-medium text-white mb-3">Request Custom Modifications</h3>
                  <p className="text-gray-300 mb-4">
                    Need specific customizations for this template? Our expert developers can help you implement
                    the changes you need to make this template perfect for your business.
                  </p>
                  <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                    Request Customization
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related templates */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates
              .filter(t => t.id !== template.id && t.category === template.category)
              .slice(0, 3)
              .map((relatedTemplate) => (
                <div 
                  key={relatedTemplate.id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all group"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedTemplate.image} 
                      alt={relatedTemplate.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-white">{relatedTemplate.name}</h3>
                      <span className="text-indigo-400 font-bold">${relatedTemplate.price}</span>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/templates/${relatedTemplate.id}`)}
                      className="w-full mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSinglePage;