
import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return <section id="contact-section" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Text (was right side before) */}
          <div className="flex flex-col items-start self-start">
            <h2 className="text-3xl md:text-4xl font-semibold text-fintaxy-navy mb-6">Fă-ți viața mai ușoară cu Fintaxy</h2>
            
            <p className="text-fintaxy-muted leading-relaxed mb-10 text-lg">
              Creat împreună cu experți contabili și specialiști în AI, special pentru freelanceri și afaceri mici 
              care vor să economisească timp, bani și stres. Automatizează facturile, rapoartele și documentele fără 
              să mai depinzi de softuri complicate sau procese manuale. <strong>Totul e simplu, rapid și la îndemână – 
              chiar și prin voce.</strong>
            </p>
            
            <div className="space-y-4">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white" onClick={() => window.open('https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form', '_blank')}>
                Începe
              </Button>
              
              <Button className="w-full sm:w-auto border border-fintaxy-navy/20 bg-white text-fintaxy-navy hover:bg-fintaxy-light ml-0 sm:ml-4 mt-4 sm:mt-0" variant="outline" onClick={() => window.open('https://calendly.com/denis-bradu/denis-bradu-clone?month=2024-12', '_blank')}>
                Programează o consultație
              </Button>
            </div>
          </div>
          
          {/* Call to Action Info */}
          <div className="bg-gradient-to-br from-fintaxy-blue to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6">
              Gata să automatizezi contabilitatea?
            </h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Alătură-te comunității de antreprenori care și-au simplificat procesele financiare cu Fintaxy. Începe astăzi și vezi diferența!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Implementare rapidă în 24-48h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Suport tehnic dedicat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Garanție de satisfacție 100%</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-blue-200">
                💡 <strong>Bonus:</strong> Primii 100 de utilizatori primesc 3 luni gratuite!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;
