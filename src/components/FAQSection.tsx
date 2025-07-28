
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 md:p-16 text-center section-appear">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
            Accounting doesn't have to be understood.<br />
            Delegate it to Fintaxy!
          </h2>
          
          <Button 
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all px-8 py-6 text-lg font-medium mb-8"
            onClick={() => {
              const event = new CustomEvent('openApplicationModal');
              window.dispatchEvent(event);
            }}
          >
            Începe Gratuit
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-white">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Fără Card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Transfer Simplu</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Salvează timp și bani</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
