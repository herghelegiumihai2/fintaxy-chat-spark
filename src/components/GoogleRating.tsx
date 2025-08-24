import React from 'react';
import { Star, MapPin } from 'lucide-react';
const GoogleRating = () => {
  return <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 shadow-lg border border-gray-100 py-[8px] my-[10px]">
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
    </div>;
};
export default GoogleRating;