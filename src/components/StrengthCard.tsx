import React from 'react';
import { Strength } from '../data/teamData';

interface StrengthCardProps {
  strength: Strength;
  index: number;
}

const StrengthCard: React.FC<StrengthCardProps> = ({ strength, index }) => {
  return (
    <div 
      className="relative rounded-2xl p-6 bg-white/[0.05] border border-white/10 overflow-hidden transition-transform card-hover"
      style={{ 
        animationDelay: `${index * 100}ms`,
        boxShadow: '0 0 40px rgba(132, 0, 255, 0.15)'
      }}
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/[0.05] rounded-lg border border-white/10">
          <span className="text-2xl">{strength.icon}</span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white/90">
            {strength.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {strength.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrengthCard;