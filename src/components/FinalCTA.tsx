
import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="contact-section" className="py-20 px-6">
      <div className="container mx-auto max-w-screen-xl">
        <div className="w-full mx-auto max-w-[92vw] 2xl:max-w-[1800px]">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-blue-800/90 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Nu te-ai născut pentru facturi.<br />
              De-aia există Fintaxy !
            </h2>
            
            <div className="mb-8">
              <Button 
                size="lg"
                className="bg-white border-2 border-white/30 text-gray-800 hover:bg-gray-50 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => {
                  const event = new CustomEvent('openApplicationModal');
                  window.dispatchEvent(event);
                }}
              >
                Începe Gratuit
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Fără Card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Transfer Simplu</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Salvează timp și bani</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
