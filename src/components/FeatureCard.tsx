
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex gap-4 items-start">
        <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-lg text-fintaxy-navy mb-2">{title}</h3>
          <p className="text-fintaxy-muted text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
