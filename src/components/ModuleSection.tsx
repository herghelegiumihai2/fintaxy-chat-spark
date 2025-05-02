
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, BarChart3, BrainCircuit, Mail, Clock, MessageSquareText, FileText, FileSearch, CreditCard, RefreshCcw, FileCheck } from 'lucide-react';

// Define the structure for feature sections
interface FeatureSection {
  id: number;
  title: string;
  characteristics: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  }[];
  images: string[];
}

// Create our data
const featureSections: FeatureSection[] = [
  {
    id: 1,
    title: "Informatii in timp real",
    characteristics: [
      {
        icon: <BarChart3 className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Dashboard cu Situatia Financiara",
        subtitle: "Ia decizii informate cu panouri de control clare și prietenoase."
      },
      {
        icon: <RefreshCcw className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Indicatoari Cheie",
        subtitle: "Accesează oricand situația financiară, fluxul de numerar si alte date din chat"
      },
      {
        icon: <CreditCard className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Taxele Spre Plata si Dividentele Disponibile",
        subtitle: "Accesează situația financiară Taxele Spre Plata si Dividentele Disponibile"
      }
    ],
    images: [
      "public/lovable-uploads/67532c83-7628-4f06-a95e-5163fcbfc04b.png",
      "public/lovable-uploads/61d027fb-be84-4f79-bdb3-9b889a8c7312.png"
    ]
  },
  {
    id: 2,
    title: "Assistant AI voice-driven",
    characteristics: [
      {
        icon: <Clock className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Raspunsuri Instant & Disponibil 24/7",
        subtitle: "Obții informații rapid, oricând ai nevoie."
      },
      {
        icon: <MessageSquareText className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Comunici prin voce despre Contabilitate si Fiscalitate",
        subtitle: "Discută ușor și natural despre finanțele tale."
      },
      {
        icon: <FileText className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Genereaza print prompt Facturi, Rapoarte si Analize",
        subtitle: "Creezi facturi și Vizualizezi date esențiale în câteva secunde."
      },
      {
        icon: <Mail className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Trimite email și programari in calendar",
        subtitle: "Automatizează comunicarea și Organizează ușor ziua, fără efort."
      }
    ],
    images: [
      "public/lovable-uploads/83b4ca99-bb0c-436b-8a6a-472b79bcce0b.png",
      "public/lovable-uploads/65b45231-a0b6-482d-9539-118b345e8cdf.png",
      "public/lovable-uploads/9d70cf20-45de-447c-ba58-274ef09157be.png"
      
    ]
  },
  {
    id: 3,
    title: "Generare de Facturi cu AI",
    characteristics: [
      {
        icon: <BrainCircuit className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Genereaza prin Prompt",
        subtitle: "Factură rapid, cu doar câteva cuvinte."
      },
      {
        icon: <RefreshCcw className="w-5 h-5 text-fintaxy-blue"/>,
        title: "AI Automations",
        subtitle: "Setezi o dată, rulează singur. Creaza facturi recurente, reguli si automatizari."
      },
      {
        icon: <CreditCard className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Trimite la client si accepta Plati online",
        subtitle: "Facturezi și încasezi fără efort."
      }
    ],
    images: [
      "public/lovable-uploads/354d93f0-0f22-4dfe-88e5-43ed18b0f9d3.png",
      "public/lovable-uploads/52f83da9-ef32-4535-b2b4-1d134ec2e399.png",
      "public/lovable-uploads/9a807bbe-6cfa-4f46-9689-6990d64c672f.png"
    ]
  },
  {
    id: 4,
    title: "Procesare de Documente cu AI",
    characteristics: [
      {
        icon: <FileSearch className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Procesare de Bonuri si Facturi",
        subtitle: "Recunoaște automat datele și le prelucrează categorizează."
      },
      {
        icon: <FileCheck className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Procesare de Extrase Bancare",
        subtitle: "Import rapid, categorizare și organizare clară a tranzacțiilor."
      },
      {
        icon: <Mail className="w-5 h-5 text-fintaxy-blue"/>,
        title: "Integrare si colectare din e-Factura, Email & poze WhatsApp",
        subtitle: "Adună totul la un loc, fără efort manual."
      }
    ],
    images: [
      "public/lovable-uploads/d59ddfb2-6717-4a62-bc6d-c15d891ca61b.png",
      "public/lovable-uploads/a91152e2-8b1c-4724-bb28-f71d7a293a54.png"
    ]
  }
];

const ModuleSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<number, number>>({});

  // Initialize image indices
  useEffect(() => {
    const indices: Record<number, number> = {};
    featureSections.forEach(section => {
      indices[section.id] = 0;
    });
    setActiveImageIndex(indices);
  }, []);

  // Image carousel functionality
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    featureSections.forEach(section => {
      // Create a timer for each carousel
      const timer = setInterval(() => {
        setActiveImageIndex(prev => {
          const currentIndex = prev[section.id] || 0;
          const nextIndex = (currentIndex + 1) % section.images.length;
          return { ...prev, [section.id]: nextIndex };
        });
      }, 5000); // Change image every 5 seconds
      
      timers.push(timer);
    });
    
    // Cleanup function
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
    
    document.querySelectorAll('.feature-section').forEach(item => {
      observer.observe(item as Element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 section-appear">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-fintaxy-light text-fintaxy-navy text-sm font-medium rounded-full">
              Capabilități
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy max-w-3xl mx-auto mb-6">
            Economisește 76 de ore pe lună
          </h2>
          <p className="text-fintaxy-muted max-w-2xl mx-auto">
            Automatizează cele mai plictisitoare sarcini — care chiar și contabilii le urăsc.
          </p>
        </div>
        
        <div className="space-y-32">
          {featureSections.map((section, sectionIndex) => (
            <div 
              key={section.id} 
              className={`feature-section grid md:grid-cols-2 gap-12 items-center`}
              style={{ transitionDelay: `${0.1 * sectionIndex}s` }}
            >
              {/* For even-indexed sections (0-based), content is on the right and image is on the left */}
              {sectionIndex % 2 === 1 ? (
                <>
                  {/* Left content - Image carousel for even sections */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-video relative">
                    {section.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image}
                        alt={`${section.title} illustration ${imgIndex + 1}`}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0
                          ${activeImageIndex[section.id] === imgIndex ? 'opacity-100' : 'opacity-0'}`}
                      />
                    ))}
                    
                    {/* Carousel indicators */}
                    {section.images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {section.images.map((_, imgIndex) => (
                          <button 
                            key={imgIndex} 
                            className={`w-2 h-2 rounded-full transition-all ${
                              activeImageIndex[section.id] === imgIndex ? 'bg-fintaxy-blue scale-125' : 'bg-gray-300'
                            }`}
                            onClick={() => setActiveImageIndex(prev => ({ ...prev, [section.id]: imgIndex }))}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Right content - Text for even sections */}
                  <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-fintaxy-navy">
                      {section.title}
                    </h3>
                    
                    <div className="space-y-6">
                      {section.characteristics.map((characteristic, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="p-2 bg-blue-100 rounded-md flex-shrink-0 mt-1">
                            {characteristic.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-lg text-fintaxy-navy mb-1">
                              {characteristic.title}
                            </h4>
                            <p className="text-fintaxy-muted">
                              {characteristic.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Left content - Text for odd sections */}
                  <div className="space-y-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-fintaxy-navy">
                      {section.title}
                    </h3>
                    
                    <div className="space-y-6">
                      {section.characteristics.map((characteristic, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="p-2 bg-blue-100 rounded-md flex-shrink-0 mt-1">
                            {characteristic.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-lg text-fintaxy-navy mb-1">
                              {characteristic.title}
                            </h4>
                            <p className="text-fintaxy-muted">
                              {characteristic.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right content - Image carousel for odd sections */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-video relative">
                    {section.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image}
                        alt={`${section.title} illustration ${imgIndex + 1}`}
                        className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0
                          ${activeImageIndex[section.id] === imgIndex ? 'opacity-100' : 'opacity-0'}`}
                      />
                    ))}
                    
                    {/* Carousel indicators */}
                    {section.images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {section.images.map((_, imgIndex) => (
                          <button 
                            key={imgIndex} 
                            className={`w-2 h-2 rounded-full transition-all ${
                              activeImageIndex[section.id] === imgIndex ? 'bg-fintaxy-blue scale-125' : 'bg-gray-300'
                            }`}
                            onClick={() => setActiveImageIndex(prev => ({ ...prev, [section.id]: imgIndex }))}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleSection;
