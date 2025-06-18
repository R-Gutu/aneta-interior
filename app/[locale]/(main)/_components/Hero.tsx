import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0">
        <Image 
          src="/images/herobg.png" 
          alt={t('hero.bg_alt')} 
          fill 
          className="object-cover px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-xl sm:rounded-2xl" 
          priority
        />
      </div>
      {/* Content Overlay */}
      <div className={cn("w-full h-full flex items-end justify-start lg:ml-20 xl:ml-30", "max-sm:items-end max-sm:justify-center")}>
        <div className="z-10 flex flex-col sm:flex-row items-center md:items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-[40px] pt-6 sm:pt-8 md:pt-10 lg:pt-[40px] bg-white rounded-t-2xl sm:rounded-t-[32px]">
          <div className="flex flex-col items-center justify-center text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 font-bricolage">
              {t('hero.title')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black max-w-xs sm:max-w-sm md:max-w-md font-inter">
              {t('hero.description')}
            </p>
          </div>
          <div className="flex items-center font-inter text-sm sm:text-base md:text-lg lg:text-xl font-medium shadow-md text-black z-20 justify-center bg-white rounded-[16px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 duration-300 w-full sm:w-auto whitespace-nowrap">
            <p>{t('hero.about_us')}</p>
            <Image src='/svgs/right-arrow.svg' alt={t('hero.arrow_alt')} width={16} height={16} className='ml-2 inline-block sm:w-5 sm:h-5' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero