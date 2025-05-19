
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Building, ArrowLeft, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Fintaxy - About Us";
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')} 
                className="mr-4 text-fintaxy-navy"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <h1 className="text-2xl md:text-3xl font-semibold text-fintaxy-navy">About Us</h1>
            </div>
            
            <div className="flex items-center">
              <Button 
                onClick={() => navigate('/')} 
                className="text-fintaxy-navy hover:bg-fintaxy-light"
                variant="ghost"
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6 md:p-10">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-fintaxy-navy mb-4">Confirm Solutions OÜ</h2>
                  <p className="text-fintaxy-muted">Registration number: 17109468</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <h3 className="flex items-center text-lg font-medium text-fintaxy-navy mb-3">
                        <Building className="mr-2 h-5 w-5 text-fintaxy-blue" />
                        Company Information
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-fintaxy-muted mb-2">Confirm Solutions OÜ</p>
                        <p className="text-fintaxy-muted mb-2">Registration Number: 17109468</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="flex items-center text-lg font-medium text-fintaxy-navy mb-3">
                        <MapPin className="mr-2 h-5 w-5 text-fintaxy-blue" />
                        Address
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-fintaxy-muted mb-3">
                          Harju maakond, Tallinn, Kesklinna linnaosa,<br />
                          Juhkentali tn 8, 10132
                        </p>
                        <a 
                          href="https://maps.google.com/?q=Juhkentali+tn+8,+10132+Tallinn,+Estonia" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fintaxy-blue hover:underline inline-flex items-center"
                        >
                          Open map
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="flex items-center text-lg font-medium text-fintaxy-navy mb-3">
                        <Mail className="mr-2 h-5 w-5 text-fintaxy-blue" />
                        Contact Information
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-fintaxy-muted mb-2">Denis Bradu</p>
                        <a 
                          href="mailto:denis.bradu@fintaxy.com" 
                          className="text-fintaxy-blue hover:underline"
                        >
                          denis.bradu@fintaxy.com
                        </a>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                      <h3 className="text-lg font-medium text-fintaxy-navy mb-3">Our Mission</h3>
                      <p className="text-fintaxy-muted">
                        Fintaxy aims to revolutionize financial management through AI-powered solutions that make accounting tasks efficient, accurate, and accessible to businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-fintaxy-navy text-xl font-semibold">fintaxy</span>
              <p className="text-sm text-fintaxy-muted mt-1">© {new Date().getFullYear()} Confirm Solutions OÜ. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <Button variant="ghost" onClick={() => navigate('/')} className="text-fintaxy-navy hover:bg-fintaxy-light">
                Home
              </Button>
              <Button variant="ghost" onClick={() => navigate('/business')} className="text-fintaxy-navy hover:bg-fintaxy-light">
                Business
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
