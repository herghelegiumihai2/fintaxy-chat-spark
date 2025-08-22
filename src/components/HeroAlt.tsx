import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, FileSearch, BarChart3 } from "lucide-react";
import FeatureCard from './FeatureCard';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
interface HeroAltProps {
  userType: 'business' | 'freelancer' | 'accounting';
}
const HeroAlt = ({
  userType
}: HeroAltProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollToContactSection = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToPricingSection = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Set up auto rotation for carousel
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 3);
      if (carouselRef.current) {
        const items = carouselRef.current.querySelectorAll('.carousel-item');
        if (items.length > 0) {
          const nextIndex = (activeSlide + 1) % items.length;
          // Use scrollLeft instead of scrollIntoView to prevent page navigation
          if (carouselRef.current.parentElement) {
            const scrollAmount = nextIndex * (carouselRef.current.parentElement.offsetWidth || 0);
            carouselRef.current.parentElement.scrollLeft = scrollAmount;
          }
        }
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      clearInterval(interval);
    };
  }, [activeSlide]);
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll('.carousel-item');
      if (items.length > 0 && items[index]) {
        // Use scrollLeft to avoid navigation
        if (carouselRef.current.parentElement) {
          const scrollAmount = index * (carouselRef.current.parentElement.offsetWidth || 0);
          carouselRef.current.parentElement.scrollLeft = scrollAmount;
        }
      }
    }
  };
  return (
    <section ref={heroRef} className="pt-20 pb-16 px-6 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 -left-28 w-56 h-56 rounded-full bg-blue-100/20 blur-[80px]"></div>
      <div className="absolute bottom-0 -right-28 w-72 h-72 rounded-full bg-blue-100/30 blur-[100px]"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Side - Content Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-gray-900/5 border border-gray-100">
            {/* Badge/Chip */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                Contabil, Aplicație + AI
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Contabilitate și AI pentru companiile Române.
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              Automatizează cele mai plictisitoare sarcini — care chiar și contabilii le urăsc.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-300" 
                size="lg"
                onClick={() => {
                  const event = new CustomEvent('openApplicationModal');
                  window.dispatchEvent(event);
                }}
              >
                Începe Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                className="px-8 py-6 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-semibold rounded-lg transition-all duration-300" 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://cal.com/andrei-coiciu-lokief/30min?overlayCalendar=true', '_blank')}
              >
                Programează Consultare
              </Button>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/3810cc9e-9286-40a1-8a9b-f2c21b2428df.png" 
                alt="Business professional with documents - Fintaxy automation" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroAlt;