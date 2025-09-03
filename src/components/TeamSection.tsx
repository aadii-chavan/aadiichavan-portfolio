import React from 'react';
import MagicBento from './MagicBento';

const OurSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our broad skill set</h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Talented individuals with diverse expertise, united by our passion for innovation and excellence.
          </p>
        </div>

        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
          className="mt-2"
        />

        {/* Removed the Why "5.5 Peeps" section as requested */}
      </div>
    </section>
  );
};

export default OurSkillsSection;