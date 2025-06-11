import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Page Not Found - TemplateForge';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="container px-4">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-9xl font-bold text-indigo-500 mb-4 opacity-20">404</div>
            <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
            <p className="text-xl text-gray-300 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors flex items-center"
              >
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
              <Link
                to="/templates"
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors flex items-center"
              >
                <Search size={18} className="mr-2" />
                Browse Templates
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;