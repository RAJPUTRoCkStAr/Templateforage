import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Database, LineChart, Cpu, 
  FileSearch, Globe, Bot, ArrowRight, 
  ChevronRight, CheckCircle2 
} from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Our Services - TemplateForge';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Code size={40} className="text-indigo-400" />,
      title: "Web Development",
      description: "Custom website development using modern frameworks and responsive design principles.",
      features: [
        "Responsive design for all devices",
        "SEO-friendly code structure",
        "Modern UI/UX implementation",
        "Performance optimization",
        "Content management systems"
      ]
    },
    {
      icon: <Database size={40} className="text-indigo-400" />,
      title: "Backend Solutions",
      description: "Robust backend services with secure database integration and API development.",
      features: [
        "Scalable server architecture",
        "Secure database design",
        "API development and integration",
        "Authentication systems",
        "Cloud hosting solutions"
      ]
    },
    {
      icon: <LineChart size={40} className="text-indigo-400" />,
      title: "Data Analysis",
      description: "Comprehensive data analysis with PowerBI reports and interactive dashboards.",
      features: [
        "Data cleaning and preparation",
        "Interactive PowerBI dashboards",
        "Custom reporting solutions",
        "Data visualization",
        "Insights and recommendations"
      ]
    },
    {
      icon: <FileSearch size={40} className="text-indigo-400" />,
      title: "Data Scraping",
      description: "Efficient data extraction and web scraping services to gather valuable information.",
      features: [
        "Automated web scraping",
        "Data extraction from various sources",
        "Data formatting and normalization",
        "Regular scraping schedules",
        "Custom scraping solutions"
      ]
    },
    {
      icon: <Cpu size={40} className="text-indigo-400" />,
      title: "Python Applications",
      description: "Custom Python applications for automation, data processing, and specialized tasks.",
      features: [
        "Process automation",
        "Data processing pipelines",
        "Machine learning applications",
        "Custom software development",
        "Integration with existing systems"
      ]
    },
    {
      icon: <Bot size={40} className="text-indigo-400" />,
      title: "Computer Vision",
      description: "Advanced OpenCV solutions for image processing and computer vision applications.",
      features: [
        "Image recognition",
        "Object detection",
        "Face recognition",
        "Video analysis",
        "Custom computer vision solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 bg-gradient-to-b from-indigo-900 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Comprehensive Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From web development to data analysis, we offer a wide range of services 
              to help you establish a strong online presence and leverage technology for business growth.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-medium text-white mb-3">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 size={18} className="text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    Request this service <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Process Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300">
              We follow a systematic approach to deliver high-quality solutions that meet your specific requirements.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  number: "01",
                  title: "Requirements Analysis",
                  description: "We start by understanding your specific needs and objectives through detailed discussions."
                },
                {
                  number: "02",
                  title: "Proposal & Planning",
                  description: "We create a comprehensive proposal outlining the scope, timeline, and cost of the project."
                },
                {
                  number: "03",
                  title: "Design & Development",
                  description: "Our team designs and develops the solution according to the agreed specifications."
                },
                {
                  number: "04",
                  title: "Testing & Deployment",
                  description: "We rigorously test the solution before deploying it to ensure everything works perfectly."
                }
              ].map((step, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <span className="text-4xl font-bold text-indigo-400 opacity-70 mr-4">{step.number}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Contact us today to discuss your project requirements and how we can help you achieve your goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-indigo-900 rounded-full font-medium transition-colors"
            >
              Contact Us <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;