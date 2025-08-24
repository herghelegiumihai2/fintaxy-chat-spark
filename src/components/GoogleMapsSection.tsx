import React from 'react';
import { MapPin, Star } from 'lucide-react';
const GoogleMapsSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Locația noastră
          </h2>
          <p className="text-gray-600 mb-8">
            Vino să ne cunoști în biroul nostru din București
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.8!2d26.2471212!3d51.9629108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa520cf828585c7f1%3A0x27df7f9d49513f60!2sFintaxy!5e0!3m2!1sen!2sro!4v1692000000000!5m2!1sen!2sro"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
export default GoogleMapsSection;