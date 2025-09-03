import React, { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/teamData';
import SpotlightCard from './SpotlightCard';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const maxTilt = 15; // Maximum tilt angle in degrees
    const tiltXValue = (mouseY / (rect.height / 2)) * maxTilt;
    const tiltYValue = -(mouseX / (rect.width / 2)) * maxTilt;
    
    setTiltX(tiltXValue);
    setTiltY(tiltYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltX(0);
    setTiltY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="perspective-1000"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <SpotlightCard
        className="relative rounded-2xl p-6 bg-white/[0.05] border border-white/10 overflow-hidden transition-all duration-300 h-80"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="space-y-4 h-full flex flex-col">
          <div className="space-y-2 flex-grow">
            <h3 className="text-xl font-semibold text-white/90 leading-tight">
              {project.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-xs text-[#58a6ff] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
            <div className="flex space-x-3">
              {project.github && (
                <a 
                  href={project.github}
                  className="text-white/70 hover:text-[#58a6ff] transition-colors flex items-center gap-1 text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link}
                  className="text-white/70 hover:text-[#58a6ff] transition-colors flex items-center gap-1 text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default ProjectCard;