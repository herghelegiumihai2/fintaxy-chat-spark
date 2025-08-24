import React from 'react';
import { Star, MapPin } from 'lucide-react';
const GoogleRating = () => {
  return (
    <div 
      className="inline-flex items-center gap-3 bg-white rounded-full px-4 shadow-lg border border-gray-100 py-[8px] my-[30px] cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => window.open('https://maps.google.com/maps?ll=44.439663,26.096306&z=16&t=m&hl=en&gl=RO&mapclient=embed&cid=2882831124829921120', '_blank')}
    >
      <MapPin className="w-5 h-5 text-blue-600" />
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-900">5.0</span>
        <div className="flex">
          {Array.from({
          length: 5
        }).map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
        </div>
        <span className="text-sm text-gray-600 font-medium">#1 Google maps rating</span>
      </div>
    </div>
  );
};
export default GoogleRating;