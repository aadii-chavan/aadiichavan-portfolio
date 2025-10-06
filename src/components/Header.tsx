import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlassSurface from './GlassSurface';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Strengths', href: '#strengths' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <GlassSurface 
          width="100%" 
          height={68} 
          borderRadius={50}
          brightness={8}
          opacity={0.9}
          blur={26}
          backgroundOpacity={isScrolled ? 0.36 : 0.28}
          saturation={1.6}
          displace={0.5}
          distortionScale={-160}
          redOffset={4}
          greenOffset={12}
          blueOffset={20}
          preferBackdrop={true}
          mixBlendMode="normal"
          className="border border-white/10 bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="w-full flex items-center justify-between px-4 md:px-6">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white/90">aadii chavan</h1>
            </div>

            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-3 py-1 text-[#c9d1d9]/80 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#c9d1d9]/80 hover:text-[#58a6ff] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </GlassSurface>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 sm:px-6 lg:px-8 pb-2">
          <GlassSurface 
            width="100%" 
            height="auto" 
            borderRadius={24}
            brightness={0}
            opacity={0}
            blur={24}
            backgroundOpacity={45}
            saturation={0}
            displace={0}
            distortionScale={-300}
            redOffset={-50}
            greenOffset={-50}
            blueOffset={-50}
            mixBlendMode="screen"
            className="border border-white/10 w-full"
          >
            <div className="w-full px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-3 text-base text-[#c9d1d9]/90 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </GlassSurface>
        </div>
      )}
    </header>
  );
};

export default Header;