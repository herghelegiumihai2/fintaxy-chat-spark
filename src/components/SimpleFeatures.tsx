import React, { useEffect, useRef } from 'react';
import { BrainCircuit, Users, BarChart3 } from 'lucide-react';

const SimpleFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gray-50/30">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div 
            ref={addToRefs}
            className="stagger-item bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Asistent AI Voice-Driven
                </h3>
                <p className="text-gray-600 text-sm">
                  Comunici prin voce, primești răspunsuri instant.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            ref={addToRefs}
            className="stagger-item bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Expert Contabil
                </h3>
                <p className="text-gray-600 text-sm">
                  Contabil certificat CECCAR, specializat în domeniul tău. Disponibil oricând.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            ref={addToRefs}
            className="stagger-item bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Informații în Timp Real
                </h3>
                <p className="text-gray-600 text-sm">
                  Accesează situația financiară și indicatorii cheie în afacere – oricând.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFeatures;