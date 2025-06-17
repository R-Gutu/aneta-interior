'use client'

import { useState } from 'react';
import Project from './Project';
import { FilterType, Pair, ProjectType } from '@/lib/Types/Pair';
import { projects } from '@/lib/data/projects.data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Living');
  
  const filters: FilterType[] = ['Living', 'Bucătărie', 'Dormitor', 'Baie', 'Cameră pentru copii'];

  const getProjectsByFilter = (filter: FilterType): ProjectType[] => {
    return projects.map(project => ({
      ...project,
      // Only include the relevant room data
      living: filter === 'Living' ? project.living : [],
      kitchen: filter === 'Bucătărie' ? project.kitchen : [],
      bedroom: filter === 'Dormitor' ? project.bedroom : [],
      bathroom: filter === 'Baie' ? project.bathroom : [],
      bedroom_children: filter === 'Cameră pentru copii' ? project.bedroom_children : []
    }));
  };

  // Create pairs of projects from filtered projects
  const createProjectPairs = (filteredProjects: ProjectType[]): Pair[] => {
    const pairs: Pair[] = [];
    for (let i = 0; i < filteredProjects.length; i += 2) {
      if (filteredProjects[i] && filteredProjects[i + 1]) {
        const pair: Pair = {
          slide1: filteredProjects[i],
          slide2: filteredProjects[i + 1]
        };
        pairs.push(pair);
      }
    }
    return pairs;
  };

  // Get filtered projects and create pairs
  const filteredProjects = getProjectsByFilter(activeFilter);
  const projectPairs = createProjectPairs(filteredProjects);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 my-8 sm:my-12 font-inter">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm font-medium font-inter transition-all duration-200 whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-[#CDA274] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="">
        {projectPairs.map((pair, index) => (
          <Project 
            key={index} 
            slide1={pair.slide1}
            slide2={pair.slide2}
            filter={activeFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;