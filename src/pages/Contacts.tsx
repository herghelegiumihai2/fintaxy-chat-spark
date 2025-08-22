import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "Mesaj trimis cu succes!",
          description: "Vă vom contacta în cel mai scurt timp posibil."
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
      console.error('Error submitting form:', error);
      toast({
        title: "Eroare la trimiterea mesajului",
        description: "Vă rugăm să încercați din nou sau să ne contactați direct.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 py-[150px]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 py-[20px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-[-0.04em] text-fintaxy-navy max-w-4xl mx-auto mb-6">
              Contactează-ne
            </h1>
            <p className="text-fintaxy-muted max-w-2xl mx-auto text-lg">
              Suntem aici să te ajutăm să automatizezi contabilitatea companiei tale. Ia legătura cu echipa noastră!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-fintaxy-navy mb-6">
                  Informații de contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-fintaxy-light rounded-lg">
                      <Mail className="w-6 h-6 text-fintaxy-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-fintaxy-navy">Email</h3>
                      <p className="text-fintaxy-muted">denis.bradu@fintaxy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-fintaxy-light rounded-lg">
                      <Phone className="w-6 h-6 text-fintaxy-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-fintaxy-navy">Telefon</h3>
                      <p className="text-fintaxy-muted">+40 750 20 36 48</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-fintaxy-light rounded-lg">
                      <MapPin className="w-6 h-6 text-fintaxy-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-fintaxy-navy">Locație</h3>
                      <p className="text-fintaxy-muted">București, România</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-fintaxy-blue to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  De ce să alegi Fintaxy?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Automatizare completă a contabilității</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Asistent AI disponibil 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Integrări cu toate sistemele populare</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Suport specializat pentru implementare</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <h2 className="text-2xl font-semibold text-fintaxy-navy mb-6">
                Trimite-ne un mesaj
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-fintaxy-navy mb-2">
                      Nume complet *
                    </label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="w-full" placeholder="Nume și prenume" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-fintaxy-navy mb-2">
                      Compania
                    </label>
                    <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="w-full" placeholder="Numele companiei" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fintaxy-navy mb-2">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full" placeholder="adresa@email.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-fintaxy-navy mb-2">
                      Telefon
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="w-full" placeholder="+40 XXX XXX XXX" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fintaxy-navy mb-2">
                    Mesaj *
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full resize-none" placeholder="Descrie-ne cum te putem ajuta..." />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white py-3 text-lg">
                  {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Contacts;