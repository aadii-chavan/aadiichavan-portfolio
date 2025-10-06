import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Member } from '../data/teamData';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden card-hover">
      <div className="aspect-w-16 aspect-h-12">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-40 md:h-48 object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#f0f6fc]">{member.name}</h3>
          <p className="text-[#58a6ff] font-medium">{member.role}</p>
          <p className="text-[#8b949e] text-sm leading-relaxed">{member.bio}</p>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {member.skills.slice(0, 4).map((skill) => (
              <span 
                key={skill}
                className="px-2 py-1 bg-[#0d1117] border border-[#30363d] rounded text-xs text-[#8b949e] font-medium"
              >
                {skill}
              </span>
            ))}
            {member.skills.length > 4 && (
              <span className="px-2 py-1 bg-[#0d1117] border border-[#30363d] rounded text-xs text-[#8b949e] font-medium">
                +{member.skills.length - 4} more
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-[#f0f6fc]">Recent Projects:</h4>
            <div className="space-y-1">
              {member.projects.slice(0, 2).map((project) => (
                <div key={project.id} className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#58a6ff] font-medium truncate">{project.title}</p>
                    <p className="text-xs text-[#8b949e] truncate">{project.description}</p>
                  </div>
                  {(project.link || project.github) && (
                    <ExternalLink className="w-3 h-3 text-[#8b949e] flex-shrink-0 ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-3 pt-2 border-t border-[#30363d]">
          {member.github && (
            <a 
              href={member.github} 
              className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          )}
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;