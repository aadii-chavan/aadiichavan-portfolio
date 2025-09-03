import React from 'react';
import MagicBento from './DefaultBento';

const AboutTeam: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Our Team</h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            We are 5.5 Peeps, a dynamic team of tech enthusiasts participating in Smart India Hackathon. 
            Our diverse skill set and shared passion for innovation drive us to create solutions that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#f0f6fc]">
                Building the Future, One Solution at a Time
              </h3>
              <p className="text-[#8b949e] leading-relaxed">
                Our team brings together diverse talents in full-stack development, UI/UX design, 
                data science, mobile development, and quality assurance. We believe in the power 
                of collaboration and innovation to solve complex problems.
              </p>
              <p className="text-[#8b949e] leading-relaxed">
                With experience across modern technologies and a commitment to excellence, 
                we're ready to tackle any challenge that comes our way in the Smart India Hackathon.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'ML/AI', 'Mobile Dev', 'UI/UX', 'Cloud'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-[#161b22] border border-[#30363d] rounded-full text-sm text-[#58a6ff] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;