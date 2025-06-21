import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function InteriorShowcase() {
  const t = useTranslations();

  return (
    <div className="py-8 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16 lg:space-y-20 xl:space-y-24">
        
        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black font-bricolage leading-tight">
            {t('interiorShowcase.main_title')}
          </h1>
        </div>

        {/* Cluj Chic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch border-b-2 border-[#EAE9E5]">
          {/* Image */}
          <div className="order-2 lg:order-1 lg:border-r-2 lg:pr-6 pb-6 border-[#EAE9E5] h-full">
            <Image
              src="/images/interior1.png"
              alt={t('interiorShowcase.cluj_interior_alt')}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            <div className="p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 relative">
              <div className="flex-shrink-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-bricolage leading-none">
                   {t('interiorShowcase.cluj')}
                </h2>
              </div>
            </div>
            
            <div className="border-t-2 border-[#EAE9E5] py-4 md:py-6 px-4 md:px-6 lg:px-12 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                  <p className="text-sm sm:text-base lg:text-lg text-[#383838] font-inter leading-relaxed mb-3 md:mb-4">
                    {t('interiorShowcase.cluj_description_bold')}
                  </p>
                  
                  <p className="text-sm sm:text-base text-[#383838] font-inter leading-relaxed">
                    {t('interiorShowcase.cluj_description')}
                  </p>
                </div>
            {/* Arrow indicator */}
            <div className="flex items-end justify-end md:justify-center flex-shrink-0">
              <Image
                src="/svgs/right-arrow.svg"
                alt={t('interiorShowcase.arrow_alt')}
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6 opacity-70"
              />
            </div>
            </div>
          </div>
        </div>

        {/* Urban Harmony Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch border-b-2 border-[#EAE9E5]">
          {/* Content */}
          <div className="order-1 space-y-4 md:space-y-6">
            <div className="p-4 md:p-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black font-bricolage leading-none">
                 {t('interiorShowcase.urban')}
              </h2>
            </div>
            
            <div className="border-t-2 border-[#EAE9E5] flex flex-col md:flex-row w-full p-4 md:p-6 gap-4 md:gap-6">
              <p className="text-sm sm:text-base text-[#383838] font-inter leading-relaxed flex-1">
                {t('interiorShowcase.harmony_description')}
              </p>
                  {/* Arrow indicator */}
                  <div className="flex items-end justify-end md:justify-center flex-shrink-0">
                  <Image
                      src="/svgs/right-arrow.svg"
                      alt={t('interiorShowcase.arrow_alt')}
                      width={24}
                      height={24}
                      className="w-5 h-5 md:w-6 md:h-6 opacity-70"
                  />
                  </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-2 lg:border-l-2 border-[#EAE9E5] lg:pl-6 pb-6">
            <Image
              src="/images/interior2.png"
              alt={t('interiorShowcase.urban_interior_alt')}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}