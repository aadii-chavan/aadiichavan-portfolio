import React from 'react';
import { Strength } from '../data/teamData';

interface StrengthCardProps {
  strength: Strength;
  index: number;
}

const StrengthCard: React.FC<StrengthCardProps> = ({ strength, index }) => {
  return (
    <div 
      className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 card-hover"
      style={{ 
        animationDelay: `${index * 100}ms` 
      }}
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0d1117] rounded-lg border border-[#30363d]">
          <span className="text-2xl">{strength.icon}</span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#f0f6fc]">
            {strength.title}
          </h3>
          <p className="text-[#8b949e] text-sm leading-relaxed">
            {strength.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrengthCard;