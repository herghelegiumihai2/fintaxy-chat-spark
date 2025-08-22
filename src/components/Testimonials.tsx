import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
const testimonials = [{
  id: 1,
  quote: "Primesc facturi intracomunitare în toate formatele posibile. Contabilul îmi cerea bani în plus pentru procesarea lor manuală. Cu Fintaxy nu mai depind de nimeni. AI-ul citește automat orice format – PDF, email, etc. – și extrage corect datele. Totul ajunge direct în contabilitate, fără bătăi de cap.",
  name: "Radu-Corneliu Marin",
  role: "Co-founder, Timeworx.io",
  rating: 5
}, {
  id: 2,
  quote: "Emiterea facturilor în e-Factura și reconcilierea cu încasările era o bătaie de cap. Avem multe vânzări și manual nu mai funcționa. Cu Fintaxy, totul e automat: factura se generează, se semnează digital și se trimite direct în SPV. Primesc încasările și pot trimite reminders printr-un prompt dacă ceva întârzie. Economisim timp și nervi. Zero erori.",
  name: "Daniel Trohin",
  role: "Co-Founder & CEO, Renter",
  rating: 5
}, {
  id: 3,
  quote: "Fintaxy m-a scăpat de haosul conturilor și platformelor multiple. Am centralizat toate încasările din Shopify, Stripe, PayPal și conturi bancare într-un singur loc. Economisesc peste o oră pe săptămână doar din logatul și extragerea datelor. Acum am control complet și vizibilitate în timp real asupra banilor.",
  name: "Valeriu Guțan",
  role: "Fondator, BananaShop",
  rating: 5
}];
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
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    const itemsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });
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
  return <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 section-appear" ref={sectionRef}>
          <div className="inline-block mb-4">
            
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy max-w-3xl mx-auto mb-6">
            Ce spun clienții despre noi
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={testimonial.id} className="feature-card bg-white rounded-2xl shadow-sm border border-slate-100 p-8 stagger-item" ref={addToRefs} style={{
          transitionDelay: `${0.1 * index}s`
        }}>
              <div className="flex mb-4">
                {Array.from({
              length: 5
            }).map((_, i) => <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
              </div>
              
              <blockquote className="text-fintaxy-navy text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <h4 className="font-semibold text-fintaxy-navy">{testimonial.name}</h4>
                <p className="text-sm text-fintaxy-muted">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;