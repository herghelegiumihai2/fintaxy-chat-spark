
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const FinalCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Formular trimis cu succes!",
          description: "Vă vom contacta în curând.",
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Eroare",
        description: "A apărut o eroare la trimiterea formularului. Vă rugăm să încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text (was right side before) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-fintaxy-navy mb-6">
              Fă-ți viața mai ușoară cu Fintaxy AI
            </h2>
            
            <p className="text-fintaxy-muted leading-relaxed mb-10 text-lg">
              Creat împreună cu experți contabili și specialiști în AI, special pentru freelanceri și afaceri mici 
              care vor să economisească timp, bani și stres. Automatizează facturile, rapoartele și documentele fără 
              să mai depinzi de softuri complicate sau procese manuale. <strong>Totul e simplu, rapid și la îndemână – 
              chiar și prin voce.</strong>
            </p>
            
            <div className="space-y-4">
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white"
                onClick={() => window.open('https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form', '_blank')}
              >
                Începe
              </Button>
              
              <Button 
                className="w-full sm:w-auto border border-fintaxy-navy/20 bg-white text-fintaxy-navy hover:bg-fintaxy-light ml-0 sm:ml-4 mt-4 sm:mt-0"
                variant="outline"
                onClick={() => window.open('https://calendly.com/denis-bradu/denis-bradu-clone?month=2024-12', '_blank')}
              >
                Programează o consultație
              </Button>
            </div>
          </div>
          
          {/* Right side - Form (was left side before) */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-fintaxy-navy mb-6">
              Lasă-ne datele de contact și te sunăm noi
            </h3>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nume</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fintaxy-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Companie</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fintaxy-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fintaxy-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fintaxy-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fintaxy-blue focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Se trimite..." : "Vreau să fiu sunat"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
