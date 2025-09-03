import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/teamData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="relative rounded-2xl p-6 bg-white/[0.05] border border-white/10 overflow-hidden transition-transform card-hover h-80"
      style={{ boxShadow: '0 0 40px rgba(132, 0, 255, 0.15)' }}
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
    </div>
  );
};

export default ProjectCard;