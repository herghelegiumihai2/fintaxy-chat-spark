import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, FileSearch, BarChart3 } from "lucide-react";
import FeatureCard from './FeatureCard';
interface HeroAltProps {
  userType: 'business' | 'freelancer';
}
const HeroAlt = ({
  userType
}: HeroAltProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
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
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  return <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden py-[10px]">
      {/* Decorative elements - circles */}
      <div className="absolute top-40 -left-28 w-56 h-56 rounded-full bg-blue-100/30 blur-[80px] animate-float" style={{
      animationDelay: '-2s'
    }}></div>
      <div className="absolute bottom-0 -right-28 w-72 h-72 rounded-full bg-blue-100/40 blur-[100px] animate-float" style={{
      animationDelay: '-1s'
    }}></div>
      
      <div className="container mx-auto max-w-7xl py-0">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 section-appear py-0">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-fintaxy-light text-fintaxy-navy text-sm font-medium rounded-full">Contabil și Aplicatie + Agent AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[55px] font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy max-w-4xl mb-6">Contabilitate și management 
cu vocea ta.</h1>
          
          <p className="text-fintaxy-muted text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">Spui ce vrei, Fintaxy execută. Contabilitate, facturi și gestiune – toate cu vocea.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white cta-button group" size="lg" onClick={() => window.open('https://calendly.com/denis-bradu/denis-bradu-clone?month=2024-12', '_blank')}>
              Începe Acum
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="w-full sm:w-auto px-8 py-6 bg-transparent border border-fintaxy-navy/20 text-fintaxy-navy hover:bg-fintaxy-light transition-colors" variant="outline" size="lg" onClick={() => window.open('https://calendly.com/denis-bradu/denis-bradu-clone?month=2024-12', '_blank')}>
              Vreau să fiu sunat
            </Button>
          </div>
          
          <p className="text-fintaxy-muted text-sm mt-4 italic">Încercare gratuită de 30 zile.</p>
        </div>
        
        {/* Feature Cards moved here from Freelancers page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <FeatureCard icon={<BrainCircuit className="h-6 w-6 text-fintaxy-blue" />} title="Asistent AI Voice-Driven" description="Comunici prin voce, primești răspunsuri instant." />
          <FeatureCard icon={<FileSearch className="h-6 w-6 text-fintaxy-blue" />} title="Expert Contabil" description="Contabil certificat CECCAR, specializat în domeniul tău. Disponibil oricând." />
          <FeatureCard icon={<BarChart3 className="h-6 w-6 text-fintaxy-blue" />} title="Informații în Timp Real" description="Accesează situația financiară și indicatorii cheie in afacere - oricând." />
        </div>
      </div>
    </section>;
};
export default HeroAlt;