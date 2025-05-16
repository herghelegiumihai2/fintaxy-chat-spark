import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PricingPlan {
  title: string;
  subtitle?: string;
  price: string;
  features: string[];
  cta: string;
  additionalInfo?: string[];
  highlighted?: boolean;
  formUrl?: string;
}

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState("srl");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Pricing plans data
  const srlPlans: PricingPlan[] = [
    {
      title: "Start",
      price: "50 EUR",
      features: [
        "Documente contabile: 30",
        "Importuri: 0",
        "2 Team Members",
        "1 Salariat",
        "AI Assistant",
      ],
      cta: "Incepe Acum",
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    },
    {
      title: "Standard",
      price: "79 EUR",
      features: [
        "Documente contabile: 50",
        "Importuri: 1",
        "All AI Accounting features",
        "5 Team Members",
        "3 Salariati",
        "1 Accountant Expert",
      ],
      cta: "Incepe Acum",
      highlighted: true,
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    },
    {
      title: "Pro",
      price: "150 EUR",
      features: [
        "Documente contabile: 120",
        "Importuri: 5",
        "All AI Accounting features",
        "10 Team Members",
        "5 Salariati",
        "1 Accountant Expert",
      ],
      cta: "Incepe Acum",
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    },
    {
      title: "Personalizat",
      price: "",
      features: [
        "Daca nu te incadrezi in nici o categorie sau doresti o consultatie"
      ],
      cta: "Vreau să fiu sunat",
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    }
  ];

  const pfaPlans: PricingPlan[] = [
    {
      title: "PFA Basic",
      subtitle: "Normă de Venit",
      price: "10 EUR",
      features: [
        "Toate funcțiile AI",
        "1 Team Member",
        "1 Accounting Expert",
        "Comunici prin voce, primești răspunsuri instant",
        "Facturare automată"
      ],
      cta: "Incepe Acum",
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    },
    {
      title: "PFA Plus",
      subtitle: "Real",
      price: "30 EUR",
      features: [
        "Toate funcțiile AI",
        "3 Team Members",
        "1 Accounting Expert",
        "Comunici prin voce, primești răspunsuri instant",
        "Facturare automată",
        "Rapoarte personalizate",
        "Consultanță fiscală"
      ],
      cta: "Incepe Acum",
      highlighted: true,
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    },
    {
      title: "Personalizat",
      price: "",
      features: [
        "Daca nu te incadrezi in nici o categorie sau doresti o consultatie"
      ],
      cta: "Vreau să fiu sunat",
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form"
    }
  ];

  const infiintarePlans: PricingPlan[] = [
    {
      title: "SRL",
      price: "Gratuit",
      features: [
        "Înființare completă SRL",
        "Suport juridic",
        "Toate documentele necesare"
      ],
      additionalInfo: [
        "Taxe Registrul Comerțului",
        "Înființare Gratuită Pentru toți antreprenorii care aleg și contabilitate"
      ],
      cta: "Incepe Acum",
      highlighted: true,
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pag3oPTY2mZaISXFh/form"
    },
    {
      title: "PFA",
      price: "Gratuit",
      features: [
        "Înființare completă PFA",
        "Suport juridic",
        "Toate documentele necesare"
      ],
      additionalInfo: [
        "Acte necesare:",
        "• Copie act de identitate",
        "• Copie a dovezii de spațiu + copii C.I. proprietari pentru sediul social",
        "• Documente care atestă calificarea în domeniul activității pe care urmează să o prestați"
      ],
      cta: "Incepe Acum",
      formUrl: "https://airtable.com/appFj5aULmVgrYTpy/pag3oPTY2mZaISXFh/form"
    }
  ];

  // Get current plans based on selected tab
  const getCurrentPlans = () => {
    switch(selectedTab) {
      case "srl": return srlPlans;
      case "pfa": return pfaPlans;
      case "infiintare": return infiintarePlans;
      default: return srlPlans;
    }
  };

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

  // Function to handle smooth scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if scroll buttons should be visible
  const checkScrollButtons = () => {
    if (cardsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  // Scroll the cards container
  const scrollCards = (direction: 'left' | 'right') => {
    if (cardsContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      const newScrollLeft = direction === 'left' 
        ? cardsContainerRef.current.scrollLeft - scrollAmount 
        : cardsContainerRef.current.scrollLeft + scrollAmount;
      
      cardsContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Update button state after scrolling
      setTimeout(checkScrollButtons, 400);
    }
  };

  // Initialize scroll check and add event listener
  useEffect(() => {
    checkScrollButtons();
    
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      
      // Also check on resize
      window.addEventListener('resize', checkScrollButtons);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons);
      }
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [selectedTab]);

  // Recheck buttons when tab changes
  useEffect(() => {
    setTimeout(checkScrollButtons, 100);
  }, [selectedTab]);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 section-appear">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy mb-6">
            Planuri de prețuri simple și transparente
          </h2>
          <p className="text-fintaxy-muted max-w-2xl mx-auto">
            Alegeți planul care se potrivește cel mai bine nevoilor afacerii dumneavoastră
          </p>
        </div>
        
        <div className="flex justify-center mb-8 section-appear">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} defaultValue="srl" className="w-full max-w-sm">
            <TabsList className="grid w-full grid-cols-3 bg-blue-50 p-1">
              <TabsTrigger value="srl" className="text-sm py-1.5 px-2">SRL</TabsTrigger>
              <TabsTrigger value="pfa" className="text-sm py-1.5 px-2">PFA</TabsTrigger>
              <TabsTrigger value="infiintare" className="text-sm py-1.5 px-2">Inființare</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="relative section-appear">
          {/* Scroll buttons - only show on larger screens */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollCards('left')} 
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 text-fintaxy-navy" />
            </button>
            
            <button 
              onClick={() => scrollCards('right')} 
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 text-fintaxy-navy" />
            </button>
          </div>
          
          {/* Cards container with touch scroll for mobile */}
          <div 
            ref={cardsContainerRef} 
            className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {getCurrentPlans().map((plan, index) => (
              <div 
                key={index} 
                className="snap-center flex-shrink-0 w-[85vw] max-w-[320px] sm:w-[320px] md:w-auto flex"
              >
                <Card 
                  className={`w-full flex flex-col h-full transition-all duration-300
                    ${plan.highlighted ? 'border-2 border-fintaxy-blue ring-4 ring-blue-100 transform hover:-translate-y-1' : 'border border-gray-100 hover:border-fintaxy-blue hover:shadow-md'}`}
                >
                  <CardHeader className={`p-5 ${plan.highlighted ? 'bg-gradient-to-r from-fintaxy-blue to-blue-600 text-white' : 'border-b border-gray-100'}`}>
                    <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                    {plan.subtitle && (
                      <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-fintaxy-muted'} mb-1`}>
                        {plan.subtitle}
                      </p>
                    )}
                    {plan.price && (
                      <div className="font-bold text-2xl">{plan.price}</div>
                    )}
                  </CardHeader>
                  <CardContent className="p-5 flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-fintaxy-blue mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-fintaxy-navy text-sm">{feature}</span>
                        </li>
                      ))}
                      
                      {plan.additionalInfo && plan.additionalInfo.map((info, idx) => (
                        <li key={`info-${idx}`} className="text-fintaxy-muted text-xs mt-1.5">
                          {info}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-5 pb-5 pt-0 mt-auto">
                    <Button 
                      size="sm"
                      className={`w-full ${plan.highlighted 
                        ? 'bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white' 
                        : 'border border-fintaxy-navy/20 bg-white text-fintaxy-navy hover:bg-fintaxy-light'}`}
                      onClick={() => plan.cta === "Vreau să fiu sunat" ? scrollToContact() : window.open(plan.formUrl, '_blank')}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile swipe indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-xs text-fintaxy-muted flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Swipe pentru a vedea mai multe <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </div>
        
        {/* Fix: Remove the 'jsx' attribute from the style tag */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PricingSection;
