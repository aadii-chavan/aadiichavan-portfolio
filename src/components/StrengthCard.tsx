import React from 'react';
import { Strength } from '../data/teamData';
import { Code, Workflow, Rocket, Palette, Users, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface StrengthCardProps {
  strength: Strength;
  index: number;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const getIconForStrength = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes('full-stack')) return Code;
  if (normalized.includes('agile')) return Workflow;
  if (normalized.includes('innovation') || normalized.includes('focus')) return Rocket;
  if (normalized.includes('user') || normalized.includes('design')) return Palette;
  if (normalized.includes('collaborative') || normalized.includes('team')) return Users;
  if (normalized.includes('quality') || normalized.includes('assurance') || normalized.includes('qa')) return CheckCircle2;
  return Code;
};

const StrengthCard: React.FC<StrengthCardProps> = ({ strength, index, spotlightColor = 'rgba(132, 0, 255, 0.25)' }) => {
  const IconComponent = getIconForStrength(strength.title);

  return (
    <SpotlightCard
      spotlightColor={spotlightColor}
      className="transition-transform card-hover"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/[0.05] rounded-lg border border-white/10">
          <IconComponent className="w-6 h-6 text-white/80" />
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
    </SpotlightCard>
  );
};

export default StrengthCard;