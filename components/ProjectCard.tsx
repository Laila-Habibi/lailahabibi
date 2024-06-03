import { Project } from "./data/ProjectCardData"



  import React from 'react'

  interface ProjectCardProps {
    project: Project;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
   <a href= {project.link} target="_blank">
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-105">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2  hover:cursor-pointer hover:underline">{project.name}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
      </div>
    </div>
    </a>
  
  );
};

export default ProjectCard;
  

  