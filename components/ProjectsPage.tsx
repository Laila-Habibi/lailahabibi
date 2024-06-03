import React from 'react';
import { projects, Project } from './data/ProjectCardData';
import ProjectCard from './ProjectCard';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-auto sm:px-16 lg:px-32">
      <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
      <p className='text-gray-400 text-md font-md text-center mb-8'>Here are some of my projects I have done recently.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;