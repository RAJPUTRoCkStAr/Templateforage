import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';
import { templates } from '../../data/templates';

const FeaturedTemplates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // Only show 6 featured templates
  const featuredTemplates = templates.filter(template => template.featured).slice(0, 6);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-3">
            Premium Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Templates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our handpicked collection of premium website templates, 
            designed for various industries and use cases.
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredTemplates.map((template) => (
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
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            to="/templates"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
          >
            View All Templates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;