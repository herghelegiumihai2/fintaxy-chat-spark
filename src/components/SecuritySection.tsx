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
  return <section className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-screen-xl">
        <div className="w-full mx-auto max-w-[92vw] 2xl:max-w-[1800px]">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden section-appear">
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-blue-800/90 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SecuritySection;