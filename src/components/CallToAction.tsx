import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Reduce timpul petrecut pe sarcini manuale cu 80%",
  "Elimină erorile umane în procesarea documentelor",
  "Suport 24/7 și actualizări continue",
  "Integrare cu softurile contabile existente"
];

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 px-6 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-50"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-appear">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-fintaxy-light text-fintaxy-navy text-sm font-medium rounded-full">
                Despre noi
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy mb-6">
              Transformă departamentul financiar cu Fintaxy
            </h2>
            <p className="text-fintaxy-muted text-lg mb-8 leading-relaxed">
              Fintaxy a fost creat de experți financiari și de inteligență artificială pentru a rezolva provocările reale cu care se confruntă departamentele financiare și firmele de contabilitate. Agenții noștri AI sunt verificați de experți și învață continuu pentru a oferi rezultate precise.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-fintaxy-blue w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-fintaxy-navy">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="px-8 py-6 bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white cta-button group"
              size="lg"
              onClick={() => window.open('https://calendly.com/denis-bradu/denis-bradu-clone?month=2025-03', '_blank')}
            >
              Programează o discuție
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="glass-card p-8 rounded-2xl section-appear" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-6">Contactează-ne</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-fintaxy-navy mb-1">Nume complet</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fintaxy-blue/40 focus:border-fintaxy-blue transition-colors" 
                  placeholder="Introdu numele tău"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-fintaxy-navy mb-1">Companie</label>
                <input 
                  type="text" 
                  id="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fintaxy-blue/40 focus:border-fintaxy-blue transition-colors" 
                  placeholder="Numele companiei"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-fintaxy-navy mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fintaxy-blue/40 focus:border-fintaxy-blue transition-colors" 
                  placeholder="email@companie.ro"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-fintaxy-navy mb-1">Mesaj (opțional)</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-fintaxy-blue/40 focus:border-fintaxy-blue transition-colors" 
                  placeholder="Descrie-ne nevoile tale..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-fintaxy-navy hover:bg-fintaxy-navy/90 text-white transition-colors"
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2">Mesajul a fost trimis cu succes!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mt-2">A apărut o eroare. Vă rugăm să încercați din nou.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
