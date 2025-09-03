import React from 'react';
import { teamProjects } from '../data/teamData';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const featuredProjects = teamProjects.filter(project => project.featured);
  const otherProjects = teamProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Our Projects</h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Innovative solutions crafted with cutting-edge technologies to solve real-world problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#f0f6fc] mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {/* Removed More Projects section as requested */}

        {/* Removed the Ready for SIH Challenges card as requested */}
      </div>
    </section>
  );
};

export default ProjectsSection;