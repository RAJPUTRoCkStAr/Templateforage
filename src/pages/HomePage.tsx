import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedTemplates from '../components/home/FeaturedTemplates';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = 'TemplateForge - Premium Website Templates & Custom Development';
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedTemplates />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;