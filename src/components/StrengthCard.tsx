import React, { useRef, useState } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const maxTilt = 15; // Maximum tilt angle in degrees
    const tiltXValue = (mouseY / (rect.height / 2)) * maxTilt;
    const tiltYValue = -(mouseX / (rect.width / 2)) * maxTilt;
    
    setTiltX(tiltXValue);
    setTiltY(tiltYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltX(0);
    setTiltY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="perspective-1000"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.3s ease-out',
        animationDelay: `${index * 100}ms`,
      }}
    >
      <SpotlightCard
        spotlightColor={spotlightColor}
        className="transition-all duration-300"
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
    </div>
  );
};

export default StrengthCard;