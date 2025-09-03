import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../data/teamData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 card-hover relative overflow-hidden">
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
        </div>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#f0f6fc] leading-tight">
            {project.title}
          </h3>
          <p className="text-[#8b949e] leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-full text-xs text-[#58a6ff] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#30363d]">
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github}
                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors flex items-center gap-1 text-sm"
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
                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors flex items-center gap-1 text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
          
          {project.featured && (
            <span className="text-xs text-yellow-400 font-medium">Featured</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;