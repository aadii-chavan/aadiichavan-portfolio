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
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <GlassSurface 
          width="100%" 
          height={56} 
          borderRadius={24}
          brightness={60}
          opacity={0.9}
          blur={12}
          backgroundOpacity={isScrolled ? 0.16 : 0.08}
          saturation={1.2}
          displace={0.7}
          distortionScale={-140}
          redOffset={3}
          greenOffset={10}
          blueOffset={18}
          mixBlendMode="screen"
          className="shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/10"
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">5.5 Peeps</h1>
            </div>

            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-[#c9d1d9]/80 hover:text-white transition-colors duration-200 font-medium"
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
            borderRadius={20}
            brightness={60}
            opacity={0.9}
            blur={12}
            backgroundOpacity={0.14}
            saturation={1.2}
            displace={0.7}
            distortionScale={-140}
            redOffset={3}
            greenOffset={10}
            blueOffset={18}
            mixBlendMode="screen"
            className="border border-white/10"
          >
            <div className="w-full px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-[#c9d1d9]/80 hover:text-white transition-colors duration-200"
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