'use client'

import { useState } from 'react';
import Project from './Project';
import { FilterType, Pair, ProjectType } from '@/lib/Types/Pair';
import { projects } from '@/lib/data/projects.data';
import { useTranslations, useLocale } from 'next-intl';

interface NavItem {
  key: FilterType;
  label: string;
}

const Projects = () => {
  const t = useTranslations('projects');
  const locale = useLocale(); // This is the proper way to get current locale
  const [activeFilter, setActiveFilter] = useState<FilterType>('living');

  // Type for Nav Item
  const filters: NavItem[] = [
   { key: 'living', label: t('filters.living') },
   { key: 'bucatarie', label: t('filters.bucatarie') },
   { key: 'dormitor', label: t('filters.dormitor') },
   { key: 'baie', label: t('filters.baie') },
   { key: 'camera_copii', label: t('filters.camera_copii') }
 ];

  const getProjectsByFilter = (filter: FilterType): ProjectType[] => {
    return projects.map(project => ({
      id: project.id,
      // Use locale directly instead of pathname parsing
      title: locale === 'ro' ? project.titleRO : project.titleEN,
      description: locale === 'ro' ? project.descriptionRO : project.descriptionEN,
      living: filter === 'living' ? project.living : [],
      kitchen: filter === 'bucatarie' ? project.kitchen : [],
      bedroom: filter === 'dormitor' ? project.bedroom : [],
      bathroom: filter === 'baie' ? project.bathroom : [],
      bedroom_children: filter === 'camera_copii' ? project.bedroom_children : []
    }));
  };

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

  const handleFilterClick = (filterKey: FilterType) => {
    setActiveFilter(filterKey);
  };

  const filteredProjects = getProjectsByFilter(activeFilter);
  const projectPairs = createProjectPairs(filteredProjects);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 my-8 sm:my-12 font-inter">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleFilterClick(key)}
            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm font-medium font-inter transition-all duration-200 whitespace-nowrap ${
              activeFilter === key
                ? 'bg-[#CDA274] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
            }`}
          >
            {label}
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