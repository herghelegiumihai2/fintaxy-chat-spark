import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';
interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose
}) => {
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
        body: JSON.stringify({
          ...formData,
          source: 'waitlist_modal'
        })
      });
      if (response.ok) {
        toast({
          title: "Te-ai înscris cu succes!",
          description: "Ai fost adăugat pe lista de așteptare. Te vom contacta în curând!"
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
        onClose();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Eroare la înscriere",
        description: "Vă rugăm să încercați din nou sau să ne contactați direct.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const openConsultationForm = () => {
    window.open('https://airtable.com/appFj5aULmVgrYTpy/pagzTXzlTFmky6BKt/form', '_blank');
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto py-[20px] px-[50px] my-0">
        <DialogHeader className="py-[15px]">
          <DialogTitle className="text-2xl font-semibold text-fintaxy-navy text-center mb-2">
            Adaugă-mă pe lista de așteptare
          </DialogTitle>
          <p className="text-fintaxy-muted text-center py-0 my-0">
            Fii printre primii care vor avea acces la platforma Fintaxy
          </p>
        </DialogHeader>


        <form id="waitlist-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-fintaxy-navy mb-2">
                Nume complet *
              </label>
              <Input id="modal-name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="w-full" placeholder="Nume și prenume" />
            </div>
            
            <div>
              <label htmlFor="modal-company" className="block text-sm font-medium text-fintaxy-navy mb-2">
                Compania
              </label>
              <Input id="modal-company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="w-full" placeholder="Numele companiei" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-fintaxy-navy mb-2">
                Email *
              </label>
              <Input id="modal-email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full" placeholder="adresa@email.com" />
            </div>
            
            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-fintaxy-navy mb-2">
                Telefon
              </label>
              <Input id="modal-phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="w-full" placeholder="+40 XXX XXX XXX" />
            </div>
          </div>
          
          <div>
            <label htmlFor="modal-message" className="block text-sm font-medium text-fintaxy-navy mb-2">
              Mesaj (opțional)
            </label>
            <Textarea id="modal-message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full resize-none" placeholder="Spune-ne despre business-ul tău și cum te putem ajuta..." />
          </div>
          
          <div className="mt-6">
            <Button form="waitlist-form" type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-fintaxy-blue to-blue-600 hover:from-blue-600 hover:to-fintaxy-blue text-white py-0 my-[20px]">
              {isSubmitting ? 'Se înscrie...' : 'Adaugă-mă pe listă'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default ApplicationModal;