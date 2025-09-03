import React from 'react';
import { teamStrengths } from '../data/teamData';
import StrengthCard from './StrengthCard';

const StrengthsSection: React.FC = () => {
  return (
    <section className="section-padding bg-black">
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

        <div className="mt-16 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <div className="text-[#8b949e]">Project Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">48hrs</div>
                <div className="text-[#8b949e]">Average Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-[#8b949e]">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;