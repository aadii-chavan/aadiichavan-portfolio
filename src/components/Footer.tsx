import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:team@5peeps.com', label: 'Email' }
  ];

  return (
    <footer id="contact" className="bg-black border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text">aadii chavan</h3>
            <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed max-w-md">
              Personal portfolio showcasing my work across web, mobile, and AI/ML. I build performant, user‑centric products with clean engineering and modern tooling.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#8b949e] hover:text-[#58a6ff] transition-colors p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#f0f6fc]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Strengths', href: '#strengths' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-[#8b949e] hover:text-[#58a6ff] transition-colors text-sm py-1 min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#f0f6fc]">Technologies</h4>
            <ul className="space-y-2">
              {[
                'React & Node.js',
                'Python & ML/AI',
                'Mobile Development',
                'Cloud & DevOps'
              ].map((tech) => (
                <li key={tech} className="text-[#8b949e] text-sm py-1">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#30363d]">
        </div>
      </div>
    </footer>
  );
};

export default Footer;