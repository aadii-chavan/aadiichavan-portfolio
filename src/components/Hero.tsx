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
        <div className="space-y-10">
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://i.pravatar.cc/120?img=3"
              alt="Profile"
              className="w-24 h-24 rounded-full ring-4 ring-white/10 shadow-lg"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              <span className="inline-block w-4 h-4 rounded bg-white/80" />
              Verified Expert
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white/90">
              Designed for Designers to showcase their work
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Helping startups and brands to craft expressive and engaging solutions for their software needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-black/70 hover:bg-black transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              Remix Template
              <span className="ml-2 inline-block"><ArrowRight size={18} /></span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 rounded-xl font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors"
            >
              Get Athos Plus
            </button>
          </div>

          <div className="pt-6">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;