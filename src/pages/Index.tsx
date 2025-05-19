
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import SecuritySection from '../components/SecuritySection';

const Index = () => {
  useEffect(() => {
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
      <Hero />
      <Features />
      <Testimonials />
      <SecuritySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
