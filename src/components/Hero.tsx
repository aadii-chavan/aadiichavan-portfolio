import React from 'react';
import DarkVeil from './DarkVeil';
import { ArrowRight, Users, Code, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, label: 'Team Members', value: '6' },
    { icon: Code, label: 'Projects', value: '15+' },
    { icon: Award, label: 'Technologies', value: '20+' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* DarkVeil background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">5.5 Peeps</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8b949e] font-light">
              SIH Team Portfolio
            </p>
            <p className="text-lg md:text-xl text-[#8b949e] max-w-3xl mx-auto leading-relaxed">
              A passionate team of developers, designers, and innovators building 
              cutting-edge solutions for Smart India Hackathon challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              View Projects
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('#team')}
              className="px-8 py-3 rounded-lg font-semibold text-[#58a6ff] border border-[#30363d] hover:bg-[#161b22] hover:border-[#58a6ff] transition-all duration-300"
            >
              Meet the Team
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#161b22] rounded-lg border border-[#30363d] mb-4">
                  <stat.icon className="w-6 h-6 text-[#58a6ff]" />
                </div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-[#8b949e]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;