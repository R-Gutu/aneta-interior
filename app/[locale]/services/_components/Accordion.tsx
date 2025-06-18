import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Accordion = ({ 
  titleKey, 
  imagePath, 
  contentKey, 
  link, 
  defaultOpen = false 
}:{
    titleKey: string,
    imagePath: string,
    contentKey: string,
    link: string,
    defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const t = useTranslations();

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-[#191A23] rounded-2xl sm:rounded-3xl bg-[#F5F5F5] overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-black/10 mx-2 sm:mx-0">
      {/* Header */}
      <button
        onClick={toggleItem}
        className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-gray-100 transition-all duration-300 group"
      >
        <p className="font-bricolage text-lg sm:text-xl md:text-2xl font-bold text-[#383838] pr-3 sm:pr-4 transition-colors group-hover:text-[#191A23] leading-tight">
          {t(titleKey)}
        </p>
        <div className="flex-shrink-0 relative">
          {/* Animated Plus/Minus Icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
            {/* Horizontal line */}
            <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-[#191A23] transition-all duration-300 ease-out"></div>
            {/* Vertical line */}
            <div className={`w-0.5 sm:w-1 h-6 sm:h-8 bg-[#191A23] absolute transition-all duration-300 ease-out ${
              isOpen 
                ? 'rotate-90 opacity-0 scale-0' 
                : 'rotate-0 opacity-100 scale-100'
            }`}></div>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className={`transition-all duration-500 ease-out ${
        isOpen 
          ? 'max-h-[1000px] opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="border-t border-[#191A23] pt-4 sm:pt-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 ease-out ${
              isOpen 
                ? 'transform translate-y-0 opacity-100' 
                : 'transform -translate-y-4 opacity-0'
            }`}>
              {/* Image Section */}
              {imagePath && (
                <div className="w-full relative overflow-hidden rounded-bl-[60px] rounded-tr-[60px] sm:rounded-bl-[80px] sm:rounded-tr-[80px] lg:rounded-bl-[120px] lg:rounded-tr-[120px] group/image order-2 lg:order-1">
                  <div className="relative h-48 sm:h-64 lg:h-80 transition-transform duration-700 ease-out group-hover/image:scale-105">
                    <Image
                      src={imagePath} 
                      alt={t(titleKey)}
                      fill
                      className="object-cover transition-all duration-700 ease-out"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/5 transition-all duration-300"></div>
                  </div>
                </div>
              )}
              
              {/* Content Section */}
              <div className={`${imagePath ? 'lg:w-2/3' : 'w-full'} transition-all duration-500 delay-100 order-1 lg:order-2 ${
                isOpen 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-4 opacity-0'
              }`}>
                <div className="space-y-3 sm:space-y-4">
                  {/* Content */}
                  <div className="text-[#383838] font-medium sm:font-semibold text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {t(contentKey)}
                  </div>
                  
                  {/* Link Button */}
                  {link && (
                    <div className="mt-4 sm:mt-6">
                      <a 
                        href={link}
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-lg transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-black/20 hover:scale-105 hover:bg-gray-50 active:scale-95 group/link"
                      >
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                          {t('common.viewExamples')}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
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