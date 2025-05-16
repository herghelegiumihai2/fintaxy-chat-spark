
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const SecuritySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return <section className="py-20 px-6 bg-fintaxy-navy text-white" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl section-appear">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Securitate avansată
          </h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">Folosim securitate de nivel bancar, stocăm datele la un furnizor certificat SOC2, realizăm backup la fiecare oră și respectăm toate standardele de securitate. </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm flex items-center">
              <ShieldCheck className="mr-4 text-blue-300 w-8 h-8" />
              <span className="text-lg text-blue-50">Conformitate GDPR completă</span>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm flex items-center">
              <Lock className="mr-4 text-blue-300 w-8 h-8" />
              <span className="text-lg text-blue-50">Criptare end-to-end</span>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img src="/lovable-uploads/1ab509ee-7b4f-4bb9-bc45-1ac04db199f3.png" alt="Certificări de securitate" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};

export default SecuritySection;
