
import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Define FAQ data
const faqItems = [
  {
    question: "Ce este Fintaxy AI?",
    answer: "Fintaxy AI este o entitate inteligentă care automatizează 80% din sarcinile financiare, folosind cunoștințele și procesele softurilor clasice de contabilitate. Fintaxy este contabilul tău AI mereu accesibil și vorbăreț."
  },
  {
    question: "Cum diferă Fintaxy AI de un software tradițional de contabilitate?",
    answer: "Fintaxy este primul AI contabil vocal bazat pe inteligență artificială. Spre deosebire de software-urile clasice, Fintaxy înțelege contextul, învață din tiparele afacerii tale și îți sugerează proactiv îmbunătățiri financiare."
  },
  {
    question: "Poate AI-ul să înlocuiască complet un contabil uman?",
    answer: "Deși Fintaxy AI automatizează majoritatea sarcinilor repetitive, precum registrul contabil, scanarea bonurilor, introducerea datelor, generarea facturilor și altele, el funcționează complementar expertizei umane. De aceea, oferim și un contabil expert dedicat firmei tale."
  },
  {
    question: "Este potrivită contabilitatea cu AI pentru afacerile mici?",
    answer: "Da, Fintaxy AI este creată pentru a ajuta afacerile mici, antreprenorii și contabilii să economisească timp și bani, păstrând evidențe financiare de nivel profesional."
  },
  {
    question: "Cum funcționează procesarea documentelor cu AI?",
    answer: "Sistemul Fintaxy AI scanează automat fotografii, e-mailuri cu bonuri și facturi, folosind funcția de Înțelegere AI a Documentelor pentru a extrage și categoriza informațiile despre cheltuieli, produse și facturi. Poți integra și WhatsApp pentru scanarea documentelor."
  },
  {
    question: "Poate Fintaxy AI să genereze automat rapoarte financiare?",
    answer: "Da, Fintaxy AI generează instant rapoarte precum bilanțuri, situații profit și pierdere, sau rapoarte personalizate."
  },
  {
    question: "Cum se compară Fintaxy AI cu Keez?",
    answer: "Soluția noastră este construită pe AI, are mai multe funcții avansate, un design minimalist și ușor de folosit, inclusiv gestionarea documentelor și analiză financiară inteligentă — depășind simplele funcții de contabilitate de bază."
  },
  {
    question: "Cât de sigură este datele mele financiare în Fintaxy?",
    answer: "Folosim criptare de nivel bancar, stocăm datele la un furnizor certificat SOC2, realizăm backup la fiecare oră și respectăm toate standardele majore de securitate."
  },
  {
    question: "Cât timp durează trecerea de la contabilitatea tradițională la Fintaxy AI?",
    answer: "Majoritatea firmelor finalizează tranziția în doar 10 minute și 2 pași: 1. Alegi Planul potrivit Afacerii Tale 2. Încarci balanța. Gata! Opțional: Adaugi membrii echipei, Semnezi procura generată de sitem (pentru ca expertul contabil să devină reprezentantul tău legal)."
  },
  {
    question: "Este rentabilă Fintaxy AI pentru freelanceri?",
    answer: "Da, prețul nostru de 10 EUR/lună este gândit special pentru freelanceri, oferind funcții avansate la costuri minime."
  },
  {
    question: "Pot vorbi cu Fintaxy AI despre datele și documentele mele financiare?",
    answer: "Da, poți întreba orice despre tranzacții sau documente stocate și primești răspuns instant."
  },
  {
    question: "Ce sarcini contabile pot fi automatizate cu AI?",
    answer: "Fintaxy AI automatizează categorizarea, reconcilierea, generarea de rapoarte, auditul 24/7 și majoritatea sarcinilor de rutină."
  },
  {
    question: "Ce tip de suport este disponibil?",
    answer: "Oferim suport AI non-stop și suport uman dedicat în timpul programului de lucru."
  },
  {
    question: "Poate echipa mea actuală și contabilul meu să lucreze cu Fintaxy AI?",
    answer: "Da, poți adăuga gratuit până la 2 membri, inclusiv contabilul, în contul tău. Oferim și funcții speciale pentru colaborarea cu contabili."
  },
  {
    question: "Există o perioadă de test gratuit?",
    answer: "Da, ai acces gratuit la toate funcțiile timp de 14 zile."
  }
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

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

  // Only show the first 7 items initially (until "Cum se compară Fintaxy AI cu Keez?")
  const visibleItems = showAll ? faqItems : faqItems.slice(0, 7);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 section-appear">
          <h2 className="text-3xl md:text-4xl font-semibold text-fintaxy-navy mb-6">
            Întrebări frecvente
          </h2>
          <p className="text-fintaxy-muted max-w-2xl mx-auto">
            Tot ce trebuie să știi despre Fintaxy AI și cum poate ajuta afacerea ta
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 section-appear">
          <Accordion type="single" collapsible className="space-y-4">
            {visibleItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-fintaxy-navy font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-fintaxy-muted">
                  <div className="pt-2">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {!showAll && (
            <div className="flex justify-center mt-8">
              <Button 
                variant="ghost" 
                onClick={() => setShowAll(true)}
                className="flex items-center text-fintaxy-blue hover:text-blue-600 transition-all group"
              >
                Vezi toate
                <ChevronDown className="ml-1 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
