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
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-[#f0f6fc] mb-8 text-center">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${(index + featuredProjects.length) * 200}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#f0f6fc] mb-4">Ready for SIH Challenges</h3>
            <p className="text-[#8b949e] leading-relaxed mb-6">
              Our diverse portfolio demonstrates our ability to tackle complex problems across different domains. 
              From healthcare to smart cities, we bring experience, innovation, and dedication to every challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-full text-sm text-[#58a6ff] font-medium">
                Web Development
              </span>
              <span className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-full text-sm text-[#58a6ff] font-medium">
                Mobile Apps
              </span>
              <span className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-full text-sm text-[#58a6ff] font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-full text-sm text-[#58a6ff] font-medium">
                IoT Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;