import React from 'react';
import { teamStrengths } from '../data/teamData';
import StrengthCard from './StrengthCard';

const StrengthsSection: React.FC = () => {
  return (
    <section id="strengths" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Strengths</h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Core values and capabilities that drive our success in building exceptional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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