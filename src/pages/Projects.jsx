import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PaperMillMachines from '../assets/images/1b.webp';

const projects = [
  {
    pillar: '01',
    name: 'Rubberizing Rollers',
    path: '/projects/rubberizing-rollers',
    description: 'Specialized rubberizing processes for industrial rollers, enhancing durability and performance.',
    imageUrl: 'https://images.unsplash.com/photo-1599690933571-a773739839ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    pillar: '02',
    name: 'Pulp Mill Equipments',
    path: '/projects/pulp-mill-equipments',
    description: 'Engineering and manufacturing of high-efficiency equipment for modern pulp mills.',
    imageUrl: 'https://images.unsplash.com/photo-1629818823573-0427b363712c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    pillar: '03',
    name: 'Paper Mill Machines',
    path: '/projects/paper-mill-machines',
    description: 'Design and construction of state-of-the-art machinery for the paper manufacturing industry.',
    imageUrl: PaperMillMachines,
  },
  {
    pillar: '04',
    name: 'Asbestos Machines',
    path: '/projects/asbestos-machines',
    description: 'Safe and compliant machinery solutions for the handling and processing of asbestos materials.',
    imageUrl: 'https://images.unsplash.com/photo-1554121048-5232582885a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="text-indigo-600 font-semibold uppercase tracking-widest">Core Capabilities</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mt-2 mb-4">
            Four Pillars of Our Expertise
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            We specialize in four core areas of industrial engineering, delivering robust and reliable solutions tailored to our clients' operational needs.
          </p>
        </div>

        {/* 2x2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.name}
              to={project.path}
              className="group relative block rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative min-h-[450px]">
                {/* Background Image */}
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="relative flex flex-col justify-end h-full p-8 text-white z-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium self-start mb-4">
                    Pillar {project.pillar}
                  </div>
                  <h2 className="text-4xl font-bold mb-2">{project.name}</h2>
                  
                  {/* Description revealed on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-slate-200 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-lg font-semibold text-white transition-colors duration-300 group-hover:text-indigo-300">
                    View Products
                    <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;