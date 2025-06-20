'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'

const Hero = () => {
  const t = useTranslations();
  const router = useRouter()

  // Array of background images
  const backgroundImages = [
    '/images/herobg1.jpg',
    '/images/herobg2.jpg',
    '/images/herobg3.jpg',
    '/images/herobg4.jpg',
    '/images/herobg5.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [backgroundImages.length]);

  const handlePush = (link: string) => {
    try {
      router.push(link);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }

  return (
    <div className="w-full overflow-x-hidden max-h-screen">
      {/* Background Images - Full Screen */}
      <div className='w-full aspect-[16/9] lg:aspect-auto overflow-hidden max-h-[100vh]'>
        <Image
          src={backgroundImages[currentImageIndex]}
          alt={`${t('hero.bg_alt')} ${currentImageIndex + 1}`}
          width={2000}
          height={2000}
          className={"object-cover h-full max-h-screen object-[100%_70%] transition-opacity duration-1000"}
          priority
        />
      </div>
      {/* Content Overlay */}
      <div className={cn("md:absolute w-full bottom-0 flex items-end justify-start ml-0 lg:pl-20 xl:pl-30", "max-sm:items-end max-sm:justify-center")}>
        <div className="pb-5 z-10 w-full lg:w-auto flex flex-col sm:flex-row items-center md:items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-[40px] pt-6 sm:pt-8 md:pt-10 lg:pt-[40px] bg-white rounded-t-2xl sm:rounded-t-[32px]">
          <div className="flex flex-col items-center justify-center text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 font-bricolage">
              {t('hero.title')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-black/80 max-w-xs sm:max-w-sm md:max-w-md font-inter">
              {t('hero.description')}
            </p>
          </div>
          <div onClick={() => handlePush('about')} className="flex items-center font-inter text-sm sm:text-base md:text-lg lg:text-xl font-medium shadow-md text-black z-20 justify-center bg-white rounded-[16px] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 border-2 border-[#D9D9D9] cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 duration-300 w-full sm:w-auto whitespace-nowrap">
            <p>{t('hero.about_us')}</p>
            <Image src='/svgs/right-arrow.svg' alt={t('hero.arrow_alt')} width={16} height={16} className='ml-2 inline-block sm:w-5 sm:h-5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero