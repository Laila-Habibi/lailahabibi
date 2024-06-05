import React from 'react';
import { projects } from '@/components/data/ProjectCardData';
import { Project } from '@/components/data/ProjectCardData';
import ProjectCard from '@/components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-auto sm:px-16 lg:px-32">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;