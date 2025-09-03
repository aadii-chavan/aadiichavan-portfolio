import React from 'react';
import { teamMembers } from '../data/teamData';
import MemberCard from './MemberCard';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Meet Our Team</h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Talented individuals with diverse expertise, united by our passion for innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#f0f6fc] mb-4">Why "5.5 Peeps"?</h3>
            <p className="text-[#8b949e] leading-relaxed">
              We're a team of 6 passionate developers, but one of us brings the energy 
              of half a team all by themselves! Hence "5.5 Peeps" - representing our 
              unique dynamic and collective strength.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;