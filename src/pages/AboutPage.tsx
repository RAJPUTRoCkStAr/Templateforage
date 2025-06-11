import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, Globe, Zap, Award, Check } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us - TemplateForge';
  }, []);

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
              About TemplateForge
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We are passionate about creating exceptional digital experiences that help businesses thrive online.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                TemplateForge was founded with a vision to make professional web development accessible to businesses of all sizes. Our team of experienced developers, designers, and data specialists work together to create solutions that help our clients succeed in the digital landscape.
              </p>
              <p className="text-gray-300">
                Since our inception, we've helped numerous businesses establish their online presence with beautiful, functional websites and custom solutions tailored to their specific needs.
              </p>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="bg-indigo-900/30 border border-indigo-800/50 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team collaborating" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600/30 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300">
              These core principles guide everything we do and help us deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Users size={40} className="text-indigo-400" />,
                title: "Client-Focused",
                description: "We prioritize understanding our clients' needs and delivering solutions that exceed their expectations."
              },
              {
                icon: <Award size={40} className="text-indigo-400" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from design and development to customer service."
              },
              {
                icon: <Heart size={40} className="text-indigo-400" />,
                title: "Passion",
                description: "We are passionate about creating beautiful, functional websites and solving complex problems."
              },
              {
                icon: <Globe size={40} className="text-indigo-400" />,
                title: "Innovation",
                description: "We stay at the forefront of technology to deliver cutting-edge solutions to our clients."
              },
              {
                icon: <Zap size={40} className="text-indigo-400" />,
                title: "Efficiency",
                description: "We work efficiently to deliver high-quality solutions within agreed timelines and budgets."
              },
              {
                icon: <Check size={40} className="text-indigo-400" />,
                title: "Reliability",
                description: "We are committed to being reliable partners for our clients, delivering on our promises."
              }
            ].map((value, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-300">
            Meet the talented professionals behind TemplateForge who work tirelessly to create exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Sarah Williams",
              role: "Lead Designer",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Michael Chen",
              role: "Senior Developer",
              image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Emily Rodriguez",
              role: "Data Specialist",
              image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
            }
          ].map((member, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-indigo-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-400">{member.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;