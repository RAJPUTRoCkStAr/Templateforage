import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Database, LineChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-transparent to-transparent"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/3 left-20 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-2/3 right-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6">
              Premium Website Templates
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform Your Online Presence with Custom Web Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose from our premium website templates or request custom development. 
            We deliver exceptional digital experiences tailored to your business needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/templates" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2 group"
            >
              Browse Templates
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="px-6 py-3 bg-gray-800/60 hover:bg-gray-700/80 text-white rounded-full font-medium transition-colors border border-gray-700"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
        
        {/* Features boxes */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-900/20">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
              <Code size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Web Development</h3>
            <p className="text-gray-400">Custom website development with modern frameworks and responsive design.</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-900/20">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
              <Database size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Backend Solutions</h3>
            <p className="text-gray-400">Robust backend development with database integration and API services.</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/60 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-900/20">
            <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
              <LineChart size={24} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Data Analysis</h3>
            <p className="text-gray-400">Comprehensive data analysis with PowerBI reports and data visualization.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;