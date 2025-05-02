
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from 'lucide-react';

interface PricingPlan {
  title: string;
  subtitle?: string;
  price: string;
  features: string[];
  cta: string;
  additionalInfo?: string[];
  highlighted?: boolean;
}

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState("srl");

  // Pricing plans data
  const srlPlans: PricingPlan[] = [
    {
      title: "Start",
      price: "50 EUR",
      features: [
        "Unlimited Transactions",
        "2 Team Members",
        "1 Salariat",
        "AI Assistant",
      ],
      cta: "Incepe Acum"
    },
    {
      title: "Standard",
      price: "79 EUR",
      features: [
        "All AI Accounting features",
        "5 Team Members",
        "3 Salariati",
        "1 Accountant Expert",
        "Catch-up: Last year Bookkeeping"
      ],
      cta: "Incepe Acum",
      highlighted: true
    },
    {
      title: "Pro",
      price: "150 EUR",
      features: [
        "All AI Accounting features",
        "10 Team Members",
        "5 Salariati",
        "1 Accountant Expert",
        "Catch-up: Last 3 years Bookkeeping"
      ],
      cta: "Incepe Acum"
    },
    {
      title: "Personalizat",
      price: "",
      features: [
        "Daca nu te incadrezi in nici o categorie sau doresti o consultatie"
      ],
      cta: "Vreau să fiu sunat"
    }
  ];

  const pfaPlans: PricingPlan[] = [
    {
      title: "PFA Basic",
      subtitle: "Normă de Venit",
      price: "10 EUR",
      features: [
        "Toate funcțiile AI pentru freelanceri",
        "1 Team Member",
        "Comunici prin voce, primești răspunsuri instant",
        "Facturare automată"
      ],
      cta: "Incepe Acum"
    },
    {
      title: "PFA Plus",
      subtitle: "Real",
      price: "30 EUR",
      features: [
        "Toate funcțiile AI pentru freelanceri",
        "3 Team Members",
        "Contabil certificat CECCAR, specializat în domeniul tău. Disponibil oricând",
        "Rapoarte personalizate",
        "Consultanță fiscală"
      ],
      cta: "Incepe Acum",
      highlighted: true
    },
    {
      title: "Personalizat",
      price: "",
      features: [
        "Daca nu te incadrezi in nici o categorie sau doresti o consultatie"
      ],
      cta: "Vreau să fiu sunat"
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
      highlighted: true
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
      cta: "Incepe Acum"
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

  return (
    <section id="pricing" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 section-appear">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy mb-6">
            Planuri de prețuri simple și transparente
          </h2>
          <p className="text-fintaxy-muted max-w-2xl mx-auto">
            Alegeți planul care se potrivește cel mai bine nevoilor afacerii dumneavoastră
          </p>
        </div>
        
        <div className="flex justify-center mb-12 section-appear">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} defaultValue="srl" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-blue-50">
              <TabsTrigger value="srl">SRL</TabsTrigger>
              <TabsTrigger value="pfa">PFA</TabsTrigger>
              <TabsTrigger value="infiintare">Inființare</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="flex justify-center section-appear">
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {getCurrentPlans().map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 flex flex-col
                  ${plan.highlighted ? 'border-2 border-fintaxy-blue ring-4 ring-blue-100 transform hover:-translate-y-1' : 'border border-gray-100 hover:border-fintaxy-blue hover:shadow-md'} 
                  w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] max-w-[320px]`}
              >
                <div className={`p-6 ${plan.highlighted ? 'bg-gradient-to-r from-fintaxy-blue to-blue-600 text-white' : 'border-b border-gray-100'}`}>
                  <h3 className="text-2xl font-semibold mb-1">{plan.title}</h3>
                  {plan.subtitle && (
                    <p className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-fintaxy-muted'} mb-2`}>
                      {plan.subtitle}
                    </p>
                  )}
                  {plan.price && (
                    <div className="font-bold text-3xl mb-0">{plan.price}</div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-fintaxy-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-fintaxy-navy">{feature}</span>
                      </li>
                    ))}
                    
                    {plan.additionalInfo && plan.additionalInfo.map((info, idx) => (
                      <li key={`info-${idx}`} className="text-fintaxy-muted text-sm mt-2">
                        {info}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-auto ${plan.highlighted 
                      ? 'bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white' 
                      : 'border border-fintaxy-navy/20 bg-white text-fintaxy-navy hover:bg-fintaxy-light'}`}
                    onClick={() => window.open('https://calendly.com/denis-bradu/denis-bradu-clone?month=2024-12', '_blank')}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
