
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fintaxy-navy py-16 px-6 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-2">
            <div>
              <span className="text-2xl font-semibold tracking-tight">fintaxy</span>
            </div>
            <p className="text-blue-200/80 max-w-xs">
              Agenți AI pentru contabilitate și finanțe, concepuți să transforme modul în care echipele de contabilitate lucrează.
            </p>
            <div className="pt-2">
              <p className="text-blue-200/60 text-sm">
                &copy; {new Date().getFullYear()} Fintaxy. Toate drepturile rezervate.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Link-uri rapide</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-blue-200/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Funcționalități
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Testimoniale
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Despre noi
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-blue-200/80">Email: denis.bradu@fintaxy.com</li>
              <li className="text-blue-200/80">
                Telefon: +40 750 20 36 48
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/fintaxy/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/denis-bradu-00546a162/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
