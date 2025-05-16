
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroAlt from '../components/HeroAlt';
import ModuleSection from '../components/ModuleSection';
import SecuritySection from '../components/SecuritySection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';

const Business = () => {
  useEffect(() => {
    document.title = "Fintaxy - Proprietari de afaceri";
    
    // Initialize intersection observers for scroll animations
    const observers: IntersectionObserver[] = [];
    
    // Observer for general section animations
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    // Add all sections with animation class
    document.querySelectorAll('.section-appear').forEach(section => {
      sectionObserver.observe(section);
    });
    
    observers.push(sectionObserver);
    
    // Observer for staggered animations
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    // Add all staggered items
    document.querySelectorAll('.stagger-item').forEach(item => {
      staggerObserver.observe(item);
    });
    
    observers.push(staggerObserver);
    
    // Cleanup function
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroAlt userType="business" />
      
      <ModuleSection />
      <SecuritySection />
      <div id="despre-noi">
        <Testimonials />
      </div>
      <FAQSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Business;
