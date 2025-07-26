
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Fintaxy a transformat complet departamentul nostru financiar. Economisim peste 20 de ore pe săptămână cu procesarea documentelor și reconcilierea automată.",
    name: "Alexandru Popescu",
    role: "CFO, TechSolutions SRL",
    rating: 5
  },
  {
    id: 2,
    quote: "Ca firmă mică de contabilitate, Fintaxy ne-a permis să ne extindem fără a angaja personal suplimentar. Agenții AI preiau munca repetitivă, iar noi ne putem concentra pe consilierea clienților.",
    name: "Maria Ionescu",
    role: "Fondator, Contabilitate Modernă",
    rating: 5
  },
  {
    id: 3,
    quote: "Am fost sceptic inițial despre implementarea unei soluții AI, dar Fintaxy m-a surprins prin acuratețea și eficiența sa. Integrarea cu sistemele noastre existente a fost impecabilă.",
    name: "Radu Stanciu",
    role: "Director Financiar, Construct Plus",
    rating: 4
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  
  // Add items to the refs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    itemsRef.current.forEach(item => {
      if (item) {
        itemsObserver.observe(item);
      }
    });
    
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      
      itemsRef.current.forEach(item => {
        if (item) {
          itemsObserver.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div 
          className="text-center mb-16 section-appear"
          ref={sectionRef}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-fintaxy-light text-fintaxy-navy text-sm font-medium rounded-full">
              Ce spun clienții
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy max-w-3xl mx-auto mb-6">
            Ce spun clienții despre noi
          </h2>
          <p className="text-fintaxy-muted max-w-2xl mx-auto">
            Descoperiți cum Fintaxy transformă operațiunile financiare ale companiilor din diverse industrii.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="feature-card bg-white rounded-2xl shadow-sm border border-slate-100 p-8 stagger-item"
              ref={addToRefs}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-fintaxy-navy text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-fintaxy-navy">{testimonial.name}</h4>
                <p className="text-sm text-fintaxy-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
