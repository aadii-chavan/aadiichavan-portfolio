import React from 'react';
import { teamStrengths } from '../data/teamData';
import StrengthCard from './StrengthCard';
import RippleGrid from './RippleGrid';

const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="section-padding bg-black relative overflow-hidden">
      {/* RippleGrid Background */}
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Strengths & Services</h2>
          <p className="text-lg sm:text-xl text-[#8b949e] max-w-3xl mx-auto px-4">
            What I bring to teams and products—technical range, product sense, and delivery discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamStrengths.map((strength, index) => {
            const spotlightPalette: Array<`rgba(${number}, ${number}, ${number}, ${number})`> = [
              'rgba(132, 0, 255, 0.25)',   // purple glow
              'rgba(0, 200, 255, 0.25)',   // cyan glow
              'rgba(255, 120, 0, 0.25)',   // orange glow
              'rgba(0, 255, 150, 0.25)',   // mint glow
              'rgba(255, 0, 100, 0.25)',   // pink-red glow
              'rgba(255, 220, 0, 0.25)'    // yellow glow
            ];
            const spotlightColor = spotlightPalette[index % spotlightPalette.length];
            return (
              <StrengthCard 
                key={strength.id} 
                strength={strength} 
                index={index}
                spotlightColor={spotlightColor}
              />
            );
          })}
        </div>

        {/* Removed the Project Success Rate, Average Delivery Time, and Client Satisfaction stats as requested */}
      </div>
    </section>
  );
};

export default StrengthsSection;