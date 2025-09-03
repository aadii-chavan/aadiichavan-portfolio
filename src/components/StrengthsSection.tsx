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
          {teamStrengths.map((strength, index) => (
            <StrengthCard 
              key={strength.id} 
              strength={strength} 
              index={index}
            />
          ))}
        </div>

        {/* Removed the Project Success Rate, Average Delivery Time, and Client Satisfaction stats as requested */}
      </div>
    </section>
  );
};

export default StrengthsSection;