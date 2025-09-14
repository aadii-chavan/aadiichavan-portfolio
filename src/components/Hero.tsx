import React from 'react';
import DarkVeil from './DarkVeil';
import { ArrowRight } from 'lucide-react';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* DarkVeil background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil speed={1.4} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10 [&>*:last-child]:mb-0">
          <div className="flex flex-col items-center gap-4" />

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white/90">
            We design and build projects that matter
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            We are Quantum Lotus, a team of six innovators passionate about solving real-world problems with technology. Explore our skills, projects, and strengths as we gear up for SIH.            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative inline-flex items-center justify-center rounded-xl font-semibold text-white transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:text-black"
            >
              <span className="relative z-[2] flex items-center gap-2 px-7 py-3">
                <span>View Project</span>
                <span className="inline-block"><ArrowRight size={18} /></span>
              </span>
              <svg className="absolute inset-0 -z-0 rounded-[inherit]" width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" fill="transparent" />
                <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" className="transition-colors fill-black/70 group-hover:fill-white" />
                <rect x="1.5" y="1.5" width="97" height="37" rx="10" ry="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" className="animate-dash" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="px-7 py-3 rounded-xl font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors"
            >
              Meet Team
            </button>
          </div>

          <div className="pt-24 pb-0 relative left-1/2 -translate-x-1/2 w-screen">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={65}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              width="100vw"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;