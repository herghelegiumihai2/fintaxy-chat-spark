import React from 'react';
import { MapPin, Star } from 'lucide-react';

const GoogleMapsSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Găsește-ne pe Google Maps
          </h2>
          <p className="text-lg text-gray-600">
            Suntem recunoscuți pentru serviciile noastre de calitate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.123456789!2d26.2471212!3d51.9629108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa520cf828585c7f1%3A0x27df7f9d49513f60!2sFintaxy!5e0!3m2!1sen!2s!4v1693123456789!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fintaxy Google Maps Location"
            />
          </div>

          {/* Info Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Locația noastră</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">5.0</span>
                  <span className="text-sm text-gray-600">(Evaluări Google)</span>
                </div>
                
                <p className="text-gray-600">
                  Vizitează-ne sau contactează-ne pentru o consultare personalizată despre soluțiile noastre de contabilitate și automatizare.
                </p>
                
                <a
                  href="https://www.google.com/maps/place/Fintaxy/@51.4886643,15.7055918,2510208m/data=!3m1!1e3!4m16!1m9!3m8!1s0xa520cf828585c7f1:0x27df7f9d49513f60!2sFintaxy!8m2!3d51.9629108!4d26.2471212!9m1!1b1!16s%2Fg%2F11xvj773jq!3m5!1s0xa520cf828585c7f1:0x27df7f9d49513f60!8m2!3d51.9629108!4d26.2471212!16s%2Fg%2F11xvj773jq?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5" />
                  Deschide în Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsSection;