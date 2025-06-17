import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Accordion = ({ 
  title, 
  imagePath, 
  content, 
  link, 
  defaultOpen = false 
}:{
    title: string,
    imagePath: string,
    content: string,
    link: string,
    defaultOpen: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-gray-300 rounded-3xl bg-gray-50 overflow-hidden transition-all duration-300">
      {/* Header */}
      <button
        onClick={toggleItem}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
      >
        <h3 className="text-xl font-bold text-gray-900 pr-4">
          {title}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-0.5 h-4 bg-white absolute"></div>
            </div>
          )}
        </div>
      </button>

      {/* Content */}
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-[1000px] opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 pb-6">
          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image Section */}
              {imagePath && (
                <div className="lg:w-1/3">
                  <div className="relative">
                    <Image
                      src={imagePath} 
                      alt={title}
                      width={1200}
                      height={1200}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    {/* Wireframe overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              )}
              
              {/* Content Section */}
              <div className={`${imagePath ? 'lg:w-2/3' : 'w-full'}`}>
                <div className="space-y-4">
                  {/* Content */}
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {content}
                  </div>
                  
                  {/* Link Button */}
                  {link && (
                    <div className="mt-6">
                      <a 
                        href={link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
                      >
                        Vezi exemple
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;