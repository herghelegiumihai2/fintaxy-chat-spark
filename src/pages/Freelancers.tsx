import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroAlt from '../components/HeroAlt';
import ModuleSection from '../components/ModuleSection';
import SecuritySection from '../components/SecuritySection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';
import FeatureCard from '../components/FeatureCard';
import { BrainCircuit, FileSearch, BarChart3 } from 'lucide-react';
const Freelancers = () => {
  useEffect(() => {
    document.title = "Fintaxy - Freelanceri";

    // Initialize intersection observers for scroll animations
    const observers: IntersectionObserver[] = [];

    // Observer for general section animations
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    // Add all sections with animation class
    document.querySelectorAll('.section-appear').forEach(section => {
      sectionObserver.observe(section);
    });
    observers.push(sectionObserver);

    // Observer for staggered animations
    const staggerObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

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
  return <div className="min-h-screen bg-white">
      <Navbar />
      <HeroAlt userType="freelancer" />
      
      {/* Feature Cards Section */}
      <section className="px-6 py-0">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon={<BrainCircuit className="h-6 w-6 text-fintaxy-blue" />} title="Asistent AI Voice-Driven" description="Comunici prin voce, primești răspunsuri instant despre contabilitate și legislație fiscală. Îți face programări sau trimite emailuri direct din platformă." />
            <FeatureCard icon={<FileSearch className="h-6 w-6 text-fintaxy-blue" />} title="Expert Contabil" description="Contabil certificat CECCAR, specializat în domeniul tău, cu peste 3 ani experiență. Disponibil oricând." />
            <FeatureCard icon={<BarChart3 className="h-6 w-6 text-fintaxy-blue" />} title="Informații în Timp Real" description="Accesează situația financiară fluxul de numerar și indicatorii cheie in afaceri oricând." />
          </div>
        </div>
      </section>
      
      <ModuleSection />
      <SecuritySection />
      <Testimonials />
      <FAQSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>;
};
export default Freelancers;