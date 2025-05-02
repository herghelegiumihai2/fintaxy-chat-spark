
import React, { useEffect, useRef } from 'react';
import { 
  FileText, RefreshCcw, BarChart3, 
  BrainCircuit, Lock, Zap, CheckCircle 
} from 'lucide-react';

const Features = () => {
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
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div 
          className="text-center mb-16 section-appear"
          ref={sectionRef}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-fintaxy-light text-fintaxy-navy text-sm font-medium rounded-full">
              Capabilități
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy max-w-3xl mx-auto mb-6">
            Ce poate face un Agent AI pentru finanțe?
          </h2>
          <p className="text-fintaxy-muted max-w-2xl mx-auto">
            Agenții noștri AI sunt concepuți pentru a prelua sarcinile repetitive și a oferi suport echipelor de contabilitate, permițându-le să se concentreze pe activități cu valoare adăugată mai mare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div 
            className="feature-card glass-card p-8 rounded-2xl stagger-item"
            ref={addToRefs}
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center">
              <FileText className="text-fintaxy-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-3">Procesare documente</h3>
            <p className="text-fintaxy-muted">
              Extrage automat informații relevante din facturi, chitanțe și alte documente financiare cu precizie ridicată.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Recunoaștere cu precizie de 98%</span>
              </li>
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Procesare documente în multiple limbi</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div 
            className="feature-card glass-card p-8 rounded-2xl stagger-item"
            ref={addToRefs}
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center">
              <RefreshCcw className="text-fintaxy-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-3">Reconciliere automată</h3>
            <p className="text-fintaxy-muted">
              Realizează automat potrivirea tranzacțiilor și reconcilierea banilor între diverse conturi și sisteme.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Reducere a timpului cu 80%</span>
              </li>
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Reconciliere în timp real</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div 
            className="feature-card glass-card p-8 rounded-2xl stagger-item"
            ref={addToRefs}
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center">
              <BarChart3 className="text-fintaxy-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-3">Rapoarte analitice</h3>
            <p className="text-fintaxy-muted">
              Generează rapoarte personalizate și analize financiare bazate pe datele disponibile în sistem.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Șabloane personalizabile</span>
              </li>
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Export în multiple formate</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 4 - UPDATED DESCRIPTION */}
          <div 
            className="feature-card glass-card p-8 rounded-2xl stagger-item"
            ref={addToRefs}
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center">
              <BrainCircuit className="text-fintaxy-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-3">Asistent AI Voice-Driven</h3>
            <p className="text-fintaxy-muted">
              Comunici prin voce, primești răspunsuri instant.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Înțelegere contextuală avansată</span>
              </li>
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Răspunsuri rapide și precise</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 5 - UPDATED DESCRIPTION */}
          <div 
            className="feature-card glass-card p-8 rounded-2xl stagger-item"
            ref={addToRefs}
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center">
              <Lock className="text-fintaxy-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-3">Expert Contabil</h3>
            <p className="text-fintaxy-muted">
              Contabil certificat CECCAR, specializat în domeniul tău. Disponibil oricând.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Conformitate GDPR completă</span>
              </li>
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Criptare end-to-end</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 6 - UPDATED DESCRIPTION */}
          <div 
            className="feature-card glass-card p-8 rounded-2xl stagger-item"
            ref={addToRefs}
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-100 flex items-center justify-center">
              <Zap className="text-fintaxy-blue w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-3">Informații în Timp Real</h3>
            <p className="text-fintaxy-muted">
              Accesează situația financiară și indicatorii cheie in afacere - oricând.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Integrare fără efort</span>
              </li>
              <li className="flex items-center text-sm text-fintaxy-muted">
                <CheckCircle className="text-fintaxy-blue w-4 h-4 mr-2 flex-shrink-0" />
                <span>Sincronizare în timp real</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
