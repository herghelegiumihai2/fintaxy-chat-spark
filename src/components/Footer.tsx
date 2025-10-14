import React from 'react';
import { ChevronRight } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6 md:col-span-2">
            <div>
              <span className="text-2xl font-semibold tracking-tight">fintaxy</span>
            </div>
            <p className="text-blue-200/80 max-w-xs">Fintaxy - Platformă AI de Contabilitate, creată pentru a automatiza complet procesele contabile și a le face accesibile companiilor de toate dimensiunile.</p>
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
                <a 
                  href="#features" 
                  className="text-blue-200/80 hover:text-white flex items-center transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = '/#features';
                    }
                  }}
                >
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Funționalități
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-blue-200/80 hover:text-white flex items-center transition-colors"
                  onClick={(e) => {
                    if (window.location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = '/#pricing';
                    }
                  }}
                >
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Prețuri
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-blue-200/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  Contacte
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-blue-200/80">Email: denis.bradu@fintaxy.com</li>
              <li className="text-blue-200/80">
                Telefon: +40 750 297 484
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/fintaxy/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578228005928" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@Fintaxy-AI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.29 5.55 21.68 4.95 20.82 4.7C19.25 4.25 12 4.25 12 4.25S4.75 4.25 3.18 4.7C2.32 4.95 1.71 5.55 1.46 6.42C1 8 1 11.25 1 11.25S1 14.5 1.46 16.08C1.71 16.95 2.32 17.55 3.18 17.8C4.75 18.25 12 18.25 12 18.25S19.25 18.25 20.82 17.8C21.68 17.55 22.29 16.95 22.54 16.08C23 14.5 23 11.25 23 11.25S23 8 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02L15.5 11.25L9.75 7.48V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@fintaxy7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12V7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7V12C15 13.1046 14.1046 14 13 14H11C9.89543 14 9 13.1046 9 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 8.5C16.3807 8.5 17.5 7.38071 17.5 6C17.5 4.61929 16.3807 3.5 15 3.5V8.5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;