'use client'

import { useState } from 'react';
import Project from './Project';
import { Pair } from '@/lib/Types/Pair';
import { projects } from '@/lib/data/projects.data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Living');
  
  const filters = ['Living', 'Bucătărie', 'Dormitor', 'Baie', 'Cameră pentru copii'];

  // Create pairs of projects without repetition
  const createProjectPairs = (): Pair[] => {
    const pairs: Pair[] = [];
    for (let i = 0; i < projects.length; i += 2) {
      const pair: Pair = {
        slide1: projects[i]?.slides || [],
        slide2: projects[i + 1]?.slides || []
      };
      pairs.push(pair);
    }
    return pairs;
  };

  const projectPairs = createProjectPairs();

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
                ? 'bg-orange-400 text-white shadow-md'
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
            {...pair}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;