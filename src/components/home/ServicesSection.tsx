import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Code, Database, LineChart, Cpu, 
  FileSearch, Globe, Bot, ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Code size={32} className="text-indigo-400" />,
      title: "Web Development",
      description: "Custom website development using modern frameworks and responsive design principles."
    },
    {
      icon: <Database size={32} className="text-indigo-400" />,
      title: "Backend Solutions",
      description: "Robust backend services with secure database integration and API development."
    },
    {
      icon: <LineChart size={32} className="text-indigo-400" />,
      title: "Data Analysis",
      description: "Comprehensive data analysis with PowerBI reports and interactive dashboards."
    },
    {
      icon: <FileSearch size={32} className="text-indigo-400" />,
      title: "Data Scraping",
      description: "Efficient data extraction and web scraping services to gather valuable information."
    },
    {
      icon: <Cpu size={32} className="text-indigo-400" />,
      title: "Python Applications",
      description: "Custom Python applications for automation, data processing, and specialized tasks."
    },
    {
      icon: <Bot size={32} className="text-indigo-400" />,
      title: "Computer Vision",
      description: "Advanced OpenCV solutions for image processing and computer vision applications."
    },
    {
      icon: <Globe size={32} className="text-indigo-400" />,
      title: "API Integration",
      description: "Seamless integration with third-party APIs and services to extend functionality."
    },
    {
      icon: <Bot size={32} className="text-indigo-400" />,
      title: "Automation Services",
      description: "Business process automation to increase efficiency and reduce manual tasks."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-3">
            Comprehensive Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of services to help you establish a strong online presence
            and leverage technology for business growth.
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:bg-gray-800/80 group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-5 group-hover:bg-indigo-900/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;