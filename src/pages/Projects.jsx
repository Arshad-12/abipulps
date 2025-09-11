import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Rubberizing Rollers',
    path: '/projects/rubberizing-rollers',
    description: 'A brief description of Rubberizing Rollers will be shown here.',
  },
  {
    name: 'Pulp Mill Equipments',
    path: '/projects/pulp-mill-equipments',
    description: 'A brief description of Pulp Mill Equipments will be shown here.',
  },
  {
    name: 'Paper Mill Machines',
    path: '/projects/paper-mill-machines',
    description: 'A brief description of Paper Mill Machines will be shown here.',
  },
  {
    name: 'Asbestos Machines',
    path: '/projects/asbestos-machines',
    description: 'A brief description of Asbestos Machines will be shown here.',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Link to={project.path} className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;